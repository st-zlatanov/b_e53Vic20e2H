import { CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";

const highlights = [
"Модерно диагностично оборудване",
"Оригинални резервни части",
"Сертифицирани специалисти",
"Конкурентни цени",
"Гаранция на услугите",
"Бързо обслужване"];


const stats = [
{ value: "10+", label: "години опит" },
{ value: "1000+", label: "доволни клиенти" },
{ value: "Всички", label: "марки автомобили" }];


export function AboutSection() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_12443223b-1777547763803.png"
                alt="Механик работи в автосервиз AutoWorks Сандански"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-xl shadow-xl border border-gray-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Гаранция</div>
                  <div className="text-xs text-gray-500">на всички ремонти</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              За нас
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Над 10 години професионално обслужване
            </h2>

            <div className="space-y-4 text-gray-600 mb-7 text-sm sm:text-base leading-relaxed">
              <p>
                Автосервиз AutoWorks Сандански е създаден с една ясна цел — да предоставим на клиентите си най-качественото автомобилно обслужване в региона.
              </p>
              <p>
                Инвестирахме в съвременно диагностично оборудване и непрекъснато обучение на нашия екип, за да обслужваме всички марки автомобили — от класически европейски модели до най-новите американски, японски и корейски коли.
              </p>
              <p>
                Честността и прозрачността са в основата на доверието. Винаги обясняваме подробно какъв ремонт е необходим и даваме възможност на клиентите да вземат информирано решение.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {highlights?.map((item) =>
              <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              )}
            </div>

            {/* Stats row */}
            {/* <div className="flex gap-6 pt-6 border-t border-gray-200">
              {stats?.map((stat, i) =>
              <div key={i}>
                  <div className="text-2xl font-bold text-blue-600">{stat?.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat?.label}</div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>);

}