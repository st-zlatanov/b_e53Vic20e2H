import { Car, Award, Users, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Работа с всички марки",
    description: "Обслужваме европейски, американски, японски и корейски автомобили."
  },
  {
    icon: Award,
    title: "Качествени части",
    description: "Използваме само оригинални и висококачествени резервни части."
  },
  {
    icon: Users,
    title: "Опитни механици",
    description: "Нашият екип има над 15 години опит в бранша."
  },
  {
    icon: Clock,
    title: "Бързо обслужване",
    description: "Ценим вашето време и работим максимално бързо."
  },
  {
    icon: ShieldCheck,
    title: "Гаранция",
    description: "Гаранция на всички извършени ремонти и монтирани части."
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Защо да изберете нас
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Вашият доверен партньор за автомобилни ремонти
            </h2>
            <p className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed">
              С години опит в автомобилната индустрия, ние сме се утвърдили като надежден партньор за клиентите в региона. Нашата мисия е да предоставим най-доброто обслужване на конкурентни цени.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-500">години опит</div>
              </div>
              <div className="text-center p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">5000+</div>
                <div className="text-sm text-gray-500">доволни клиенти</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {features?.map((feature) => (
              <div
                key={feature?.title}
                className="group flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200">
                  <feature.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-0.5 transition-colors text-sm">
                    {feature?.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
