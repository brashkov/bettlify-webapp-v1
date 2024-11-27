'use client'

import Container from '../shared/Container'
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react'

const recentResults = [
  {
    id: 1,
    date: '15:30 23-03',
    teamA: 'Manchester United',
    teamB: 'Liverpool',
    market: 'Over/Under 2.5',
    selection: 'Over 2.5',
    odds: 1.95,
    result: 'won'
  },
  {
    id: 2,
    date: '20:45 23-03',
    teamA: 'Real Madrid',
    teamB: 'Barcelona',
    market: '1X2',
    selection: 'Real Madrid',
    odds: 2.10,
    result: 'lost'
  },
  {
    id: 3,
    date: '18:00 23-03',
    teamA: 'Bayern Munich',
    teamB: 'Dortmund',
    market: 'Both Teams to Score',
    selection: 'Yes',
    odds: 1.75,
    result: 'won'
  },
  {
    id: 4,
    date: '16:15 23-03',
    teamA: 'PSG',
    teamB: 'Lyon',
    market: 'Asian Handicap',
    selection: 'PSG -1.5',
    odds: 2.05,
    result: 'void'
  },
  // Add more placeholder data as needed
]

const ResultIcon = ({ result }: { result: string }) => {
  switch (result) {
    case 'won':
      return (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-green-500/20 rounded-full blur"></div>
            <CheckCircle className="w-6 h-6 text-emerald-500 relative" />
          </div>
        </div>
      )
    case 'lost':
      return (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-red-500/20 rounded-full blur"></div>
            <XCircle className="w-6 h-6 text-red-500 relative" />
          </div>
        </div>
      )
    case 'void':
      return (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gray-500/20 rounded-full blur"></div>
            <MinusCircle className="w-6 h-6 text-gray-400 relative" />
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function LiveResults() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Results From Our Last 10 Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our most recent predictions and their outcomes in real-time. 
            Our AI-powered system maintains high accuracy across different markets.
          </p>
        </div>

        <div className="relative">
          {/* Gradient borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-purple-500/30 to-emerald-500/30 rounded-xl blur-xl opacity-50"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200/50">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50/50">
                    {[
                      'Fixture Date',
                      'Home Team',
                      'Away Team',
                      'Market',
                      'Selection',
                      'Odds',
                      'Result'
                    ].map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {recentResults.map((result, idx) => (
                    <tr 
                      key={result.id}
                      className="hover:bg-gray-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {result.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {result.teamA}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">
                          {result.teamB}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900 font-medium">
                          {result.market}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                          {result.selection}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-bold text-gray-900">
                          {result.odds}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ResultIcon result={result.result} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Live indicator */}
          <div className="absolute -top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md border border-gray-200/50">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Live Updates</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 