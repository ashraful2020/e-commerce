import React, { memo, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';
import Input from '../../custom/components/Input';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInWithGoogle, user, setUser, signInWithEmail } = useAuth();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  const handleOnBlur = e => { 
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData); 
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    // signInWithEmail(auth, email, password)
    //   .then((userCredential) => {

    //   })
    //   .catch((error) => {
    //   });
  };
  return (
    <div className="mx-auto">
      <form onSubmit={handleOnSubmit} autoComplete="on">
        <Input
          onChange={(e)=>console.log(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          name="name"
          required
        />
        <Input
          onChange={handleOnBlur}
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <Input
          onChange={handleOnBlur}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <Input type="submit" />
      </form>
      <Button
        title="Google Login "
        color="bg-orange-400"
        onClick={handleGoogleLogin}
      />
    </div>
  );
};

export default Login;
