import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/logo";

const serviceLinks = [
  { name: "Компютърна диагностика", href: "#services" },
  { name: "Смяна на масла", href: "#services" },
  { name: "Спирачна система", href: "#services" },
  { name: "Климатични системи", href: "#services" },
  { name: "Ремонт на двигатели", href: "#services" },
  { name: "Електрически проблеми", href: "#services" },
]

const companyLinks = [
  { name: "За нас", href: "#about" },
  { name: "Галерия", href: "#gallery" },
  { name: "Контакти", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Logo className="w-9 h-9" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-sm">AutoWorks</span>
                <span className="text-xs text-blue-400">Автосервиз Сандански</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Професионален автосервиз за всички марки автомобили. Качествено обслужване на конкурентни цени.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+359888123456" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +359 88 812 3456
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=гр.+Сандански,+бул.+Европа+17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                гр. Сандански, бул. Европа 17
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Услуги</h3>
            <ul className="space-y-2">
              {serviceLinks?.map((item) => (
                <li key={item?.name}>
                  <Link
                    href={item?.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2">
              {companyLinks?.map((item) => (
                <li key={item?.name}>
                  <Link
                    href={item?.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                Работно време
              </span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between gap-4">
                <span>Понеделник – Петък</span>
                <span className="text-white font-medium">9:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Събота</span>
                <span className="text-white font-medium">9:00 – 14:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Неделя</span>
                <span className="text-gray-500">Затворено</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date()?.getFullYear()} Автосервиз AutoWorks Сандански. Всички права запазени.
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
                Поверителност
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
                Условия за ползване
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
