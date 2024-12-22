import Script from 'next/script'
import Hero from '@/components/landing/Hero'
import LiveResults from '@/components/landing/LiveResults'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import CallToAction from '@/components/landing/CallToAction'
import Navbar from '@/components/shared/Navbar'
import FAQ from '@/components/landing/FAQ'
import MoneyBackGuarantee from '@/components/landing/MoneyBackGuarantee'

export const runtime = 'edge'
export const preferredRegion = 'auto'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bettlify",
    "applicationCategory": "Sports Analytics",
    "description": "AI-powered sports betting predictions platform with 70%+ accuracy",
    "offers": {
      "@type": "Offer",
      "price": "39.00",
      "priceCurrency": "EUR",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    }
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Navbar />
        <Hero />
        <LiveResults />
        <Features />
        <Pricing />
        <Testimonials />
        <MoneyBackGuarantee />
        <FAQ />
        <CallToAction />
      </main>
    </>
  )
}
