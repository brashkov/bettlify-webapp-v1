'use client'

import Container from '../shared/Container'
import { ShieldCheckIcon, ChartBarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

export default function MoneyBackGuarantee() {
  return (
    <section className="py-24 bg-emerald-950">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-emerald-900 to-emerald-900/50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-400/10 mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-emerald-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Guaranteed 25% ROI or Your Money Back
              </h2>

              <p className="text-emerald-300 text-lg mb-8 max-w-2xl mx-auto">
                Use our AI analysis strategy for 60 days, and if you don&apos;t achieve at least 
                25% profit on your bankroll, we&apos;ll refund your subscription payments in full. 
                We&apos;re that confident in our AI analysis!
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                    <ChartBarIcon className="w-5 h-5" />
                    <span>25% Minimum Profit</span>
                  </div>
                  <p className="text-emerald-200 text-sm">
                    We guarantee a minimum 25% increase on your bankroll when following our strategies.
                  </p>
                </div>

                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                    <CheckBadgeIcon className="w-5 h-5" />
                    <span>60-Day Guarantee</span>
                  </div>
                  <p className="text-emerald-200 text-sm">
                    Follow our predictions for 60 days and track your betting results with our platform.
                  </p>
                </div>

                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                    <ShieldCheckIcon className="w-5 h-5" />
                    <span>Full Refund</span>
                  </div>
                  <p className="text-emerald-200 text-sm">
                    Haven&apos;t reached 25% profit after following our predictions? Get every penny from your subscription payments back - no questions asked.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-emerald-300/80 text-sm">
                * Money-back guarantee applies when following all our betting analysis during your first 60 days
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 