import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
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

    const responseFacebook = (response) => {
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
                <input type="text" name="username" placeholder="Username/Email" id='login-input' 
                onChange={handleEmailChange} value={email}/>
                {emailError&&<div className='error-msg'>{emailError}</div>}
                <input type="password" name="password" placeholder="Password" id='login-password'
                onChange={handlePasswordChange} value={password}/>
                {passwordError&&<div className='error-msg'>{passwordError}</div>}
                <input type="submit" name="login_submit" value="Login" id='login-submit'
                />                
            </div>
            </form>
                <div className="login-bottom">
                    <FacebookLogin
                    appId="1088597931155576"
                    autoLoad
                    callback={responseFacebook}
                    render={renderProps => (
                        <button className="social-login facebook" onClick={renderProps.onClick}><i id='Facebook-login' className="fa-brands fa-facebook"/>Sign in with Facebook</button>
                    )}
                    />
                    <button className="social-login apple">  
                        <i id='Apple-login' className="fa-brands fa-apple"/>
                        Sign in with Apple
                    </button>
                    <button className="social-login google">    
                        <i id='Google-login' className="fa-brands fa-google"/>
                        Sign in with Google
                    </button>
                </div>
                <div id='link-container'>
                    <span id='signup-text'>Dont have an account?</span> 
                    <Link to='/signup' className='signup-route'>Sign up here!</Link>
                </div>
        </div>
    )
}

export default LoginForm;