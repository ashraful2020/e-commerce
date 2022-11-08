import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,
  signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearPersistedUser } from '../features/authSlice';
import { set_cart_product } from '../features/cartSlice';
import initializeAuthentication from '../firebase/firebase.init';
import http from '../services/http.service';
initializeAuthentication();
const useFirebase = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const cart = useSelector(state => state.cart);

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
      .catch(error => console.log(error));
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        http.put(`/user/${user.email}`, cart.product)
        setUser({});
        dispatch(clearPersistedUser())
        dispatch(set_cart_product({}))
        navigate("/")
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) setUser(user);
      else setUser({});
      setIsLoading(false)
    });
    return () => unsubscribe();
  }, [auth]);

  console.log(cart.product)

  // console.log(user.cart)
  // console.log(user?.photoURL);
  // console.log(user?.phoneNumber);
  console.log(user.email)
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
  };
};
export default useFirebase;
