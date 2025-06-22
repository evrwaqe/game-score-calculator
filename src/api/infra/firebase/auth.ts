import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseConfig } from './config'

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
const auth = getAuth()
auth.useDeviceLanguage()

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      if (!credential) throw new Error('Invalid credentials')
      const token = credential.accessToken
      const user = result.user
      // Set global context
      // user.displayName
      // user.photoURL
      console.log(user)
      console.log(token)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { signInWithGoogle }
