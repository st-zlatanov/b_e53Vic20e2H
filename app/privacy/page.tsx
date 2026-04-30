import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика за поверителност | Автосервиз AutoWorks Сандански",
  description: "Политика за поверителност и защита на личните данни на Автосервиз AutoWorks Сандански.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page header */}
        <div className="bg-gray-900 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Правна информация</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Политика за поверителност</h1>
            <p className="text-gray-400 text-sm mt-2">Последна актуализация: 30 април 2025 г.</p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. Въведение</h2>
              <p>
                Автосервиз AutoWorks Сандански (наричан по-долу „ние", „нас" или „Дружеството") е ангажиран с опазването на личните данни на своите клиенти и посетители на уебсайта. Настоящата Политика за поверителност описва как събираме, използваме, съхраняваме и защитаваме вашата лична информация в съответствие с Регламент (ЕС) 2016/679 (GDPR) и приложимото българско законодателство.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. Администратор на лични данни</h2>
              <p>Администратор на личните данни е:</p>
              <ul className="list-none space-y-1 mt-2 pl-0">
                <li><strong>Наименование:</strong> Автосервиз AutoWorks Сандански</li>
                <li><strong>Адрес:</strong> гр. Сандански, бул. Европа 17</li>
                <li><strong>Телефон:</strong> <a href="tel:+359888123456" className="text-blue-600 hover:underline">+359 88 812 3456</a></li>
                <li><strong>Имейл:</strong> info@autoworks-sandanski.bg</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Какви данни събираме</h2>
              <p>Събираме следните категории лични данни:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Данни за контакт:</strong> имена, телефонен номер, имейл адрес (когато е предоставен).</li>
                <li><strong>Данни за автомобила:</strong> марка, модел, регистрационен номер (при записване за сервиз).</li>
                <li><strong>Технически данни:</strong> IP адрес, тип браузър, посетени страници (чрез бисквитки).</li>
                <li><strong>Комуникационни данни:</strong> съдържание на съобщения, изпратени чрез контактната форма.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Цели и правно основание за обработка</h2>
              <p>Обработваме вашите данни за следните цели:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Изпълнение на договор</strong> — обработка на заявки за сервизно обслужване и комуникация с клиенти (чл. 6, ал. 1, б. „б" GDPR).</li>
                <li><strong>Легитимен интерес</strong> — подобряване на услугите и уебсайта, защита срещу злоупотреби (чл. 6, ал. 1, б. „е" GDPR).</li>
                <li><strong>Съгласие</strong> — изпращане на маркетингови съобщения, когато сте дали изрично съгласие (чл. 6, ал. 1, б. „а" GDPR).</li>
                <li><strong>Законово задължение</strong> — спазване на счетоводни и данъчни изисквания (чл. 6, ал. 1, б. „в" GDPR).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Срок на съхранение</h2>
              <p>
                Съхраняваме личните ви данни само толкова дълго, колкото е необходимо за постигане на целите, за които са събрани:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Данни от контактни форми — до 12 месеца след последна комуникация.</li>
                <li>Счетоводни документи — 5 години съгласно Закона за счетоводството.</li>
                <li>Технически данни (логове) — до 6 месеца.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. Вашите права</h2>
              <p>Съгласно GDPR имате следните права:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Право на достъп</strong> — да получите копие от личните данни, които обработваме за вас.</li>
                <li><strong>Право на коригиране</strong> — да поискате коригиране на неточни данни.</li>
                <li><strong>Право на изтриване</strong> — да поискате изтриване на данните при определени условия.</li>
                <li><strong>Право на ограничаване</strong> — да ограничите обработката на данните ви.</li>
                <li><strong>Право на преносимост</strong> — да получите данните си в структуриран, машинночетим формат.</li>
                <li><strong>Право на възражение</strong> — да се противопоставите на обработката въз основа на легитимен интерес.</li>
                <li><strong>Право на оттегляне на съгласие</strong> — по всяко време, без да засяга законосъобразността на предходната обработка.</li>
              </ul>
              <p className="mt-3">
                За упражняване на правата си се свържете с нас на <a href="tel:+359888123456" className="text-blue-600 hover:underline">+359 88 812 3456</a> или на адрес гр. Сандански, бул. Европа 17.
              </p>
              <p className="mt-2">
                Имате право да подадете жалба до Комисията за защита на личните данни (КЗЛД): <a href="https://www.cpdp.bg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cpdp.bg</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. Бисквитки (Cookies)</h2>
              <p>
                Уебсайтът използва технически необходими бисквитки за правилното му функциониране. Не използваме бисквитки за проследяване или реклама без ваше изрично съгласие. Можете да управлявате настройките за бисквитки чрез браузъра си.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">8. Сигурност на данните</h2>
              <p>
                Прилагаме подходящи технически и организационни мерки за защита на личните ви данни срещу неоторизиран достъп, загуба или унищожаване, включително SSL криптиране на уебсайта.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">9. Промени в политиката</h2>
              <p>
                Запазваме правото да актуализираме настоящата политика. При съществени промени ще ви уведомим чрез уебсайта. Препоръчваме периодично да преглеждате тази страница.
              </p>
            </section>

          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Обратно към началото
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
