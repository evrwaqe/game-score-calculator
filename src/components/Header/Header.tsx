import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-5"></div>
      <Link href="/">
        <h1 className="text-main-color text-2xl font-bold text-center">
          Game Score Calculator
        </h1>
      </Link>
      <Link href="/profile" aria-label="Go to profile page">
        <FaUser size={20} className="mt-1 cursor-pointer" />
      </Link>
    </div>
  )
}
