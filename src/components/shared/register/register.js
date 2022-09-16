import React, { memo } from 'react';
import useAuth from "../../../hooks/useAuth"
const Register = memo(() => {
    const { signInWithGoogle, user, setUser, signUpWithEmail } = useAuth();
    return (
        <div>
            Register
        </div>
    );
});

export default Register;