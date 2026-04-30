import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[85vh] flex flex-col justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Engine-Service-lt7NOyCYo1t32DXYOGV3665jUqhGCG.png')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-48 sm:pb-40">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-balance mb-4 sm:mb-6">
            Автосервиз за всички марки автомобили в гр. Сандански
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-xl mb-6 sm:mb-8 text-pretty">
            Диагностика, ремонти и професионално обслужване на европейски, американски, японски и корейски автомобили.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Link href="#contact">
                Запази час
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hidden sm:inline-flex gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="#contact">
                Свържи се с нас
              </Link>
            </Button>
          </div>
        </div>
      </div>


      {/* Bottom Info Bar */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-5xl">
        <div className="backdrop-blur-xl bg-neutral-900/85 border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl px-4 py-4 sm:px-8 sm:py-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">

            {/* Phone */}
            <a
              href="tel:+359888123456"
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer hover:bg-white/5 hover:scale-[1.02] -mx-2 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 group-hover:bg-blue-400 flex items-center justify-center transition-all duration-300 shadow-lg">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <p className="text-xs text-white/60 uppercase tracking-wide mb-1">
                  Телефон
                </p>
                <p className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                  +359 88 812 3456
                </p>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=гр.+Сандански,+бул.+Европа+17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer hover:bg-white/5 hover:scale-[1.02] -mx-2 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 group-hover:bg-blue-400 flex items-center justify-center transition-all duration-300 shadow-lg">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <p className="text-xs text-white/60 uppercase tracking-wide mb-1">
                  Адрес
                </p>
                <p className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                  гр. Сандански
                </p>
                <p className="text-white/80 text-xs sm:text-sm">
                  бул. Европа 17
                </p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="flex items-center gap-3 sm:gap-4 -mx-2 px-3 py-2">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <p className="text-xs text-white/60 uppercase tracking-wide mb-1">
                  Работно време
                </p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Пон-Пет: 9:00 - 18:00
                </p>
                <p className="text-white/80 text-xs sm:text-sm">
                  Събота: 9:00 - 14:00
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
