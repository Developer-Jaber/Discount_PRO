import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // create User with email,password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // login with google authentication
  const googleAuthentication = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //  set observer
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return () => {
      unSubscriber()
    }
  }, [])
 
  // User Logout
  const logout = () =>{
    return signOut(auth)
    .then(()=>{
        console.log('successfullly signout')
    })
    .catch(err=> {
        console.log(err)
    })
  }
  console.log(user)

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleAuthentication,
    logout,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
