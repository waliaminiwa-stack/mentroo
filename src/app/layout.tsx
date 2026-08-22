import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { company } from '../../config/company'
import LenisProvider from '@/components/LenisProvider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#14325F',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(company.meta.url),
  title: {
    default: company.meta.title,
    template: '%s | Mentroo',
  },
  description: company.meta.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: company.meta.title,
    description: company.meta.description,
    url: company.meta.url,
    siteName: company.name,
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: company.meta.title,
    description: company.meta.description,
  },
}

// Only include contactPoint fields that have real (non-placeholder) values
const isPlaceholder = (v: string) => v.startsWith('[')

const contactFields = {
  ...(!isPlaceholder(company.email) && { email: company.email }),
  ...(!isPlaceholder(company.phone) && { telephone: company.phone }),
}

const hasSameAs = Object.values(company.socials).some(Boolean)

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  legalName: company.legalName,
  url: company.meta.url,
  logo: `${company.meta.url}/logo/mentroo-logo.svg`,
  description:
    'Mentroo vermittelt konkrete Aufträge an geprüfte Fachbetriebe für Reinigung, Sanierung, Rohr & Sanitär, Heizung, Transport, Renovierung und weitere Dienstleistungen in Deutschland.',
  ...(Object.keys(contactFields).length > 0 && {
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'German',
      ...contactFields,
    },
  }),
  ...(hasSameAs && {
    sameAs: Object.values(company.socials).filter(Boolean),
  }),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
