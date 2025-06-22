import { User } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  signInWithGoogle: () => void
}

export type { AuthContextType }
