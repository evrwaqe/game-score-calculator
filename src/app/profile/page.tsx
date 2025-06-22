'use client'

import React from 'react'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

function Profile() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="flex flex-col border border-main-color rounded-[0.25rem] mt-20 p-3 gap-8 w-full max-w-4xl">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-24 w-24 border border-red-50">Profile Picture</div>
          <Image
            src={user.photoURL!}
            width={64}
            height={64}
            alt="Profile Picture"
          />
          <div className="border border-amber-900">{user.displayName}</div>
        </div>
        <div className="border border-zinc-300">Badge</div>
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
