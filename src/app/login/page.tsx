'use client'

import React from 'react'
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
    <div className="flex flex-col border border-main-color rounded-[0.25rem] mt-20 p-3 gap-8 w-full max-w-[30rem] items-center">
      <div>Profile image</div>
      <div>Login with your Google account</div>
      <button onClick={handleLogin}>Login wiwth Google Button</button>
    </div>
  )
}

export default Login
