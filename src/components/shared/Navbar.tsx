'use client'

import Link from 'next/link'
import Container from './Container'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-emerald-700">
            BetPredict AI
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 hover:text-emerald-600">
              Features
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-emerald-600">
              Pricing
            </Link>
            <Link href="/#testimonials" className="text-gray-600 hover:text-emerald-600">
              Testimonials
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/signin" 
              className="text-emerald-700 font-medium hover:text-emerald-600 px-4 py-2 rounded-lg border border-transparent hover:border-emerald-100"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-emerald-500 transition-colors"
            >
              Start For Free
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
} 