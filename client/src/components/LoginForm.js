import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
    return (
        <div id='login-container'>
            <div className="login-left">
                <h1 id='login-h1'>Login to Wedd</h1>
                <input type="text" name="username" placeholder="Username/Email" id='login-input' />
                <input type="password" name="password" placeholder="Password" id='login-password'/>
                <input type="submit" name="login_submit" value="Login" id='login-submit'/>
                <div id='link-container'>
                    <span id='signup-text'>Dont have an account?</span> 
                    <Link to='/signup' className='signup-route'>Sign up here!</Link>
                </div>
                
            </div>

            <div className="login-right">
            <span className="loginwith">Login with<br />social network</span>
            <button className="social-login facebook">Log in with facebook</button>
            <button className="social-login twitter">Log in with Twitter</button>
            <button className="social-login google">Log in with Google+</button>
        </div>
            
        </div>
    )
}

export default LoginForm;