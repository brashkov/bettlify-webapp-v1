'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Container from '../shared/Container'
import Button from '../shared/Button'
import Link from 'next/link'
import config from '@/config'

type Stats = {
  accuracy: number
  profitLoss: number
  totalPredictions: number
}

const stats = [
  {
    label: ['AI Analysis', 'Accuracy'],
    isLive: true
  },
  {
    label: ['30 Days P/L', 'Units'],
    isLive: true,
    update: 'REAL-TIME'
  },
  {
    label: ['AI', 'Predictions'],
    isLive: true
  }
]

export default function Hero() {
  const [statsData, setStatsData] = useState({
    accuracy: 0,
    profitLoss: 0,
    totalPredictions: 0
  })
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        const data = await response.json()
        if (data.error) throw new Error(data.error)
        setStatsData(data)
      } catch (error) {
        console.error('Failed to fetch stats:', error)
        // Set fallback values
        setStatsData({
          accuracy: 72,
          profitLoss: 15.4,
          totalPredictions: 98
        })
      }
    }

    fetchStats()
  }, [])

  const getStatValue = (index: number) => {
    switch(index) {
      case 0:
        return `${statsData.accuracy}%`
      case 1:
        return `${statsData.profitLoss > 0 ? '+' : ''}${statsData.profitLoss.toFixed(2)}`
      case 2:
        return statsData.totalPredictions.toLocaleString()
      default:
        return '0'
    }
  }

  return (
    <section aria-label="Hero Section" className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-emerald-900">
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
                sports analysis potential
              </span>
            </h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-xl">
              Get accurate strategies & analysis powered by advanced AI algorithms.
              Make informed betting decisions with our data-driven
              insights.
            </p>
            <div>
              <Link
                href={config.ctaUrl}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#8B5CF6] rounded-xl hover:bg-[#7C3AED] transition-colors duration-200"
              >
                Start For Free Now!
              </Link>
              <p className="mt-4 text-emerald-200 text-sm">
                Get 7 days free trial on selected plans and see the results for yourself
              </p>
            </div>
          </div>

          {/* Right side - Image and Stats */}
          <div className="flex-1 relative w-full">
            {/* Video Section */}
            <div className="relative w-full aspect-[4/3] mb-6">
              <div className="absolute inset-0 rounded-3xl backdrop-blur-[2px] border border-emerald-700/20 overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onCanPlay={() => setIsVideoLoaded(true)}
                >
                  <source
                    src="/videos/hero-visualization.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative bg-emerald-800/40 backdrop-blur-md rounded-2xl p-3 md:p-6 border border-emerald-600/20 transition-all duration-300 hover:translate-y-[-2px] hover:bg-emerald-800/50 group"
                >
                  {stat.isLive && (
                    <div className="absolute top-2 right-2 md:top-3 md:right-3">
                      <span className="flex h-1.5 md:h-2 w-1.5 md:w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                  )}

                  {stat.update && (
                    <div className="absolute -top-6 left-0 right-0 text-center">
                      <span className="text-[10px] md:text-xs font-medium tracking-widest text-emerald-400/90">
                        {stat.update}
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="text-2xl md:text-[42px] font-bold text-white mb-1 md:mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {getStatValue(index)}
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