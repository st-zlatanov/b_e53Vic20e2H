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
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            Нашите услуги
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Пълен спектър от автомобилни услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предлагаме професионално обслужване за всички видове автомобили с гаранция за качество
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-5 bg-card rounded-md border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 bg-primary/10 group-hover:bg-primary rounded-md flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
