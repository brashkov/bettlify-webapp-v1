'use client'

import Container from '../shared/Container'
import Link from 'next/link'
import config from '@/config'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CallToAction() {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(52, 211, 153, 0.4) 2px, transparent 0)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-700/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="bg-emerald-900/50 rounded-full px-6 py-2.5 border border-emerald-400/30">
              <p className="text-emerald-300 font-semibold flex items-center gap-3">
                <span className="text-emerald-400">LIMITED TIME OFFER</span>
                <span className="text-sm px-2 py-0.5 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                  7 DAYS FREE
                </span>
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Making{' '}
            <span className="text-emerald-400">Better Betting Decisions?</span>
          </h2>
          
          <p className="text-emerald-300 text-lg mb-8">
            Join hundreds of users who are already benefiting from our AI-powered predictions.
            <br className="hidden md:block" />
            <br />
            Start your journey to smarter betting today.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              href={config.ctaUrl}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#8B5CF6] rounded-xl hover:bg-[#7C3AED] transition-all duration-200"
            >
              Get Started Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-2 text-emerald-400/80 text-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
              </svg>
              Cancel Anytime!
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 