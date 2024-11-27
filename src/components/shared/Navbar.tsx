'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import Button from './Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-emerald-700">
          BetPredict AI
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-emerald-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-700 hover:text-emerald-700">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-emerald-700">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-emerald-700">
            Testimonials
          </Link>
          <Button variant="secondary">Sign In</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#features"
                className="text-gray-700 hover:text-emerald-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-emerald-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-emerald-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Button variant="secondary" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
} 