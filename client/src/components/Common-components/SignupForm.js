import React, {useEffect, useState} from "react";
import { Link, Navigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Loader from '../Common-components/Loader';
import './SignupForm.css';

function SignupForm() {
    // watch inputs to validate
    const [name, setname]=useState('');
    const [nameError, setnameError]=useState('');
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [loader, setLoader] = useState(false);
    let [passwordLength, setPasswordLength]=useState(0);
    let [lengthStorage, setLengthStorage]=useState(1);
    const [passwordLengthError, setPasswordLengthError]=useState('');
    const [userAuthenticated, setAuthenticatedUser]=useState('');
    const [redirectUser, setRedirect]=useState(false);

    const cookies = new Cookies();

    const handlenameChange=(e)=>{
        setnameError('');
        setname(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmailError('');
        setEmail(e.target.value);
    }

    useEffect(()=>{
        if(cookies.get("__sid")){
            setRedirect(true);
        }
    }, [])

    const handlePasswordChange=(e)=>{
        setPasswordError('');
        setPassword(e.target.value);
        if(e.target.value?.length < lengthStorage){
            setPasswordLength(passwordLength-=1)
            setLengthStorage(lengthStorage-1)
        } else {
            setPasswordLength(passwordLength+=1)
            setLengthStorage(lengthStorage+1)
            if(passwordLength >= 8){
                setPasswordLengthError('')
            }
        }
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();

        setLoader(true);
        
        if(name === '' || email === '' || password === '' || passwordLength < 8){
            //checking if name is empty
            if(name === '') setnameError('Name Required');

            //checking if email is empty
            if(email === '') setEmailError('Email Required');

            // checking if password is empty or password length is less than 8 characters
            if(password === ''){
                setPasswordLengthError('')
                setPasswordError('Password Required');
            } else if(passwordLength < 8) {
                setPasswordError('')
                setPasswordLengthError("Password must be at least 8 characters long");
            } else{
                setPasswordError('')
                setPasswordLengthError('')
            }
            setLoader(false)
        }
        else{
            // setLoader(true);
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
                if("user" in signup_responseData){
                    setAuthenticatedUser(signup_responseData);
                    cookies.set('__sid', signup_responseData.sessionID, { path: '/', maxAge: '5184000', secure: false, sameSite: 'strict'});
                } else {
                    setLoader(false)
                    setEmailError(signup_responseData.message)
                }
            })
            .catch(err => {
                console.log(err);
                setLoader(false)
            })
        }
    }

    return (
        <>

        {/* Loader component */}
        {loader && <Loader/>}

        {/* Redirect if user is already logged in */}
        {redirectUser && <Navigate replace to="/"/>}

        {/* Redirect if user is already logged in */}
        {userAuthenticated && <Navigate replace to="/ride"/>}

        <div className="signup-parent-container">

                <div className='signup-container-form'>

                    <div className="signup-form-div-contents">
                        
                        <div className="signup-form-contents">
                            
                            <form id='signupForm' onSubmit={handleFormSubmit}>
                                
                                <div className="signup-form">
                                <h1 className='signup-form-head signup-form-inside-contents'>Sign Up with Email</h1>
                                <input type="text" className='signup-form-fields signup-form-inputs signup-form-inside-contents signup-input' name="name" placeholder="Enter a name" onChange={handlenameChange} value={name}/>
                                {nameError&&<div className='error-msg'>{nameError}</div>}

                                <input type="email" className='signup-form-fields signup-form-inputs signup-form-inside-contents signup-input' name="email" placeholder="Enter your email address" onChange={handleEmailChange} value={email} />
                                {emailError&&<div className='error-msg'>{emailError}</div>}

                                <input type="password" className='signup-form-fields signup-form-inputs signup-form-inside-contents' name="password" placeholder="Create a password" id="signup-password" onChange={handlePasswordChange} value={password} />
                                {passwordLengthError&&<div className='error-msg'>{passwordLengthError}</div>}
                                {passwordError&&<div className='error-msg'>{passwordError}</div>}

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