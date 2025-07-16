interface RAWGGame {
  id: number
  name: string
  platforms: Array<RAWGPlatform>
  background_image: string
}

interface RAWGPlatform {
  platform: {
    id: number
    name: number
  }
}

export type { RAWGGame, RAWGPlatform }
