import React, {useState} from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import env from "react-dotenv";
import { Link } from 'react-router-dom';

import './SignupForm.css';


function SignupForm() {

    const [firstname, setFirstname]=useState('');
    const [firstnameError, setFirstnameError]=useState('');
    const [lastname, setLastname]=useState('');
    const [lastnameError, setLastnameError]=useState('');
    const [username, setUsername]=useState('');
    const [usernameError, setUsernameError]=useState('');
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [confirmPasswordError, setConfirmPasswordError]=useState('');

    const handleFirstnameChange=(e)=>{
        setFirstnameError('');
        setFirstname(e.target.value);
    }

    const handleLastnameChange=(e)=>{
        setLastnameError('');
        setLastname(e.target.value);
    }

    const handleUsernameChange=(e)=>{
        setUsernameError('');
        setUsername(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmailError('');
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPasswordError('');
      setPassword(e.target.value);
    }

    const handleConfirmPasswordChange=(e)=>{
        setConfirmPasswordError('');
      setConfirmPassword(e.target.value);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        
         //checking if firstname is empty
         if(firstname!==''){
           
        }
        else{
            setFirstnameError('Firstname Required');
        }

         //checking if lastname is empty
         if(lastname!==''){
           
        }
        else{
            setLastnameError('Lastname Required');
        }

         //checking if username is empty
         if(username!==''){
           
        }
        else{
            setUsernameError('username Required');
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

        if(password !== confirmPassword){
            setConfirmPasswordError('Password must match');
        }
        else{
            
        }
  
    
    }

    return (
    <div id="signupform-container">
        <form onSubmit={handleFormSubmit}>
            <div class="signup-left">
                <h1 id='signup-h1'>Sign up</h1>
                <input type="text" name="firstName" placeholder="First Name" id="signup-input" 
                onChange={handleFirstnameChange} value={firstname}/>
                {firstnameError&&<div className='error-msg'>{firstnameError}</div>}

                <input type="text" name="lastName" placeholder="Last Name" id="signup-input" 
                onChange={handleLastnameChange} value={lastname}/>
                {lastnameError&&<div className='error-msg'>{lastnameError}</div>}

                <input type="text" name="username" placeholder="Username" id="signup-input" 
                onChange={handleUsernameChange} value={username}/>
                {usernameError&&<div className='error-msg'>{usernameError}</div>}

                <input type="text" name="email" placeholder="E-mail" id="signup-input" 
                onChange={handleEmailChange} value={email} />
                {emailError&&<div className='error-msg'>{emailError}</div>}

                <input type="password" name="password" placeholder="Password" id="signup-password"
                onChange={handlePasswordChange} value={password} />
                {passwordError&&<div className='error-msg'>{passwordError}</div>}

                <input type="password" name="password2" placeholder="Confirm password" id="signup-password" 
                onChange={handleConfirmPasswordChange} value={confirmPassword} />
                {confirmPasswordError&&<div className='error-msg'>{confirmPasswordError}</div>}

                <input type="submit" name="signup_submit" value="Sign me up" id="signup-submit" />
            </div>
        
            <div class="signup-right">
                <span class="loginwith"></span>  
                <FacebookLogin
                appId={env.REACT_APP_FACEBOOK_LOGIN_ID}
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                    <button className="social-signin facebook" onClick={renderProps.onClick}><i id='Facebook-login' className="fa-brands fa-facebook"/>Sign in with Facebook</button>
                )}/>        
                <button className="social-signin google">
                <i id='Google-login' className="fa-brands fa-google"/>
                Sign up with Google
                </button>
            </div>
        </form>
                <div id='loginlink-container'>
                    <span id='login-text'>Already have an account?</span> 
                    <Link to='/login' className='login-route'>Login</Link>
                </div>
    </div>
    )
}

export default SignupForm;