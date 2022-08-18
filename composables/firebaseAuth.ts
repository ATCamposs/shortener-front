/* eslint-disable no-console */
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential
} from 'firebase/auth'

export const createUser = async (email: string, password: string): Promise<UserCredential> => {
  const auth = getAuth()
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = (email: string, password: string): Promise<UserCredential> => {
  const auth = getAuth()
  return signInWithEmailAndPassword(auth, email, password)
}

export const signInUserWithGoogle = () => {
  const auth = getAuth()
  return signInWithPopup(auth, new GoogleAuthProvider())
}

// do nothing, just for future examples
export const initUser = () => {
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    } else {
      const router = useRouter()
      // if signed out
      router.push('/')
    }
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const result = await auth.signOut()
  return result
}
