'use client'

import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/navigation'
import { signInWithGoogle } from '@/api/infra'

function Login() {
  const router = useRouter()

  const handleLogin = async () => {
    const user = await signInWithGoogle()
    if (user) {
      router.replace('/profile')
    }
  }

  return (
    <div className="flex flex-col items-center rounded-[0.25rem] mt-20 gap-8">
      <FaUserCircle size={64} />
      <button
        onClick={handleLogin}
        className="flex items-center gap-3 p-3 cursor-pointer rounded-xs border border-main-color"
      >
        <FcGoogle size={32} />
        Login with Google
      </button>
    </div>
  )
}

export default Login
