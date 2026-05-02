"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Начало", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Галерия", href: "/gallery" },
  { name: "Контакти", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/assets/images/d97fd803-0524-4be1-a4ec-5ddf3501b82d_removalai_preview-1777713898254.png"
              alt="Autoworks Сандански лого"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-7">
            {navigation?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item?.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:0876709701"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              0876709701
            </a>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4">
              <Link href="/#contact">Запази час</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Отвори меню"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navigation?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href}
                className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item?.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
              <a
                href="tel:0876709701"
                className="flex items-center gap-2 py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                0876709701
              </a>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                  Запази час
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
