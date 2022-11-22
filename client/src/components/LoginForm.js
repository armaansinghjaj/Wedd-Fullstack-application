import React,{useState} from 'react';
import { Link } from 'react-router-dom';

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

                {/* Google Login Button */}

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