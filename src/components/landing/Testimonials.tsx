'use client'

import { useState, useEffect } from 'react'
import Container from '../shared/Container'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

// Add more testimonials for multiple rows
const testimonials = [
  // First row
  [
    {
        "name": "Liam O.",
        "content": "The AI predictions have been spot on! My profits have never been better.",
        "stats": {
            "avgBet": "€65",
            "monthsUsing": 3,
            "totalProfit": "+€1170.00"
        }
    },
    {
        "name": "Alex J.",
        "content": "I never thought I'd trust an algorithm, but this one's got me hooked!",
        "stats": {
            "avgBet": "€45",
            "monthsUsing": 2,
            "totalProfit": "+€810.00"
        }
    },
    {
        "name": "Johan L.",
        "content": "It's been a total game changer for my bets. Highly recommend!",
        "stats": {
            "avgBet": "€30",
            "monthsUsing": 1,
            "totalProfit": "+€360.00"
        }
    },
    {
        "name": "Daniel N.",
        "content": "Been using this for a while, and I'm seriously impressed. Amazing accuracy!",
        "stats": {
            "avgBet": "€55",
            "monthsUsing": 2,
            "totalProfit": "+€990.00"
        }
    },
    {
        "name": "Nathan A.",
        "content": "Was skeptical at first, but this service has paid for itself 10x over.",
        "stats": {
            "avgBet": "€70",
            "monthsUsing": 3,
            "totalProfit": "+€1470.00"
        }
    }
  ],
  // Second row
  [
    {
        "name": "Chris W.",
        "content": "The insights are next-level. My bankroll has been growing consistently.",
        "stats": {
            "avgBet": "€50",
            "monthsUsing": 1,
            "totalProfit": "+€600.00"
        }
    },
    {
        "name": "David L.",
        "content": "This is by far the most accurate prediction tool I&apos;ve used. Worth every penny.",
        "stats": {
            "avgBet": "€25",
            "monthsUsing": 1,
            "totalProfit": "+€300.00"
        }
    },
    {
        "name": "Tom K.",
        "content": "The interface is simple, and the predictions are insanely reliable.",
        "stats": {
            "avgBet": "€40",
            "monthsUsing": 2,
            "totalProfit": "+€720.00"
        }
    },
    {
        "name": "Ethan B.",
        "content": "Never had this much success with betting before. A real hidden gem!",
        "stats": {
            "avgBet": "€120",
            "monthsUsing": 3,
            "totalProfit": "+€4320.00"
        }
    },
    {
        "name": "Lucas P.",
        "content": "Solid platform with reliable predictions. Wouldn't bet without it anymore.",
        "stats": {
            "avgBet": "€95",
            "monthsUsing": 2,
            "totalProfit": "+€1710.00"
        }
    }
  ]
]

export default function Testimonials() {
  const cardWidth = 400 // Desktop width
  const mobileCardWidth = 300 // Mobile width
  const gap = 32
  const leftRowWidth = (cardWidth + gap) * testimonials[0].length
  const rightRowWidth = (cardWidth + gap) * testimonials[1].length
  
  const [leftPosition, setLeftPosition] = useState(0)
  const [rightPosition, setRightPosition] = useState(-1 * rightRowWidth)

  useEffect(() => {
    // Left movement (first row)
    const leftInterval = setInterval(() => {
      setLeftPosition((prev) => {
        const next = prev + 0.5
        return next >= leftRowWidth ? 0 : next
      })
    }, 30)

    // Right movement (second row)
    const rightInterval = setInterval(() => {
      setRightPosition((prev) => {
        const next = prev + 0.5
        if (next >= 0) {
          return -1 * rightRowWidth
        }
        return next
      })
    }, 30)

    return () => {
      clearInterval(leftInterval)
      clearInterval(rightInterval)
    }
  }, [leftRowWidth, rightRowWidth])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Real People, Real Results
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have stepped up their betting strategy with our AI predictions & analysis
          </p>
        </div>

        {/* Carousel Container with fade edges */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="overflow-hidden">
            {/* First Row */}
            <div 
              className="flex mb-8 relative"
              style={{
                transform: `translateX(-${leftPosition}px)`,
                transition: leftPosition === 0 ? 'none' : 'transform linear',
                willChange: 'transform'
              }}
            >
              {[...testimonials[0], ...testimonials[0]].map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-none w-[300px] md:w-[400px] mx-2 md:mx-4"
                >
                  <div className="p-4 md:p-8 rounded-2xl bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border-2 border-emerald-100">
                    {/* Card header */}
                    <div className="flex items-center mb-4 md:mb-6">
                      <div>
                        <div className="font-bold text-base md:text-lg text-black">{testimonial.name}</div>
                      </div>
                    </div>

                    {/* Card content */}
                    <p className="text-sm md:text-base text-black mb-4 md:mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 bg-emerald-50 rounded-xl text-xs md:text-sm">
                      <div className="text-center">
                        <div className="font-bold text-emerald-600">{testimonial.stats.avgBet}</div>
                        <div className="text-sm text-black">Avg Bet</div>
                      </div>
                      <div className="text-center border-x border-emerald-200">
                        <div className="font-bold text-emerald-600">{testimonial.stats.monthsUsing}mo</div>
                        <div className="text-sm text-black">Platform Use</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-emerald-600">{testimonial.stats.totalProfit}</div>
                        <div className="text-sm text-black">Profit</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Same responsive changes as first row */}
            <div 
              className="flex mb-8 relative"
              style={{
                transform: `translateX(${rightPosition}px)`,
                transition: rightPosition === -rightRowWidth ? 'none' : 'transform linear',
                willChange: 'transform'
              }}
            >
              {[...testimonials[1], ...testimonials[1]].map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-none w-[300px] md:w-[400px] mx-2 md:mx-4"
                >
                  <div className="p-4 md:p-8 rounded-2xl bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border-2 border-emerald-100">
                    {/* Card header */}
                    <div className="flex items-center mb-4 md:mb-6">
                      <div>
                        <div className="font-bold text-base md:text-lg text-black">{testimonial.name}</div>
                      </div>
                    </div>

                    {/* Card content */}
                    <p className="text-sm md:text-base text-black mb-4 md:mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 bg-emerald-50 rounded-xl text-xs md:text-sm">
                      <div className="text-center">
                        <div className="font-bold text-emerald-600">{testimonial.stats.avgBet}</div>
                        <div className="text-sm text-black">Avg Bet</div>
                      </div>
                      <div className="text-center border-x border-emerald-200">
                        <div className="font-bold text-emerald-600">{testimonial.stats.monthsUsing}mo</div>
                        <div className="text-sm text-black">Platform Use</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-emerald-600">{testimonial.stats.totalProfit}</div>
                        <div className="text-sm text-black">Profit</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 