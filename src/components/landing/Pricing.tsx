'use client'

import Container from '../shared/Container'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    name: 'Weekly',
    price: 15,
    originalPrice: 25,
    interval: 'week',
    features: [
      'Full access to all predictions',
      'Real-time updates & alerts',
      'Advanced statistics & analysis',
      'Historical data access',
      'Email notifications',
      'Pay as you go flexibility'
    ]
  },
  {
    name: 'Monthly',
    price: 39,
    originalPrice: 79,
    interval: 'month',
    features: [
      'Full access to all predictions',
      'Real-time updates & alerts',
      'Advanced statistics & analysis',
      'Historical data access',
      'Email notifications',
      '7-day free trial included'
    ],
    highlighted: true,
    badge: 'POPULAR',
    trialBadge: true
  },
  {
    name: 'Yearly',
    price: 299,
    originalPrice: 599,
    interval: 'year',
    features: [
      'Full access to all predictions',
      'Real-time updates & alerts',
      'Advanced statistics & analysis',
      'Historical data access',
      'Email notifications',
      'Save 36% compared to monthly',
      '7-day free trial included'
    ],
    trialBadge: true
  }
]

function DiscountTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Get stored end time or set new one
    const getEndTime = () => {
      const stored = localStorage.getItem('discountEndTime')
      if (stored) {
        const endTime = parseInt(stored)
        if (endTime > Date.now()) {
          return endTime
        }
      }
      // Set new end time (3 days from now)
      const newEndTime = Date.now() + (3 * 24 * 60 * 60 * 1000)
      localStorage.setItem('discountEndTime', newEndTime.toString())
      return newEndTime
    }

    const endTime = getEndTime()

    const timer = setInterval(() => {
      const now = Date.now()
      const diff = endTime - now

      if (diff <= 0) {
        // Reset timer when it hits zero
        localStorage.removeItem('discountEndTime')
        return
      }

      setTimeLeft({
        hours: Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
        minutes: Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)),
        seconds: Math.floor((diff % (60 * 1000)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <span className="font-mono">
      {timeLeft.hours.toString().padStart(2, '0')}:
      {timeLeft.minutes.toString().padStart(2, '0')}:
      {timeLeft.seconds.toString().padStart(2, '0')}
    </span>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-emerald-950 overflow-hidden">
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

      {/* Content */}
      <Container className="relative">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-medium mb-2">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Winning Big Today
            <br />
            <span className="text-emerald-400">With AI-Powered Predictions</span>
          </h2>
          <p className="text-emerald-300 text-lg mb-6">
            Join over 10,000 profitable bettors who trust our 97% accuracy rate
          </p>
          <div className="inline-flex flex-col items-center gap-3">
            <div className="bg-emerald-900/50 rounded-full px-6 py-2.5 border border-emerald-400/30">
              <p className="text-emerald-300 font-semibold flex items-center gap-3">
                <span className="text-emerald-400">2025 SALE</span>
                <span className="text-sm px-2 py-0.5 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                  <DiscountTimer />
                </span>
              </p>
            </div>
            <p className="text-emerald-400/80 text-sm">
              ⚡ Limited time offer - Up to 50% off all plans
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.highlighted 
                  ? 'bg-emerald-900 border-2 border-emerald-400' 
                  : 'bg-emerald-900/50 border border-emerald-800'
              }`}
            >
              {/* Badges */}
              {(plan.badge || plan.trialBadge) && (
                <div className="absolute -top-3 flex gap-2 justify-end right-6">
                  {plan.badge && (
                    <span className="bg-emerald-400 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                  {plan.trialBadge && (
                    <span className="bg-emerald-900 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/50">
                      7 DAYS FREE
                    </span>
                  )}
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-emerald-300/70">/{plan.interval}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-emerald-300/70 line-through">${plan.originalPrice}</span>
                    <span className="text-emerald-400 text-sm font-semibold">
                      Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-emerald-100">
                      <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.name === 'Monthly' ? (
                  <Link 
                    href="http://localhost:3000/pricing?plan=monthly"
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 mb-3 inline-block text-center ${
                      plan.highlighted
                        ? 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300'
                        : 'bg-emerald-800 text-emerald-100 hover:bg-emerald-700'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                ) : (
                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 mb-3 ${
                      plan.highlighted
                        ? 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300'
                        : 'bg-emerald-800 text-emerald-100 hover:bg-emerald-700'
                    }`}
                  >
                    {plan.name === 'Weekly' ? 'Subscribe Now' : 'Start Free Trial'}
                  </button>
                )}

                <p className="text-emerald-300/50 text-xs text-center">
                  {plan.name === 'Weekly' ? 'Instant access' : 'Cancel anytime'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* New price guarantee message */}
        <div className="mt-8 text-center">
          <p className="text-emerald-300/80 text-sm max-w-2xl mx-auto">
            <span className="text-emerald-400">🔒 Price Lock Guarantee:</span> Lock in these special prices forever - your subscription will never increase, even after the sale ends.
          </p>
        </div>
      </Container>
    </section>
  )
} 