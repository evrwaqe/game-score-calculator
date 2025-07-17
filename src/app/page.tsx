import { GamesList } from '@/components/GamesList/GamesList'
import { SearchInput } from '@/components/SearchInput'

export default function Home() {
  return (
    <div className="w-full mt-20 max-w-4xl">
      <SearchInput />
      <GamesList />
    </div>
  )
}
