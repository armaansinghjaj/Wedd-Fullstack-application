import React,{useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './LoginForm.css';

function LoginForm() {
    //Monitors state of input
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [userAuthenticated, setAuthenticatedUser]=useState('');
    const cookies = new Cookies();

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
                cookies.set('uid', responsedata.name, { path: '/', maxAge: '5260000', secure: false, sameSite: 'strict'});
                console.log(cookies.get('uid'));
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
        <>
        {(userAuthenticated && ((userAuthenticated.loginType === "customer")?(
            <Navigate to="/" replace={true}/>
        ):((userAuthenticated.loginType === "driver")?(
                <Navigate to="/driver" replace={true}/>
            ):((userAuthenticated.loginType === "admin")?(
                    <Navigate to="/admin" replace={true}/>
                        ):(alert("Nothing")
        )))))}

        {cookies.get('uid') && <Navigate to="/ride" replace={true} />}
        
        <div className="login-parent-container">

            <div className="login-container-left login-child-containers">

                <div className='login-container-form'>

                    <div className="login-form-div-contents">
                        
                        <div className="login-form-contents">
                            
                            <form id='loginForm' onSubmit={handleFormSubmit}>
                                
                                <div className="login-form">
                                    <h1 className='login-form-head login-form-inside-contents'>Log in to your account</h1>
                                    
                                    <input type="email" className='login-form-fields login-form-inputs login-form-inside-contents' name="email" placeholder="Enter your email address" id='login-input' onChange={handleEmailChange} value={email}/>
                                    {emailError&&<div className='error-msg'>{emailError}</div>}
                                    
                                    <input type="password" className='login-form-fields login-form-inputs login-form-inside-contents' name="password" placeholder="Enter your password" id='login-password' onChange={handlePasswordChange} value={password}/>
                                    {passwordError&&<div className='error-msg'>{passwordError}</div>}
                                    
                                    <input type="submit" className='login-form-submit login-form-inputs login-form-inside-contents' name="login_submit" value="Login" id='login-submit'/>                
                                </div>
                            </form>
                        </div>

                        <div className="login-divider"></div>

                        <div className='link-container'>

                            <div className="signup-link-container login-form-links">
                                <Link to='/forget' className='forgot-route'>Forgot Password?</Link>
                            </div>

                            <div className="forgot-password-container login-form-links">
                                <span id='signup-text'>Dont have an account? </span>
                                <Link to='/signup' className='signup-route'>Sign up</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="login-container-right login-child-containers">
                <div className="login-right-banner">
                    <span className='login-right-banner-contents banner-content-1'>WeDD</span>
                    <span className='login-right-banner-contents banner-content-2'>Commute made simple</span>
                    <span className='login-right-banner-contents banner-content-3'>Call us at</span>
                    <span className='login-right-banner-contents banner-content-4'>+1-XXX-XXX-XXXX</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginForm;