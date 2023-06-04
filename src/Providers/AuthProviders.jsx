import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


   const createUser = (email, password) => {
    setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () =>{
    setLoading(true);
    return signOut(auth)
   }

   const updateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile)
}

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUer =>{
            setUser(currentUer)
            // console.log('current user' , currentUer)
            setLoading(false)
        });
        return () => {
          return unSubscribe()
        }
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;