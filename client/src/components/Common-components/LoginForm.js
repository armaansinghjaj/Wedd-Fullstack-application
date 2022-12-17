import React,{useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Loader from '../Common-components/Loader';
import './LoginForm.css';

function LoginForm() {
    //Monitors state of input
    const [email, setEmail]=useState('');
    const [emailError, setEmailError]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [userAuthenticated, setAuthenticatedUser]=useState('');
    const [loader, setLoader] = useState(false);
    const [redirectUser, setRedirect]=useState(false);
    const [error, setError]=useState('');
    const cookies = new Cookies();

    const handleEmailChange=(e)=>{
        setError('');
        setEmailError('');
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setError('');
        setPasswordError('');
        setPassword(e.target.value);
    }

    useEffect(()=>{
        if(cookies.get("__sid")){
            setRedirect(true);
        }
    }, [])

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        
        setLoader(true)
        if(email === '' || password === ''){
            //checking if email is empty
            if(email === '') setEmailError('Email Required');

            // checking if password is empty
            if(password === '') setPasswordError('Password Required');
        }
        else{
            const login_data = {
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
                body: JSON.stringify(login_data),
            })
            .then(login_response => login_response.json())
            .then(login_responseData => {
                if(login_responseData.status === 200){
                    setAuthenticatedUser(login_responseData);
                    cookies.set('__sid', login_responseData.user.sessionID, { path: '/', maxAge: '5184000', secure: false, sameSite: 'strict'});
                    setLoader(false)
                } else {
                    setLoader(false)
                    setError(login_responseData.message);
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
        setLoader(false)
    }

    return (
        <>

        {/* Loader component */}
        {loader && <Loader/>}

        {/* Redirect to different portals when logged in */}
        {userAuthenticated && (<Navigate replace to={"/ride"}/>)}

        {/* Redirect if user already logged in */}
        {redirectUser && (<Navigate replace to={"/"}/>)}

        {/* Redirect to ride if user comes to login page after logging in. */}
        {/* {(cookies.get('c_user') && cookies.get('__sid')) && (<Navigate to="/ride" replace={true} />)} */}
        
        <div className="login-parent-container">

            <div className="login-container-left login-child-containers">

                <div className='login-container-form'>

                    <div className="login-form-div-contents">
                        
                        <div className="login-form-contents">
                            
                            <form id='loginForm' onSubmit={handleFormSubmit}>
                                
                                <div className="login-form">
                                    <h1 className='login-form-head login-form-inside-contents'>Log in to your account</h1>

                                    {(error !== '')?<div className='login-error-message'>{error}</div>:""}

                                    <div className="login-form-error-txt"></div>
                                    
                                    <input type="email" className='login-form-fields login-form-inputs login-form-inside-contents' name="email" placeholder="Enter your email address" id='login-input' onChange={handleEmailChange} value={email}/>
                                    {emailError&&<div className='error-msg'>{emailError}</div>}
                                    
                                    <input type="password" className='login-form-fields login-form-inputs login-form-inside-contents' name="password" placeholder="Enter your password" id='login-password' onChange={handlePasswordChange} value={password}/>
                                    {passwordError&&<div className='error-msg'>{passwordError}</div>}
                                    
                                    <input type="submit" className='login-form-submit login-form-inputs login-form-inside-contents' name="login_submit" value="Login" id='new-login-submit'/>                
                                </div>
                            </form>
                        </div>

                        <div className="login-divider"></div>

                        <div className='link-container'>

                            <div className="signup-link-container login-form-links">
                                <Link to='/forgot' className='forgot-route'>Forgot Password?</Link>
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
                    <span className='login-right-banner-contents banner-content-4'><a href="tel:+14032018223" className='login-call-link'>+1-403-201-8223</a></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginForm;