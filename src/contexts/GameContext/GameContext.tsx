'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Game } from './types'

interface GameContextType {
  games: Game[] | null
  setGames: React.Dispatch<React.SetStateAction<Game[] | null>>
  selectedGame: Game | null
  setSelectedGame: (game: Game) => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[] | null>(null)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  return (
    <GameContext.Provider
      value={{ games, setGames, selectedGame, setSelectedGame }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGameContext must be used within GameProvider')
  }
  return context
}
