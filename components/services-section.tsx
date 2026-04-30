import { 
  MonitorSmartphone, 
  Droplets, 
  CircleDot, 
  Gauge, 
  Cog, 
  Snowflake, 
  Settings, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Компютърна диагностика",
    description: "Професионална диагностика с най-съвременно оборудване за всички марки автомобили."
  },
  {
    icon: Droplets,
    title: "Смяна на масла и филтри",
    description: "Качествени масла и оригинални филтри за дълъг живот на вашия двигател."
  },
  {
    icon: CircleDot,
    title: "Спирачна система",
    description: "Ремонт и поддръжка на спирачни дискове, накладки, цилиндри и маркучи."
  },
  {
    icon: Gauge,
    title: "Окачване",
    description: "Диагностика и ремонт на амортисьори, пружини, носачи и стабилизатори."
  },
  {
    icon: Cog,
    title: "Двигатели",
    description: "Основен и частичен ремонт на бензинови и дизелови двигатели."
  },
  {
    icon: Snowflake,
    title: "Климатични системи",
    description: "Зареждане, почистване и ремонт на автоклиматици за всички марки."
  },
  {
    icon: Settings,
    title: "Скоростни кутии",
    description: "Обслужване на механични и автоматични скоростни кутии."
  },
  {
    icon: Zap,
    title: "Електрически проблеми",
    description: "Диагностика и ремонт на електрическата система на вашия автомобил."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Нашите услуги
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Пълен спектър от автомобилни услуги
          </h2>
          <p className="text-gray-500 max-w-xl">
            Предлагаме професионално обслужване за всички видове автомобили с гаранция за качество
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services?.map((service) => (
            <div
              key={service?.title}
              className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250 cursor-default"
            >
              <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-lg flex items-center justify-center mb-4 transition-colors duration-250">
                <service.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-250" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 mb-2 transition-colors duration-250">
                {service?.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
