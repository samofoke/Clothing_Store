import React from 'react';
import SignIn from '../../components/Sign-in/Sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-signup.style.scss';

const SigninAndSignup = () => (
    <div className='signin-signup'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SigninAndSignup;
