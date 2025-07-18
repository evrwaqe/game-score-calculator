'use client'

import React from 'react'
import Image from 'next/image'
import { useGameContext, Game } from '@/contexts/GameContext'
import { useRouter } from 'next/navigation'

function GamesList() {
  const { games } = useGameContext()
  const router = useRouter()

  if (games === null) return null

  if (games.length === 0) {
    return <p className="mt-4 text-center text-gray">Nenhum jogo encontrado.</p>
  }

  const handleClick = (game: Game) => {
    const params = new URLSearchParams({
      id: game.id.toString(),
      title: game.title,
      image: game.image ?? '',
      platforms: game.platforms,
    }).toString()

    router.push(`/score-calculator?${params}`)
  }

  return (
    <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      {games.map((game: Game) => (
        <li
          key={game.id}
          className="flex gap-3 p-3 border rounded-sm border-main-color hover:bg-[rgb(244,246,0)]/[.15] cursor-pointer"
          onClick={() => handleClick(game)}
        >
          {game.image && (
            <Image
              src={game.image}
              height={128}
              width={128}
              className="object-cover rounded-xs"
              alt="Game cover image"
            />
          )}
          <div>
            <h3 className="font-medium">{game.title}</h3>
            <p className="text-sm text-gray">{game.platforms}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export { GamesList }
