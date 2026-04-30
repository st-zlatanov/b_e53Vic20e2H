import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const navigation = {
  services: [
    { name: "Компютърна диагностика", href: "#services" },
    { name: "Смяна на масла", href: "#services" },
    { name: "Спирачна система", href: "#services" },
    { name: "Климатични системи", href: "#services" },
  ],
  company: [
    { name: "За нас", href: "#about" },
    { name: "Галерия", href: "#gallery" },
    { name: "Контакти", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="w-9 h-9 text-primary-foreground" />
              <div className="flex flex-col">
                <span className="font-semibold text-primary-foreground text-sm leading-tight">AutoWorks</span>
                <span className="text-xs text-accent">Автосервиз Сандански</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-5">
              Професионален автосервиз за всички марки автомобили. Качествено обслужване на конкурентни цени.
            </p>
            <div className="space-y-2">
              <a href="tel:+359888123456" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +359 88 812 3456
              </a>
              <a href="mailto:info@autoservice-sandanski.bg" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@autoservice-sandanski.bg
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                ул. Индустриална 15, Сандански
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground mb-4">Услуги</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground mb-4">Компания</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground mb-4">Работно време</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Понеделник - Петък</span>
                <span>8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Събота</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Неделя</span>
                <span>Затворено</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} Автосервиз AutoWorks Сандански. Всички права запазени.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Политика за поверителност
              </Link>
              <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Условия за ползване
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
