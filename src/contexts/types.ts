import { User } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  signInWithGoogle: () => Promise<User>
}

export type { AuthContextType }
