import React, {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


import './SignupForm.css';


function SignupForm() {

    // watch inputs to validate
    const [firstname, setFirstname]=useState('');
    const [firstnameError, setFirstnameError]=useState('');
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');

    const handleFirstnameChange=(e)=>{
        setFirstnameError('');
        setFirstname(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmailError('');
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPasswordError('');
      setPassword(e.target.value);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        
         //checking if firstname is empty
         if(firstname!==''){
           
        }
        else{
            setFirstnameError('Name Required');
        }
 
        //checking if email is empty
        if(email!==''){
           
        }
        else{
            setEmailError('Email Required');
        }
        // checking if password is empty
        if(password !== ''){

        }
        else{
            setPasswordError('Password Required');
        }

    }

        // send data to backend

        const onSubmitForm = e => {
            e.preventDefault();
            let data = {
                  firstName: this.state.firstname,
                  email: this.state.lastname,
                  password: this.state.email
            };
    
            axios.post("http://localhost:3360/api/signup", data).then(() => {
            //  catch error    
             }).catch(() => {
                console.log("Something went wrong. Plase try again later");
            });
        }

    return (
    <div id="signupform-container">
        <form onSubmit={handleFormSubmit}>
            <div class="signup-left">
                <h1 id='signup-h1'>Sign up</h1>
                <input type="text" name="name" placeholder="Name" id="signup-input" 
                onChange={handleFirstnameChange} value={firstname}/>
                {firstnameError&&<div className='error-msg'>{firstnameError}</div>}

                <input type="text" name="email" placeholder="E-mail" id="signup-input" 
                onChange={handleEmailChange} value={email} />
                {emailError&&<div className='error-msg'>{emailError}</div>}

                <input type="password" name="password" placeholder="Password" id="signup-password"
                onChange={handlePasswordChange} value={password} />
                {passwordError&&<div className='error-msg'>{passwordError}</div>}

                <input type="submit" name="signup_submit" value="Sign up" id="signup-submit" />
            </div>
                {/* Divider Line */}
                <div className="divider"></div>
            <div class="signup-right">
                {/* Space between divider line and social media login buttons */}
                <span class="loginwith"></span>
                </div>
            </form>
            <div id='signup-link-container'>
                <span id='login-text'>Already have an account?</span> 
                <Link to='/login' className='login-route'>Login</Link>
            </div>
    </div>
    )
}

export default SignupForm;