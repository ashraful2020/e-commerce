import initializeAuthentication from '../firebase/firebase.init';
import {useState, useEffect} from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

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
  return {
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    handleLogOut,
    user,
  };
};
export default useFirebase;
