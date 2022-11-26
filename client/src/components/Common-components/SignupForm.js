import React, {useEffect, useState} from "react";
import { Link, Navigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
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

    const cookies = new Cookies();

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
        <>
        {userVerified && (<Navigate to="/" replace={true} />)}
        {cookies.get('uid') && <Navigate to="/ride" replace={true} />}
        <div className="signup-parent-container">

                <div className='signup-container-form'>

                    <div className="signup-form-div-contents">
                        
                        <div className="signup-form-contents">
                            
                            <form id='signupForm' onSubmit={handleFormSubmit}>
                                
                                <div className="signup-form">
                                <h1 className='signup-form-head signup-form-inside-contents'>Sign Up with Email</h1>
                                <input type="text" className='signup-form-fields signup-form-inputs signup-form-inside-contents' name="name" placeholder="Enter a name" id="signup-input" onChange={handlenameChange} value={name}/>
                                {nameError&&<div className='error-msg'>{nameError}</div>}

                                <input type="email" className='signup-form-fields signup-form-inputs signup-form-inside-contents' name="email" placeholder="Enter your email address" id="signup-input" onChange={handleEmailChange} value={email} />
                                {emailError&&<div className='error-msg'>{emailError}</div>}

                                <input type="password" className='signup-form-fields signup-form-inputs signup-form-inside-contents' name="password" placeholder="Create a password" id="signup-password"onChange={handlePasswordChange} value={password} />
                                {passwordError&&<div className='error-msg'>{passwordError}</div>}

                                <input type="submit" className='signup-form-submit signup-form-inputs signup-form-inside-contents' name="signup_submit" value="Sign up" id="signup-submit" />
                                </div>
                            </form>
                        </div>

                        <div className="signup-divider"></div>

                        <div className='link-container'>
                            <div className="signup-link-container signup-form-links">
                                <span id='signup-text'>Already have an account? </span> 
                                <Link to='/signup' className='signup-route'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupForm;