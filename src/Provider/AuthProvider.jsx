import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import { toast } from 'react-toastify'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loding, setLoding] = useState(true)
  // create User with email,password
  const createUser = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login user
  const loginUser = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // login with google authentication
  const googleAuthentication = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
      .then(() => {
        toast('Succces....!!')
      })
      .catch(err => {
       toast('invalid')
      })
  }

  //  set observer
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoding(false)
    })

    return () => {
      unSubscriber()
    }
  }, [])

  // updat user profile
  const updateprofile = updatedData => {
    return updateProfile(auth.currentUser, updatedData)
  }

  //forget password
  const forgetPassword = email => {
    return sendPasswordResetEmail(auth, email)
  }

  // User Logout
  const logout = () => {
    return signOut(auth)
      .then(() => {
        // console.log('successfullly signout')
      })
      .catch(() => {
        // console.log(err)
      })
  }

  

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleAuthentication,
    logout,
    loding,
    updateprofile,
    forgetPassword,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
