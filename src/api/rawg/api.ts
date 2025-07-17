import { RAWGGame, RAWGPlatform } from './types'

const BASE_URL = process.env.NEXT_PUBLIC_RAWG_BASE_URL
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY
const PAGE_SIZE = process.env.NEXT_PUBLIC_RAWG_PAGE_SIZE

if (!API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_RAWG_API_KEY in environment')
}

export async function fetchGames(query: string | number | boolean) {
  const url =
    `${BASE_URL}/games?key=${API_KEY}` +
    `&search=${encodeURIComponent(query)}` +
    `&page_size=${PAGE_SIZE}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`RAWG fetch error: ${res.status}`)
  }
  const { results } = await res.json()
  return results.map((game: RAWGGame) => ({
    id: game.id,
    title: game.name,
    platforms: game.platforms
      .map((p: RAWGPlatform) => p.platform.name)
      .join(', '),
    image: game.background_image,
  }))
}
