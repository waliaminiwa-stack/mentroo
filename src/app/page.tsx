import type { Metadata } from 'next'
import { company } from '../../config/company'
import { SERVICES } from '@/lib/services'
import { FAQS } from '@/lib/faq'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import IntroStrip from '@/components/IntroStrip'
import ForCustomers from '@/components/ForCustomers'
import ServiceCategories from '@/components/ServiceCategories'
import Marquee from '@/components/Marquee'
import HowItWorks from '@/components/HowItWorks'
import ForBusinesses from '@/components/ForBusinesses'
import TrustSection from '@/components/TrustSection'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import RequestFlow from '@/components/RequestFlow'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: company.meta.title,
  },
  description: company.meta.description,
  alternates: { canonical: company.meta.url },
  openGraph: {
    title: company.meta.title,
    description: company.meta.description,
    url: company.meta.url,
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': SERVICES.map((s) => ({
    '@type': 'Service',
    name: s.title,
    serviceType: s.label,
    provider: {
      '@type': 'Organization',
      name: 'Mentroo',
      url: company.meta.url,
    },
    description: s.description,
  })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <IntroStrip />
        <ForCustomers />
        <ServiceCategories />
        <Marquee />
        <HowItWorks />
        <ForBusinesses />
        <TrustSection />
        <CTABanner />
        <RequestFlow />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
