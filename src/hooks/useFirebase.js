import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

import initializeAuthentication from '../firebase/firebase.init';
import http from '../services/http.service';
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});


  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User Name when register
  const saveUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((e) => {
        const updateNameUser = { ...user, displayName: name };
        setUser(updateNameUser);
      })
      .catch((error) => { });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => { console.log(error) });
  };
  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });

    return () => unsubscribe();
  }, [auth]);
 

  useEffect(() => {
    http.get(`/user/${user?.email}`).then((res) => setCurrentUser(res));
  }, [user?.email]);

  // console.log(user?.photoURL);
  // console.log(user?.phoneNumber);
  return {
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    handleLogOut,
    user,
    setUser,
    saveUserName,
    isLoading,
    setIsLoading,
    currentUser
  };
};
export default useFirebase;
