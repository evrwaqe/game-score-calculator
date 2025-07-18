'use client'

import { useSearchParams } from 'next/navigation'

function ScoreCalculator() {
  const params = useSearchParams()
  const id = params.get('id')
  const title = params.get('title')
  const image = params.get('image')
  const platforms = params.get('platforms')

  return (
    <div>
      <h1>Score Calculator</h1>
      <p>{id}</p>
      <p>{title}</p>
      <p>{image}</p>
      <p>{platforms}</p>
    </div>
  )
}

export default ScoreCalculator
