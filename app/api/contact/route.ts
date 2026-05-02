import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Всички полета са задължителни' },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      // Fallback: log and return success so form doesn't break
      console.log('Contact form submission (no email service configured):', { name, phone, message });
      return NextResponse.json({ success: true });
    }

    const emailPayload = {
      sender: { name: 'Autoworks Сандански', email: 'noreply@autoworksbg.com' },
      to: [{ email: 'sklav40@gmail.com', name: 'Autoworks' }],
      subject: `Ново запитване от ${name}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563EB;">Ново запитване от сайта</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; width: 120px;">Име:</td>
              <td style="padding: 8px; color: #111827;">${name}</td>
            </tr>
            <tr style="background: #F9FAFB;">
              <td style="padding: 8px; font-weight: bold; color: #374151;">Телефон:</td>
              <td style="padding: 8px; color: #111827;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; vertical-align: top;">Съобщение:</td>
              <td style="padding: 8px; color: #111827;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #E5E7EB;" />
          <p style="color: #6B7280; font-size: 12px;">Изпратено от autoworksbg.com</p>
        </div>
      `,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Грешка при изпращане на имейл' },
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
