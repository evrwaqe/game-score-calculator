'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { signOutGoogle } from '@/api/firebase'
import { LuBadge } from 'react-icons/lu'

function Profile() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [loading, router, user])

  if (!user) return null

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

      <div className="flex flex-col gap-4">
        <div className="flex border border-amber-300">
          <div>search game</div>
          <div>filter game</div>
        </div>
        <div className="border border-fuchsia-800">games list</div>
      </div>
    </div>
  )
}

export default Profile
