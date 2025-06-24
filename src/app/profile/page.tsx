'use client'

import React, { useEffect, useState } from 'react'
import { LuBadge } from 'react-icons/lu'
import { FaFilter } from 'react-icons/fa'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SearchInput } from '@/components/SearchInput'
import { useAuth } from '@/contexts/AuthContext'
import { signOutGoogle } from '@/api/firebase'

function Profile() {
  const { user, loading } = useAuth()
  const router = useRouter()

  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOption, setSortOption] = useState<string>('alphabetical')

  const options = [
    { value: 'alphabetical', label: 'Alphabetical (A → Z)' },
    { value: 'alphabetical_desc', label: 'Alphabetical (Z → A)' },
    { value: 'score_desc', label: 'Highest Score → Lowest Score' },
    { value: 'score_asc', label: 'Lowest Score → Highest Score' },
  ]

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [loading, router, user])

  if (!user) return null

  const handleSelect = (value: string) => {
    setSortOption(value)
    setFilterOpen(false)
  }

  return (
    <div className="flex flex-col border border-main-color rounded-[0.25rem] mt-20 p-3 gap-8 w-full max-w-4xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={user.photoURL ?? '/default-user.svg'}
            width={96}
            height={96}
            alt="Profile Picture"
            className="rounded-[0.5rem]"
          />
          <h1 className="text-lg">{user.displayName}</h1>
        </div>
        <div className="flex flex-col justify-between  items-end">
          <LuBadge size={32} className="text-gray" />
          <button
            onClick={signOutGoogle}
            className="text-red-500 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <SearchInput />

        <div className="relative">
          <FaFilter
            size={24}
            className="cursor-pointer"
            onClick={() => setFilterOpen((o) => !o)}
          />

          {filterOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-tertiary-color rounded shadow-lg z-10">
              <div className="p-3 space-y-2">
                <p className="font-semibold text-lg">Order by:</p>
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`
                      w-full text-left px-2 py-1 rounded cursor-pointer
                      ${
                        sortOption === option.value
                          ? 'border-b-4 border-b-main-color font-medium'
                          : 'hover:border-b-4 hover:border-b-secondary-color'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border border-fuchsia-800">games list</div>
    </div>
  )
}

export default Profile
