import { Header } from '@/components/Header'
import { SearchInput } from '@/components/SearchInput'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-20">
        <SearchInput />
      </div>
    </div>
  )
}
