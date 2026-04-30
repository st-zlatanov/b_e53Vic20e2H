import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Модерно оборудване за диагностика",
  "Оригинални резервни части",
  "Сертифицирани специалисти",
  "Конкурентни цени",
  "Гаранция на услугите",
  "Бързо обслужване"
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary rounded-md overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">AW</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">Автосервиз AutoWorks</p>
                  <p className="text-sm text-muted-foreground">гр. Сандански</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
              За нас
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Над 15 години професионално обслужване
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Автосервиз AutoWorks Сандански е създаден с една ясна цел - да предоставим на клиентите си най-качественото автомобилно обслужване в региона.
              </p>
              <p>
                През годините инвестирахме в най-съвременно диагностично оборудване и непрекъснато обучение на нашия екип, за да можем да обслужваме всички марки автомобили - от класически европейски модели до най-новите американски и японски коли.
              </p>
              <p>
                Вярваме, че честността и прозрачността са в основата на доверието. Затова винаги обясняваме подробно какъв ремонт е необходим и даваме възможност на клиентите да вземат информирано решение.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
