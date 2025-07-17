'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface Game {
  id: number
  title: string
  platforms: string
  image: string | null
}

interface GameContextType {
  games: Game[] | null
  setGames: React.Dispatch<React.SetStateAction<Game[] | null>>
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[] | null>(null)

  return (
    <GameContext.Provider value={{ games, setGames }}>
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
