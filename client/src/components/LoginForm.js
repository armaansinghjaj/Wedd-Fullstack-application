import React,{useState} from 'react';
import { Link, Navigate } from 'react-router-dom';

import './LoginForm.css';


function LoginForm() {
    //Monitors state of input
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [userAuthenticated, setAuthenticatedUser]=useState('');

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
        
        if(email === '' || password === ''){
            //checking if email is empty
            if(email === '') setEmailError('Email Required');

            // checking if password is empty
            if(password === '') setPasswordError('Password Required');
        }
        else{
            const data = {
                email: email,
                password: password
            }
            fetch('/api/login', {
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
                setAuthenticatedUser(responsedata);
            })
        }
    }

        // *****DO NOT REMOVE******
        // REDIRECT CODE USING IF FOR REFERENCE PURPOSE.
        // if(data){
        //     if(data.loginType === "customer"){
        //         <Navigate to="/" replace={true}/>
        //     } else if(data.loginType === "driver"){
        //         <Navigate to="/driver" replace={true}/>
        //     } else if(data.loginType === "admin"){
        //         <Navigate to="/admin" replace={true}/>
        //     }
        //     else{
        //         alert("Wrong username or password")
        //     }
        // }

    return (
        <div id='login-container'>

            {(userAuthenticated && ((userAuthenticated.loginType === "customer")?(
                                <Navigate to="/" replace={true}/>
                            ):((userAuthenticated.loginType === "driver")?(
                                    <Navigate to="/driver" replace={true}/>
                                ):((userAuthenticated.loginType === "admin")?(
                                        <Navigate to="/admin" replace={true}/>
                                            ):(alert("Nothing"))))))}

            <form id='loginForm' onSubmit={handleFormSubmit}>
                <div className="login-top">
                    <h1 id='login-h1'>LOGIN</h1>
                    
                    <input type="text" name="email" placeholder="Email" id='login-input' onChange={handleEmailChange} value={email}/>
                    {emailError&&<div className='error-msg'>{emailError}</div>}
                    
                    <input type="password" name="password" placeholder="Password" id='login-password' onChange={handlePasswordChange} value={password}/>
                    {passwordError&&<div className='error-msg'>{passwordError}</div>}
                    
                    <input type="submit" name="login_submit" value="Login" id='login-submit'/>                
                </div>
                
                {/* Divider Line */}
                <div className="dividerl"></div>
            </form>

            <div id='link-container'>
                <span id='signup-text'>Dont have an account?</span> 
                <Link to='/signup' className='signup-route'>Sign up here!</Link>
             
            </div>

            <div className="forgot-password">
                <span id='pass-txt'>Forget your password?</span>
                <Link to='/forget' className='forgot-route'>Forget Password?</Link>
            </div>
        </div>
    )
}

export default LoginForm;