import React from 'react'
import { IoSearch } from 'react-icons/io5'

export function SearchInput() {
  return (
    <div className="flex justify-center items-center">
      <label htmlFor="search-game" className="w-full flex">
        <input
          type="text"
          name="search-game"
          id="search-game"
          placeholder="Search game"
          className="w-full p-3 text-inherit border border-gray rounded-[0.25rem] outline-main-color"
        />
        <IoSearch
          size={20}
          className="pointer-events-none relative right-6 top-4"
        />
      </label>
    </div>
  )
}
