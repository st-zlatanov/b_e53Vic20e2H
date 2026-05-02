import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[88vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top sm:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&q=80&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-52 sm:pb-44">
   <div className="flex items-center justify-center gap-3 mb-6">
  <span className="hidden sm:block w-12 h-[2px] bg-blue-500"></span>

  <p className="text-sm sm:text-2xl text-white font-semibold tracking-[0.15em] uppercase text-center leading-tight">
    AUTOWORKS САНДАНСКИ
  </p>

  <span className="hidden sm:block w-12 h-[2px] bg-blue-500"></span>
</div>
        {/* <div className="max-w-2xl mx-auto text-center sm:text-left"> */}
<div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5">
            Грижа за вашия автомобил
          </h1> 
          
        <p className="text-sm sm:text-lg text-white/85 max-w-xl mb-6 sm:mb-8 leading-relaxed">
            Професионална диагностика, прецизни ремонти и обслужване за всички марки автомобили.
          </p>

          {/* <p className="text-sm sm:text-lg text-white/85 max-w-xl mb-6 sm:mb-8 leading-relaxed">
            Диагностика, ремонти и професионално обслужване на европейски, американски, японски и корейски автомобили.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              asChild
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-900/30 w-full sm:w-auto"
            >
              <Link href="/#contact">
                Запази час
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hidden sm:inline-flex gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/40 backdrop-blur-sm"
            >
              <Link href="/services">
                Нашите услуги
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center sm:justify-start gap-6 mt-6 text-xs sm:text-sm text-white/80">

  <span>Опит</span>
  <span className="opacity-40">|</span>

  <span>Качество</span>
  <span className="opacity-40">|</span>

  <span>Доверие</span>

</div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-5xl">
        <div className="backdrop-blur-xl bg-gray-900/88 border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl px-3 py-4 sm:px-8 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">

            {/* Phone */}
            <a
              href="tel:0876709701"
              className="flex items-center gap-3 group hover:bg-white/5 px-2 py-1.5 rounded-lg transition-all duration-200"
            >
              <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center transition-colors shadow-md">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Телефон</p>
                <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  0876709701
                </p>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/mN1HVXd5bvLD3SkQA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:bg-white/5 px-2 py-1.5 rounded-lg transition-all duration-200"
            >
              <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center transition-colors shadow-md">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Адрес</p>
                <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  гр. Сандански
                </p>
                <p className="text-white/65 text-xs">бул. Европа 17</p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="flex items-center gap-3 px-2 py-1.5">
              <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Работно време</p>
                <p className="text-white font-semibold text-sm">Пон–Пет: 9:00–18:00</p>
                <p className="text-white/65 text-xs">Събота: 9:00–14:00</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
