import {useEffect, useState} from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import initializeAuthentication from '../firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {});
  };
  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
      });

    return () => unsubscribe();
  }, [auth]);
  return {
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    handleLogOut,
    user,
    setUser,
  };
};
export default useFirebase;
