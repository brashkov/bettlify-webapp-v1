'use client'

import Container from '../shared/Container'
import Button from '../shared/Button'
import Image from 'next/image'

const stats = [
  {
    value: '92.4%',
    label: ['Analysis', 'Accuracy'],
    isLive: true
  },
  {
    value: '+156.8',
    label: ['30 Days P/L', 'Units'],
    isLive: true,
    update: 'REAL-TIME'
  },
  {
    value: '1,458',
    label: ['Successful', 'Predictions'],
    isLive: true
  }
]

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-emerald-900">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 2px, transparent 0)
        `,
        backgroundSize: '24px 24px'
      }} />

      {/* Content */}
      <Container className="relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-left w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="inline-block">Unlock your</span>{' '}
              <span className="inline-block text-emerald-300">
                betting potential
              </span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-xl">
              Get accurate predictions powered by advanced AI algorithms.
              Make informed betting decisions with our data-driven
              insights.
            </p>
            <div>
              <Button 
                className="w-full sm:w-auto text-base bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg font-semibold"
              >
                Start Free Trial Now
              </Button>
              <p className="mt-4 text-emerald-200 text-sm">
                BetPredict AI is free to try for as long as you&apos;d like
              </p>
            </div>
          </div>

          {/* Right side - Image and Stats */}
          <div className="flex-1 relative w-full">
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] mb-6">
              <div className="absolute inset-0 bg-emerald-800/20 rounded-3xl backdrop-blur-sm border border-emerald-700/20">
                <div className="relative h-full flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-2xl flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 md:w-16 md:h-16 text-emerald-500/20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm3 7h6v2H9v-2zm0-3h6v2H9v-2zm0-3h6v2H9V8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative bg-emerald-800/40 backdrop-blur-md rounded-2xl p-3 md:p-6 border border-emerald-600/20 transition-all duration-300 hover:translate-y-[-2px] hover:bg-emerald-800/50 group"
                >
                  {/* Live indicator */}
                  {stat.isLive && (
                    <div className="absolute top-2 right-2 md:top-3 md:right-3">
                      <span className="flex h-1.5 md:h-2 w-1.5 md:w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                  )}

                  {/* Update label */}
                  {stat.update && (
                    <div className="absolute -top-6 left-0 right-0 text-center">
                      <span className="text-[10px] md:text-xs font-medium tracking-widest text-emerald-400/90">
                        {stat.update}
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="text-2xl md:text-[42px] font-bold text-white mb-1 md:mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="space-y-0">
                      {stat.label.map((line, i) => (
                        <div 
                          key={i} 
                          className="text-[11px] md:text-[13px] font-medium text-emerald-300/90 leading-tight"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-600/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 