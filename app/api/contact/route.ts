import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Всички полета са задължителни' },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.log('Contact form:', { name, phone, email, message });
      return NextResponse.json({ success: true });
    }

    // 📩 Имейл към теб (admin)
    const adminEmail = {
      sender: {
        name: 'Autoworks Сандански',
        email: 'noreply@autoworksbg.com',
      },
      to: [
        {
          email: 'sklav40@gmail.com',
          name: 'Autoworks',
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `Ново запитване от ${name}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB;">Ново запитване</h2>
          
          <p><b>Име:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Телефон:</b> <a href="tel:${phone}">${phone}</a></p>
          <p><b>Съобщение:</b><br/>${message.replace(/\n/g, '<br/>')}</p>

          <hr style="margin:20px 0;border:none;border-top:1px solid #eee" />
          <p style="font-size:12px;color:#888;">autoworksbg.com</p>
        </div>
      `,
    };

    // 📩 Имейл към клиента
    const clientEmail = {
      sender: {
        name: 'Autoworks Сандански',
        email: 'noreply@autoworksbg.com',
      },
      to: [
        {
          email: email,
          name: name,
        },
      ],
      subject: 'Получихме вашето запитване',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#2563EB;">Благодарим ви!</h2>
          
          <p>Здравейте, ${name},</p>
          
          <p>Получихме вашето запитване и ще се свържем с вас възможно най-скоро.</p>

          <div style="margin-top:20px;padding:15px;background:#F9FAFB;border-radius:8px">
            <p><b>Телефон:</b> 0876709701</p>
            <p><b>Адрес:</b> гр. Сандански, бул. Европа 17</p>
          </div>

          <p style="margin-top:20px;">Поздрави,<br/>Autoworks Сандански</p>
        </div>
      `,
    };

    // 📤 Изпращане
    const send = (payload: any) =>
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': brevoApiKey,
        },
        body: JSON.stringify(payload),
      });

    const [adminRes, clientRes] = await Promise.all([
      send(adminEmail),
      send(clientEmail),
    ]);

    if (!adminRes.ok || !clientRes.ok) {
      console.error('Brevo error');
      return NextResponse.json(
        { error: 'Грешка при изпращане' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Вътрешна грешка на сървъра' },
      { status: 500 }
    );
  }
}