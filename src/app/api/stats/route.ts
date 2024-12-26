import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Get Analysis Accuracy
    const { data: mainBets, error: mainBetsError } = await supabase
      .from('bets')
      .select('result')
      .eq('type', 'main')
      .neq('result', 'pending')
      .neq('result', 'void')

    if (mainBetsError) throw mainBetsError

    const totalFinishedBets = mainBets?.length || 0
    const winningBets = mainBets?.filter(bet => 
      bet.result === 'win' || bet.result === 'half-win'
    ).length || 0
    const accuracy = totalFinishedBets > 0 
      ? (winningBets / totalFinishedBets) * 100 
      : 0

    // Get 30 Days P/L
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { data: recentBets, error: recentBetsError } = await supabase
      .from('bets')
      .select('profit_loss')
      .eq('type', 'main')
      .neq('result', 'pending')
      .gte('created_at', thirtyDaysAgo.toISOString())

    if (recentBetsError) throw recentBetsError

    const profitLoss = recentBets?.reduce((sum, bet) => 
      sum + (bet.profit_loss || 0), 0
    ) || 0

    // Get Total Predictions
    const { count, error: countError } = await supabase
      .from('bets')
      .select('*', { count: 'exact', head: true })

    if (countError) throw countError

    return NextResponse.json({
      accuracy: Number(accuracy.toFixed(1)),
      profitLoss: Number(profitLoss.toFixed(1)),
      totalPredictions: count || 0
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
} 