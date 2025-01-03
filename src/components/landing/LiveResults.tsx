'use client'

import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { format } from 'date-fns'

// Types that match your database schema
type Result = {
  id: number
  rawDate: string
  date: string
  teamA: string
  teamALogo: string
  teamB: string
  teamBLogo: string
  market: string
  selection: string
  odds: number
  result: 'won' | 'lost' | 'void' | 'half-win' | 'half-lost' | 'pending'
}

type Team = {
  id: number
  name: string
  logo_url: string
}

const ResultIcon = ({ result }: { result: string }) => {
  switch (result) {
    case 'won':
    case 'win':
    case 'half-win':
      return (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-green-500/20 rounded-full blur"></div>
            <CheckCircle className="w-6 h-6 text-emerald-500 relative" />
          </div>
        </div>
      )
    case 'lost':
    case 'lose':
    case 'half-lose':
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
  const [recentResults, setRecentResults] = useState<Result[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const fetchResults = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/live-results')
        const data = await response.json()
        
        if ('error' in data) {
          throw new Error(data.error)
        }

        setRecentResults(data)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to fetch predictions')
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [mounted])

  // Show loading state during SSR and initial client render
  if (!mounted) {
    return (
      <section className="py-24 bg-white">
        <Container>
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500" />
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Results From Our Last 10 Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our most recent analysis and their outcomes in real-time. 
            Our AI-powered system maintains high accuracy across different markets.
          </p>
        </div>

        {!mounted ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500" />
          </div>
        ) : (
          <div className="relative">
            {/* Desktop View - Table */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200/50 hidden md:block">
              <div className="overflow-x-auto">
                {isLoading ? (
                  <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500" />
                  </div>
                ) : error ? (
                  <div className="flex justify-center items-center h-40 text-red-500">
                    {error}
                  </div>
                ) : recentResults.length === 0 ? (
                  <div className="flex justify-center items-center h-40 text-gray-500">
                    No predictions available
                  </div>
                ) : (
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
                      {recentResults.map((result) => (
                        <tr 
                          key={result.id}
                          className="hover:bg-gray-50/50 transition-colors group"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                            {result.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Image 
                                src={result.teamALogo || '/placeholder-team-logo.png'}
                                alt={result.teamA} 
                                width={24} 
                                height={24} 
                                className="w-6 h-6"
                                onError={() => {
                                  console.log('Failed to load logo for:', result.teamA);
                                }}
                              />
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                {result.teamA}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Image 
                                src={result.teamBLogo || '/placeholder-team-logo.png'}
                                alt={result.teamB} 
                                width={24} 
                                height={24} 
                                className="w-6 h-6"
                                onError={() => {
                                  console.log('Failed to load logo for:', result.teamB);
                                }}
                              />
                              <span className="text-sm text-gray-900">
                                {result.teamB}
                              </span>
                            </div>
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
                )}
              </div>
            </div>

            {/* Mobile View - Cards */}
            <div className="md:hidden space-y-4">
              {isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500" />
                </div>
              ) : error ? (
                <div className="flex justify-center items-center h-40 text-red-500">
                  {error}
                </div>
              ) : recentResults.length === 0 ? (
                <div className="flex justify-center items-center h-40 text-gray-500">
                  No predictions available
                </div>
              ) : (
                recentResults.map((result) => (
                  <div 
                    key={result.id}
                    className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow border border-gray-200/50 p-4 space-y-4"
                  >
                    {/* Match Date and Live Indicator */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {result.date}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-600">LIVE</span>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image 
                            src={result.teamALogo}
                            alt={result.teamA}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                          <span className="text-sm font-medium text-gray-900">{result.teamA}</span>
                        </div>
                        <ResultIcon result={result.result} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Image 
                          src={result.teamBLogo}
                          alt={result.teamB}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-sm text-gray-900">{result.teamB}</span>
                      </div>
                    </div>

                    {/* Prediction Details */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Prediction</div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{result.market}</span>
                          <span className="inline-flex px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                            {result.selection}
                          </span>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-xs text-gray-500">Odds</div>
                        <div className="text-sm font-bold text-emerald-600">{result.odds}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
        )}
      </Container>
    </section>
  )
} 