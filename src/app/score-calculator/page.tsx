'use client'

import { useGameContext } from '@/contexts/GameContext'

function ScoreCalculator() {
  const { selectedGame } = useGameContext()

  return (
    <div>
      <h1>Score Calculator</h1>
      <p>{selectedGame?.id}</p>
      <p>{selectedGame?.title}</p>
      <p>{selectedGame?.image}</p>
      <p>{selectedGame?.platforms}</p>
    </div>
  )
}

export default ScoreCalculator
