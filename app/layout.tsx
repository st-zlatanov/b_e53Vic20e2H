import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
 import'./globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Автосервиз Сандански | Професионален ремонт на всички марки автомобили',
  description: 'Професионален автосервиз в Сандански за всички марки автомобили - BMW, Mercedes, Audi, Toyota, Honda, Ford и други. Диагностика, ремонти, обслужване.',
  keywords: 'автосервиз, Сандански, ремонт на автомобили, компютърна диагностика, BMW, Mercedes, Audi, Toyota, Honda, Ford',
  openGraph: {
    title: 'Автосервиз Сандански | Професионален ремонт на всички марки',
    description: 'Професионален автосервиз в Сандански за всички марки автомобили. Диагностика, ремонти, обслужване.',
    locale: 'bg_BG',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg" className="bg-background">
      <body className={`${inter.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbe53vic204136back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  )
}
