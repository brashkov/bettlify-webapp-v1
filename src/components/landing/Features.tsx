'use client'

import Container from '../shared/Container'
import { 
  ChartBarIcon, 
  BoltIcon, 
  ChartPieIcon, 
  TrophyIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Advanced AI Technology',
    description: 'Our AI algorithms have processed over 1 million matches and maintain a consistent 70%+ success rate across major leagues.',
    icon: ChartBarIcon,
    stats: '1M+ Matches Analyzed'
  },
  {
    title: 'Real-Time Analysis',
    description: 'Get predictions up to 48 hours before matches, with real-time updates based on team news, injuries, and market movements.',
    icon: BoltIcon,
    stats: '48h Early Access'
  },
  {
    title: 'Comprehensive Coverage',
    description: 'Coverage of Premier League, La Liga, Serie A, Bundesliga, and other major leagues with 100+ predictions weekly.',
    icon: ChartPieIcon,
    stats: '100+ Weekly Predictions'
  },
  {
    title: 'Proven Track Record',
    description: 'Our members have reported an average ROI of 15% over the past year, with detailed performance tracking.',
    icon: TrophyIcon,
    stats: '15% Avg. ROI'
  },
  {
    title: 'Risk Management',
    description: 'Professional staking plans and bankroll management tools used by successful bettors worldwide.',
    icon: ShieldCheckIcon,
    stats: 'Pro Staking System'
  },
  {
    title: 'Performance Analytics',
    description: 'Track your betting journey with detailed analytics, including profit graphs, ROI tracking, and betting patterns.',
    icon: ArrowTrendingUpIcon,
    stats: 'Advanced Analytics'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage the power of advanced AI technology and data analytics to make informed betting decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{feature.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 italic mb-4">
              &quot;Using this platform has completely transformed my betting strategy. The AI predictions combined with the risk management tools have helped me achieve consistent profits for the past 6 months.&quot;
            </p>
            <footer className="text-gray-600">
              <div className="font-semibold">Michael R.</div>
              <div className="text-sm">Professional Sports Bettor • Member since 2023</div>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  )
} 