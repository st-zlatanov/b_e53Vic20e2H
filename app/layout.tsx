import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const baseUrl = 'https://autoworksbg.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Autoworks Сандански | Професионален Автосервиз',
  description: 'Професионален автосервиз в Сандански за всички марки автомобили - BMW, Mercedes, Audi, Toyota, Honda, Ford и други. Диагностика, ремонти, обслужване.',
  keywords: 'автосервиз, Сандански, ремонт на автомобили, компютърна диагностика, BMW, Mercedes, Audi, Toyota, Honda, Ford',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Autoworks Сандански | Професионален Автосервиз',
    description: 'Професионален автосервиз в Сандански за всички марки автомобили. Диагностика, ремонти, обслужване.',
    url: baseUrl,
    locale: 'bg_BG',
    type: 'website',
    siteName: 'Autoworks Сандански',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autoworks Сандански - Професионален Автосервиз',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoworks Сандански | Професионален Автосервиз',
    description: 'Професионален автосервиз в Сандански за всички марки автомобили.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/assets/images/d97fd803-0524-4be1-a4ec-5ddf3501b82d_removalai_preview-1777713898254.png',
        type: 'image/png',
      },
    ],
    apple: '/assets/images/d97fd803-0524-4be1-a4ec-5ddf3501b82d_removalai_preview-1777713898254.png',
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
              name: 'Autoworks Сандански',
              alternateName: 'Автосервиз Autoworks',
              url: baseUrl,
              logo: `${baseUrl}/assets/images/d97fd803-0524-4be1-a4ec-5ddf3501b82d_removalai_preview-1777713898254.png`,
              description: 'Професионален автосервиз в Сандански за всички марки автомобили',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+359-876-709-701',
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
              name: 'Autoworks Сандански',
              image: `${baseUrl}/assets/images/d97fd803-0524-4be1-a4ec-5ddf3501b82d_removalai_preview-1777713898254.png`,
              description: 'Професионален автосервиз за диагностика, ремонти и обслужване на всички марки автомобили',
              url: baseUrl,
              telephone: '+359-876-709-701',
              email: 'sklav40@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'бул. Европа 17',
                addressLocality: 'Сандански',
                postalCode: '2800',
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
              name: 'Autoworks Сандански | Професионален Автосервиз',
              description: 'Професионален автосервиз в Сандански за всички марки автомобили - BMW, Mercedes, Audi, Toyota, Honda, Ford и други. Диагностика, ремонти, обслужване.',
              url: baseUrl,
              isPartOf: {
                '@type': 'WebSite',
                name: 'Autoworks Сандански',
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
