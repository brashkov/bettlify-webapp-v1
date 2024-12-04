'use client'

import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

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

  // Only fetch data after component mounts on client
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Only fetch if component is mounted
    if (!mounted) return

    const fetchResults = async () => {
      try {
        setIsLoading(true)
        const { data, error } = await supabase
          .from('bets')
          .select(`
            id,
            fixture_id,
            type,
            market,
            selection,
            odds,
            result,
            fixtures!inner (
              id,
              date,
              status,
              home_team:teams!fixtures_home_team_id_fkey (
                id,
                name,
                logo_url
              ),
              away_team:teams!fixtures_away_team_id_fkey (
                id,
                name,
                logo_url
              )
            )
          `)
          .eq('type', 'main')
          .neq('result', 'pending')
          .eq('fixtures.status', 'FT')
          .order('created_at', { ascending: false })
          .limit(10)

        if (error) throw error

        if (data) {
          const transformedData = data.map((bet: any) => ({
            id: bet.id,
            date: `${bet.fixtures.date.split('T')[1].split(':').slice(0, 2).join(':')} ${bet.fixtures.date.split('T')[0].split('-').slice(1).reverse().join('-')}`,
            teamA: bet.fixtures.home_team?.name || 'Unknown Team',
            teamALogo: bet.fixtures.home_team?.logo_url || '/placeholder-team-logo.png',
            teamB: bet.fixtures.away_team?.name || 'Unknown Team',
            teamBLogo: bet.fixtures.away_team?.logo_url || '/placeholder-team-logo.png',
            market: bet.market,
            selection: bet.selection,
            odds: bet.odds,
            result: bet.result === 'win' || bet.result === 'half-win' ? 'won' :
                   bet.result === 'lose' || bet.result === 'half-lose' ? 'lost' :
                   bet.result === 'void' ? 'void' : 'pending'
          })) as Result[]
          
          setRecentResults(transformedData)
        }
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to fetch predictions')
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [mounted]) // Only run when mounted changes

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
            Track our most recent predictions and their outcomes in real-time. 
            Our AI-powered system maintains high accuracy across different markets.
          </p>
        </div>

        <div className="relative">
          {/* Gradient borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-purple-500/30 to-emerald-500/30 rounded-xl blur-xl opacity-50"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-200/50">
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