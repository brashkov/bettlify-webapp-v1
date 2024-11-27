import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import CallToAction from '@/components/landing/CallToAction'
import Navbar from '@/components/shared/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
