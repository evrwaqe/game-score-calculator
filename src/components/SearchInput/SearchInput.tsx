import React from 'react'
import { IoSearch } from 'react-icons/io5'

export function SearchInput() {
  return (
    <div className="w-full">
      <label htmlFor="search-game" className="relative">
        <input
          type="text"
          name="search-game"
          id="search-game"
          placeholder="Search game"
          className="w-full p-3 text-inherit border border-gray rounded-[0.25rem] outline-main-color"
        />
        <IoSearch
          size={20}
          className="pointer-events-none absolute top-0 right-3"
        />
      </label>
    </div>
  )
}
