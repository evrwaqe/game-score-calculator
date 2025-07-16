'use client'

import { fetchGames } from '@/api/rawg/api'
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'

export function SearchInput() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query.length < 3) {
      setResults([])
      return
    }

    const handle = setTimeout(() => {
      fetchGames(query)
        .then((data) => {
          console.log(data)
          setResults(data)
        })
        .catch((error) => {
          console.error(error)
          setResults([])
        })
    }, 300)
    return () => clearTimeout(handle)
  }, [query])

  return (
    <div className="w-full">
      <label htmlFor="search-game" className="relative">
        <input
          type="text"
          name="search-game"
          id="search-game"
          placeholder="Search game"
          className="w-full p-3 text-inherit border border-gray rounded-[0.25rem] outline-main-color"
          onChange={(e) => setQuery(e.target.value)}
        />
        <IoSearch
          size={20}
          className="pointer-events-none absolute top-0 right-3"
        />
      </label>
    </div>
  )
}
