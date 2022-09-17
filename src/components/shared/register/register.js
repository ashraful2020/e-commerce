import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';
import Input from '../../custom/components/Input';

const Register = () => {
  const { signInWithGoogle, setUser, signUpWithEmail,saveUserName,setIsLoading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const uri = location?.state?.from?.pathname || "/";
  
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => { 
        setIsLoading(true)
        setUser(result.user);navigate(uri);
      })
      .catch(error => { 
        console.log(error.message);
      }).finally(() => {
        setIsLoading(false)
      })
    };
    
    const handleOnSubmit = e => {
      e.preventDefault();
      signUpWithEmail(email, password)
      .then((res) => { 
        setIsLoading(true)
        saveUserName(name)
        setUser(res.user);navigate(uri);
      })
      .catch((error) => {
        console.log(error.message);
        setUser({});
      }).finally(() => {
        setIsLoading(false)
      })
  };
  return (
    <div className="mx-auto">
      <form onSubmit={handleOnSubmit} autoComplete="on" className='text-center'>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          name="name"
          required
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <Input type="submit" />
      </form>
      <Button
        icon="google"
        title="Google Login "
        color="bg-transparent text-black border-2 border-rose-100 rounded shadow-gray-500/50 shadow-2xl"
        onClick={handleGoogleLogin}
      />
    </div>
  );
};

export default Register;
