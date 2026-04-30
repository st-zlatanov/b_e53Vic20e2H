"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const navigation = [
  { name: "Начало", href: "#" },
  { name: "Услуги", href: "#services" },
  { name: "За нас", href: "#about" },
  { name: "Галерия", href: "#gallery" },
  { name: "Контакти", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-semibold text-foreground leading-tight">AutoWorks</span>
              <span className="text-xs text-primary">Автосервиз Сандански</span>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a 
              href="tel:+359888123456" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +359 88 812 3456
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">Запази час</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Отвори меню</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <a 
                href="tel:+359888123456" 
                className="flex items-center gap-2 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +359 88 812 3456
              </a>
              <Button asChild className="w-full mt-3 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Запази час
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
