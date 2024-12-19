'use client'

import { useState } from 'react'
import Container from '../shared/Container'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'John Smith',
    role: 'Professional Bettor',
    content: "The AI predictions have completely transformed my betting strategy. I've seen a 47% increase in my win rate over the last 6 months.",
    image: '/avatars/john.jpg',
    stats: {
      avgBet: '€500',
      monthsUsing: 6,
      totalProfit: '+€12,450'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Sports Analyst',
    content: "As an analyst, I appreciate the depth of data and insights provided. The platform's predictions have proven to be 89% accurate in major leagues.",
    image: '/avatars/sarah.jpg',
    stats: {
      avgBet: '€1,000',
      monthsUsing: 12,
      totalProfit: '+€34,280'
    }
  },
  {
    name: 'Mike Wilson',
    role: 'Casual Bettor',
    content: "Started as a skeptic, now I'm a believer. The predictions are spot-on and the ROI speaks for itself. Best investment in my betting journey.",
    image: '/avatars/mike.jpg',
    stats: {
      avgBet: '€200',
      monthsUsing: 3,
      totalProfit: '+€5,730'
    }
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Professional Bettors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful bettors who have transformed their betting strategy with our AI predictions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CheckBadgeIcon className="w-6 h-6 text-emerald-500 absolute -right-1 -bottom-1 bg-white rounded-full" />
                </div>
                <div className="ml-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-emerald-600">{testimonial.role}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                "{testimonial.content}"
              </p>

              <div className="grid grid-cols-3 gap-4 p-4 bg-emerald-50 rounded-xl">
                <div className="text-center">
                  <div className="font-bold text-emerald-600">{testimonial.stats.avgBet}</div>
                  <div className="text-sm text-gray-600">Avg Bet</div>
                </div>
                <div className="text-center border-x border-emerald-200">
                  <div className="font-bold text-emerald-600">{testimonial.stats.monthsUsing}mo</div>
                  <div className="text-sm text-gray-600">Platform Use</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-emerald-600">{testimonial.stats.totalProfit}</div>
                  <div className="text-sm text-gray-600">Profit</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-emerald-600">1000+</span>
              <span className="ml-2 text-gray-600">Active Users</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-emerald-600">97%</span>
              <span className="ml-2 text-gray-600">Satisfaction Rate</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-emerald-600">€2M+</span>
              <span className="ml-2 text-gray-600">User Profits</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 