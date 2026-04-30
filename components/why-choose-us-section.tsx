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
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
              Защо да изберете нас
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Вашият доверен партньор за автомобилни ремонти
            </h2>
            <p className="text-muted-foreground mb-8">
              С години опит в автомобилната индустрия, ние сме се утвърдили като надежден партньор за клиентите в региона. Нашата мисия е да предоставим най-доброто обслужване на конкурентни цени.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-5 bg-card rounded-md border border-border">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">години опит</div>
              </div>
              <div className="text-center p-5 bg-card rounded-md border border-border">
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">доволни клиенти</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-4 p-4 bg-card rounded-md border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-md flex items-center justify-center shrink-0 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary mb-0.5 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
