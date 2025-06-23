import { User } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<User>
}

export type { AuthContextType }
