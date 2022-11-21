import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import { GoogleLogin } from 'react-google-login';

import './LoginForm.css';


function LoginForm() {
    //Monitors state of input
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');

    const handleEmailChange=(e)=>{
        setEmailError('');
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPasswordError('');
        setPassword(e.target.value);
    }
    // Facebook login button
    const responseFacebook = (response) => {
        console.log(response);
    }
    // google login button
    const responseGoogle = (response) => {
        console.log(response);
      }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        //checking if email is empty
        if(email !== '' ){
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
    return (
        <div id='login-container'>
            <form onSubmit={handleFormSubmit}>
            <div className="login-top">
                <h1 id='login-h1'>LOGIN</h1>
                <input type="text" name="username" placeholder="Email" id='login-input' 
                onChange={handleEmailChange} value={email}/>
                {emailError&&<div className='error-msg'>{emailError}</div>}
                <input type="password" name="password" placeholder="Password" id='login-password'
                onChange={handlePasswordChange} value={password}/>
                {passwordError&&<div className='error-msg'>{passwordError}</div>}
                <input type="submit" name="login_submit" value="Login" id='login-submit'
                />                
            </div>
            {/* Divider Line */}
            <div className="dividerl"></div>
            <div className="login-bottom">
                {/* Facebook Login Button */}
                {/* <FacebookLogin
                appId="866567161040291"
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                    <button className="social-login facebook" 
                    onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <i id='Facebook-login' className="fa-brands fa-facebook"/>
                    Sign in with Facebook</button>
                )}
                /> */}
                {/* Google Login Button */}
                {/* <GoogleLogin
                    clientId="247213296818-igllkm2tm2r4tu7g4gqu11avkhckmrnb.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className='social-login google' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <i id='Google-login' className="fa-brands fa-google"/>Sign in with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> */}
            </div>
            </form>
            <div id='link-container'>
                <span id='signup-text'>Dont have an account?</span> 
                <Link to='/signup' className='signup-route'>Sign up here!</Link>
            </div>
        </div>
    )
}

export default LoginForm;