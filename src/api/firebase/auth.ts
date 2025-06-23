import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'
import { firebaseConfig } from './config'

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
const auth = getAuth()
auth.useDeviceLanguage()

const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider)
  return result.user
}

const signOutGoogle = async () => {
  await signOut(auth)
}

export { signInWithGoogle, signOutGoogle }
