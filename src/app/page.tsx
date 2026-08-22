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

export default function Home() {
  return (
    <>
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
