'use client'

import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import Link from 'next/link'
import config from '@/config'
import { 
  CircleStackIcon, 
  CpuChipIcon, 
  ChartBarSquareIcon 
} from '@heroicons/react/24/outline'

const steps = [
  {
    number: '1. Data Collection',
    title: 'Fixture Analysis',
    description: 'Our AI system continuously analyzes upcoming fixtures across major leagues. We process real-time data including team form, player statistics, and market movements.',
    icon: CircleStackIcon,
    tools: ['Processed daily', '100+ Fixtures'],
    gradient: 'from-emerald-400/20 to-cyan-400/20'
  },
  {
    number: '2. Smart Scoring',
    title: 'Internal Algorithm',
    description: 'Each fixture goes through our proprietary scoring system that evaluates historical stats, head-to-head records, and multiple performance indices for accurate predictions.',
    icon: CpuChipIcon,
    tools: ['Analyzing', '50+ Parameters'],
    gradient: 'from-emerald-400/20 to-teal-400/20'
  },
  {
    number: '3. AI Prediction',
    title: 'Market Selection',
    description: 'Selected high-potential fixtures are analyzed by specialized AI models to identify the most probable and valuable betting markets with the highest ROI potential.',
    icon: ChartBarSquareIcon,
    tools: ['Monthly Avg. ROI', '120-170%+'],
    gradient: 'from-emerald-400/20 to-green-400/20'
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <Container className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powered by Advanced
            <br />
            <span className="text-emerald-600 relative">
              AI Technology
              <div className="absolute -bottom-2 left-0 right-0 h-[6px] bg-emerald-200/60 -rotate-1" />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our sophisticated AI system processes millions of data points to deliver accurate predictions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`
                relative flex flex-col items-center text-center 
                transition-all duration-300 transform
                ${index === activeStep ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Animated Background */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `} 
              />

              {/* Icon Container */}
              <div className={`
                relative w-24 h-24 mb-6 rounded-2xl 
                bg-gradient-to-br ${step.gradient}
                group hover:shadow-lg hover:shadow-emerald-200/50
                transition-all duration-300
                before:absolute before:inset-0 before:bg-white before:rounded-2xl before:opacity-90
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <step.icon className={`
                    w-12 h-12 text-emerald-600
                    transform transition-transform duration-300
                    group-hover:scale-110
                  `} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-emerald-600 font-semibold mb-2 relative">
                {step.number}
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>

              {/* Stats/Info */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{step.tools[0]}</span>
                <span className="
                  px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full font-medium
                  group-hover:bg-emerald-100 transition-colors duration-300
                ">
                  {step.tools[1]}
                </span>
              </div>

              {/* Animated Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%_-_12px)] w-24">
                  <div className={`
                    h-[2px] bg-emerald-200
                    ${index === activeStep ? 'animate-progress' : ''}
                  `} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <Link
            href={config.ctaUrl}
            className="
              inline-flex items-center justify-center
              px-8 py-4 text-lg font-semibold
              text-white bg-emerald-600 rounded-2xl
              hover:bg-emerald-500
              transition-colors duration-200
              shadow-lg
              group
              w-auto
            "
          >
            Start Your Free Trial
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </Link>

          {/* Offer Text */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-emerald-600 font-medium whitespace-nowrap">
              LIMITED TIME OFFER
            </span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full font-medium whitespace-nowrap">
              7 DAYS FREE
            </span>
          </div>
        </div>

      </Container>
    </section>
  )
} 