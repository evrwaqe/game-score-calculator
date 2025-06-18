import { FaUser } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-5"></div>
      <h1 className="text-main-color text-2xl font-bold text-center">
        Game Score Calculator
      </h1>
      <FaUser size={20} className="mt-1 cursor-pointer" />
    </div>
  )
}
