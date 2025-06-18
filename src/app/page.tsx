import Header from '@/components/Header/Header'
import { IoSearch } from 'react-icons/io5'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20">
        <label htmlFor="search-game" className="w-full flex">
          <input
            type="text"
            name="search-game"
            id="search-game"
            placeholder="Search game"
            className="w-full p-3 text-inherit border border-gray rounded-[0.25rem] outline-main-color"
          />
          <IoSearch
            size={20}
            className="pointer-events-none absolute right-6 top-36"
          />
        </label>
      </div>
    </div>
  )
}
