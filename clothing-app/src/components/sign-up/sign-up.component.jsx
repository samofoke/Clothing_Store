import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfile } from '../../FireBase/firebaseutil';
import './sign-up.style.scss';

class SignUp extends React.Component {
   constructor() {
       super();

       this.state = {
           displayName: '',
           email: '',
           password: '',
           confirmPassword: ''
       }
   }

   render() {
       return(
           <div className='sign-up'>
               <h2 className='title'>I do not have an Account</h2>
               <span>Sign up with email and password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
                   <FormInput></FormInput>
                   <FormInput></FormInput>
                   <FormInput></FormInput>
                   <FormInput></FormInput>
               </form>
           </div>
       )
   }
}

export default