import React, {useState} from "react";
import { Link } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import { GoogleLogin } from 'react-google-login';

import './SignupForm.css';


function SignupForm() {

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

    // Facebook Signup
    const responseFacebook = (response) => {
        console.log(response);
    }

    // google Signup button
    const responseGoogle = (response) => {
        console.log(response);
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
                {/* Facebook Login Button */}
                {/* <FacebookLogin
                    appId="866567161040291"
                    autoLoad
                    callback={responseFacebook}
                    render={renderProps => (
                    <button className="social-signin facebook" 
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    <i id='Facebook-login' className="fa-brands fa-facebook"/>
                    Sign in with Facebook</button>
                )}
                /> */}
                {/* Google Login Button */}
                {/* <GoogleLogin
                    clientId="247213296818-igllkm2tm2r4tu7g4gqu11avkhckmrnb.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className="social-signin google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i id='Google-login' className="fa-brands fa-google"/>Sign up with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    /> */}
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