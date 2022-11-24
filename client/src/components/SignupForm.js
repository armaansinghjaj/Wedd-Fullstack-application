import React, {useState} from "react";
// import axios from 'axios';
import { Link, Navigate} from 'react-router-dom';


import './SignupForm.css';


function SignupForm() {

    // watch inputs to validate
    const [name, setname]=useState('');
    const [nameError, setnameError]=useState('');
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [userVerified, setVerifiedUser]=useState('');

    const handlenameChange=(e)=>{
        setnameError('');
        setname(e.target.value);
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
        
        if(name === '' || email === '' || password === ''){
            //checking if name is empty
            if(name === '') setnameError('Name Required');

            //checking if email is empty
            if(email === '') setEmailError('Email Required');

            // checking if password is empty
            if(password === '') setPasswordError('Password Required');
        }
        else{
            const data = {
                name: name,
                email: email,
                password: password
            }
            fetch('/api/signup', {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(responsedata => {
                setVerifiedUser(responsedata.userVerified);
            })
        }
    }

    return (
    <div id="signupform-container">
        {userVerified && (<Navigate to="/Home" replace={true} />)}
        <form onSubmit={handleFormSubmit}>
            <div class="signup-left">
                <h1 id='signup-h1'>Sign up</h1>
                <input type="text" name="name" placeholder="Name" id="signup-input" 
                onChange={handlenameChange} value={name}/>
                {nameError&&<div className='error-msg'>{nameError}</div>}

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