'use client'

import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'

// Types that match your database schema
type Result = {
  id: number
  rawDate: string
  date: string
  teamA: string
  teamB: string
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

type Fixture = {
  id: number
  date: string
  home_team: Team
  away_team: Team
  status: string
}

type Bet = {
  id: number
  fixture_id: number
  type: string
  market: string
  selection: string
  odds: number
  confidence: number
  risk_level: string
  status: string
  result: string | null
  fixtures: {
    id: number
    date: string
    status: string
    home_team: {
      id: number
      name: string
      logo_url: string
    }
    away_team: {
      id: number
      name: string
      logo_url: string
    }
  }
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

// Simplify the date formatting to just parse the database date string
const formatDateString = (dateString: string): string => {
  try {
    // Parse the date string from database (which is already in the correct timezone)
    const date = dateString.split('T')[1].split('.')[0].substring(0, 5)
    const day = dateString.split('T')[0].split('-')[2]
    const month = dateString.split('T')[0].split('-')[1]
    return `${date} ${day}-${month}`
  } catch (e) {
    console.error('Error parsing date:', dateString)
    return dateString
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
                name
              ),
              away_team:teams!fixtures_away_team_id_fkey (
                id,
                name
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
            rawDate: bet.fixtures.date,
            date: '',
            teamA: bet.fixtures.home_team.name,
            teamB: bet.fixtures.away_team.name,
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
  }, [])

  // Format dates when component mounts
  useEffect(() => {
    if (mounted && recentResults.length > 0) {
      const formattedResults = recentResults.map(result => ({
        ...result,
        date: formatDateString(result.rawDate)
      }))
      setRecentResults(formattedResults)
    }
  }, [mounted, recentResults.length])

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
                          {mounted ? result.date : ''}
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