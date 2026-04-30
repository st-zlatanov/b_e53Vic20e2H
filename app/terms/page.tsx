import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия за ползване | Автосервиз AutoWorks Сандански",
  description: "Общи условия за ползване на уебсайта на Автосервиз AutoWorks Сандански.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page header */}
        <div className="bg-gray-900 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Правна информация</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Условия за ползване</h1>
            <p className="text-gray-400 text-sm mt-2">Последна актуализация: 30 април 2025 г.</p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. Общи разпоредби</h2>
              <p>
                Настоящите Общи условия уреждат отношенията между Автосервиз AutoWorks Сандански (наричан по-долу „Дружеството") и потребителите на уебсайта, достъпен на адрес <strong>autoworks-sandanski.bg</strong>. С използването на уебсайта вие приемате настоящите условия в пълен обем.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. Информация за Дружеството</h2>
              <ul className="list-none space-y-1 mt-2 pl-0">
                <li><strong>Наименование:</strong> Автосервиз AutoWorks Сандански</li>
                <li><strong>Адрес:</strong> гр. Сандански, бул. Европа 17</li>
                <li><strong>Телефон:</strong> <a href="tel:+359888123456" className="text-blue-600 hover:underline">+359 88 812 3456</a></li>
                <li><strong>Имейл:</strong> info@autoworks-sandanski.bg</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Предмет на уебсайта</h2>
              <p>
                Уебсайтът предоставя информация за услугите на Автосервиз AutoWorks Сандански, включително компютърна диагностика, ремонти, поддръжка и обслужване на автомобили. Уебсайтът предоставя и контактна форма за записване на час.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Права на интелектуална собственост</h2>
              <p>
                Всички материали на уебсайта — текстове, изображения, лога, графики и дизайн — са собственост на Дружеството или са използвани с разрешение. Забранено е копирането, разпространението или използването им без изрично писмено съгласие.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Ограничаване на отговорността</h2>
              <p>
                Дружеството полага усилия информацията на уебсайта да бъде точна и актуална, но не носи отговорност за:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Технически грешки или прекъсвания в достъпа до уебсайта.</li>
                <li>Вреди, произтичащи от използването или невъзможността за използване на уебсайта.</li>
                <li>Съдържанието на външни уебсайтове, към които водят линкове от нашия сайт.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. Записване на час и сервизни услуги</h2>
              <p>
                Попълването на контактната форма не представлява сключване на договор. Записването за сервизно обслужване се потвърждава от наш служител по телефон или имейл. Дружеството си запазва правото да откаже или пренасрочи час при обективна невъзможност.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. Цени и плащания</h2>
              <p>
                Цените за услуги се определят след диагностика и се съгласуват с клиента преди извършване на ремонта. Дружеството не е обвързано от ценови оферти, публикувани на уебсайта, ако такива са посочени като ориентировъчни.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">8. Приложимо право</h2>
              <p>
                Настоящите условия се уреждат от законодателството на Република България. Всички спорове се решават по взаимно съгласие, а при невъзможност — от компетентния български съд.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">9. Промени в условията</h2>
              <p>
                Дружеството си запазва правото да изменя настоящите условия по всяко време. Промените влизат в сила от момента на публикуването им на уебсайта. Продължаването на използването на уебсайта след промените означава приемане на актуализираните условия.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">10. Контакт</h2>
              <p>
                За въпроси относно настоящите условия се свържете с нас на{" "}
                <a href="tel:+359888123456" className="text-blue-600 hover:underline">+359 88 812 3456</a>{" "}
                или посетете ни на адрес гр. Сандански, бул. Европа 17.
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
