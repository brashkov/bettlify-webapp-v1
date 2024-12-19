import Hero from '@/components/landing/Hero'
import LiveResults from '@/components/landing/LiveResults'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import CallToAction from '@/components/landing/CallToAction'
import Navbar from '@/components/shared/Navbar'
import FAQ from '@/components/landing/FAQ'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LiveResults />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  )
}
