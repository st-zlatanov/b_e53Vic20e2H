import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://be53vic204136.builtwithrocket.new';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Автосервиз Сандански | Професионален ремонт на всички марки автомобили',
  description: 'Професионален автосервиз в Сандански за всички марки автомобили - BMW, Mercedes, Audi, Toyota, Honda, Ford и други. Диагностика, ремонти, обслужване.',
  keywords: 'автосервиз, Сандански, ремонт на автомобили, компютърна диагностика, BMW, Mercedes, Audi, Toyota, Honda, Ford',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Автосервиз Сандански | Професионален ремонт',
    description: 'Професионален автосервиз в Сандански за всички марки автомобили. Диагностика, ремонти, обслужване.',
    url: baseUrl,
    locale: 'bg_BG',
    type: 'website',
    siteName: 'AutoWorks Сандански',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Автосервиз AutoWorks Сандански - професионален ремонт на автомобили',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Автосервиз Сандански | Професионален ремонт',
    description: 'Професионален автосервиз в Сандански за всички марки автомобили.',
    images: ['/og-image.png'],
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
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AutoWorks Сандански',
              alternateName: 'Автосервиз AutoWorks',
              url: baseUrl,
              logo: `${baseUrl}/placeholder-logo.png`,
              description: 'Професионален автосервиз в Сандански за всички марки автомобили',
              sameAs: [
                'https://www.facebook.com',
                'https://www.instagram.com',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+359-88-812-3456',
                areaServed: 'BG',
                availableLanguage: 'bg',
              },
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'AutoWorks Сандански',
              image: `${baseUrl}/placeholder-logo.png`,
              description: 'Професионален автосервиз за диагностика, ремонти и обслужване на всички марки автомобили',
              url: baseUrl,
              telephone: '+359-88-812-3456',
              email: 'contact@autoworks-sandanski.bg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'бул. Европа 17',
                addressLocality: 'Сандански',
                postalCode: '2700',
                addressCountry: 'BG',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '41.5533',
                longitude: '23.3168',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '127',
              },
              areaServed: {
                '@type': 'City',
                name: 'Сандански',
              },
              knowsAbout: [
                'Car Repair',
                'Diagnostic Services',
                'Oil Change',
                'Brake Service',
                'Suspension Repair',
                'Engine Repair',
                'Air Conditioning Service',
                'Transmission Service',
                'Electrical Repair',
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Автосервиз Сандански | Професионален ремонт на всички марки автомобили',
              description: 'Професионален автосервиз в Сандански за всички марки автомобили - BMW, Mercedes, Audi, Toyota, Honda, Ford и други. Диагностика, ремонти, обслужване.',
              url: baseUrl,
              isPartOf: {
                '@type': 'WebSite',
                name: 'AutoWorks Сандански',
                url: baseUrl,
              },
              inLanguage: 'bg',
            }),
          }}
        />
      
      <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbe53vic204136back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
      <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
