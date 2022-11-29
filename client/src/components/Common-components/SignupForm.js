import React, {useState} from "react";
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
    let [passwordLength, setPasswordLength]=useState(0);
    const [passwordLengthError, setPasswordLengthError]=useState('');

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
        setPasswordLength(passwordLength+=1)
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
        else if(passwordLength < 8){
            setPasswordLengthError("Password must be at least 8 characters long");
        }
        else{
            const signup_data = {
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
                body: JSON.stringify(signup_data),
            })
            .then(signup_response => signup_response.json())
            .then(signup_responseData => {
                console.log(signup_responseData)
                if(signup_responseData.userCreate){
                    setVerifiedUser(signup_responseData.userCreate);
                    cookies.set('c_user', signup_responseData.name, { path: '/', maxAge: '5184000', secure: false, sameSite: 'strict'});
                    cookies.set('__sid', signup_responseData.sessionID, { path: '/', maxAge: '5184000', secure: false, sameSite: 'strict'});
                } else {
                    alert(signup_responseData.signinErrorMessage)
                }
            })
        }
    }

    return (
        <>
        {userVerified && (<Navigate to="/ride" replace={true} />)}

        {cookies.get('__sid') && <Navigate to="/ride" replace={true} />}

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

                                <input type="password" className='signup-form-fields signup-form-inputs signup-form-inside-contents' name="password" placeholder="Create a password" id="signup-password" onChange={handlePasswordChange} value={password} />
                                {passwordLengthError&&<div className='error-msg'>{passwordLengthError}</div>}

                                <input type="submit" className='signup-form-submit signup-form-inputs signup-form-inside-contents' name="signup_submit" value="Sign up" id="signup-submit" />
                                </div>
                            </form>
                        </div>

                        <div className="signup-divider"></div>

                        <div className='link-container'>
                            <div className="signup-link-container signup-form-links">
                                <span id='signup-text'>Already have an account? </span> 
                                <Link to='/login' className='signup-route'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupForm;