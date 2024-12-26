import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
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
      .order('fixtures(date)', { ascending: false })
      .limit(10)

    if (error) throw error

    // Transform the data to match the component's expected format
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
    }))

    return NextResponse.json(transformedData)
  } catch (error) {
    console.error('Error fetching live results:', error)
    return NextResponse.json(
      { error: 'Failed to fetch live results' },
      { status: 500 }
    )
  }
} 