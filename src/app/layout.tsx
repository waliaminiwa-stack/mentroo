import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: company.meta.title,
  description: company.meta.description,
  metadataBase: new URL(company.meta.url),
  openGraph: {
    title: company.meta.title,
    description: company.meta.description,
    url: company.meta.url,
    siteName: company.name,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: company.meta.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: company.meta.title,
    description: company.meta.description,
  },
  alternates: { canonical: company.meta.url },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
