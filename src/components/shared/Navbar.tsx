'use client'

import Link from 'next/link'
import Container from './Container'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import config from '../../config'
import Logo from './Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo className="w-auto h-10" />

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 hover:text-emerald-600 scroll-smooth">
              Features
            </Link>
            <Link href="/#testimonials" className="text-gray-600 hover:text-emerald-600 scroll-smooth">
              Testimonials
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-emerald-600">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href={config.signInUrl}
              className="text-emerald-700 font-medium hover:text-emerald-600 px-4 py-2 rounded-lg"
            >
              Sign In
            </Link>
            <Link
              href={config.ctaUrl}
              className="bg-[#8B5CF6] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#7C3AED] transition-colors"
            >
              Start For Free
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <Link 
              href={config.signInUrl}
              className="text-emerald-700 font-medium"
            >
              Sign In
            </Link>
            <Link
              href={config.ctaUrl}
              className="bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg"
            >
              Start For Free
            </Link>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-emerald-950 z-50">
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <Logo className="w-auto h-10 brightness-0 invert" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-emerald-400 hover:text-emerald-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-white">
                Unlock your
                <br />
                <span className="text-emerald-400">betting potential</span>
              </h1>
              
              <p className="text-emerald-100">
                Get accurate predictions powered by advanced AI algorithms. Make informed betting decisions with our data-driven insights.
              </p>

              <Link
                href={config.ctaUrl}
                className="block w-full py-3 bg-emerald-400 text-emerald-950 font-semibold rounded-lg text-center"
              >
                Start For Free
              </Link>

              <p className="text-emerald-400/80 text-sm text-center">
                BetPredict AI is free to try for as long as you&apos;d like
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 