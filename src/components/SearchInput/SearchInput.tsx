'use client'

import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { fetchGames } from '@/api/rawg/api'
import { useGameContext } from '@/contexts/GameContext'

export function SearchInput() {
  const [query, setQuery] = useState('')
  const { setGames } = useGameContext()

  const handleSearch = async () => {
    if (query.trim().length < 3) {
      setGames([])
      return
    }
    try {
      const data = await fetchGames(query)
      setGames(data)
    } catch (error) {
      console.error(error)
      setGames([])
    }
  }

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault()
        handleSearch()
      }}
    >
      <label htmlFor="search-game" className="relative">
        <input
          type="text"
          name="search-game"
          id="search-game"
          placeholder="Search game"
          className="w-full p-3 text-inherit border border-gray rounded-[0.25rem] outline-main-color"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer disabled:cursor-not-allowed"
          disabled={query.trim().length < 3}
        >
          <IoSearch size={20} className="absolute top-0 right-3" />
        </button>
      </label>
    </form>
  )
}
