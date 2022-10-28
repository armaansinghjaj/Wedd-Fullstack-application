import React from "react";
import './SignupForm.css';


function SignupForm() {
    return (
    <div id="signup-container">
        <div className="signup-left">
            <h1 id='signup-h1'>Sign up</h1>
            
            <input type="text" name="username" placeholder="Username" id="signup-input" required/>
            <input type="text" name="email" placeholder="E-mail" id="signup-input" required/>
            <input type="password" name="password" placeholder="Password" id="signup-password" required/>
            <input type="password" name="password2" placeholder="Retype password" id="signup-password" required/>
            
            <input type="submit" name="signup_submit" value="Sign me up" id="signup-submit" />
        </div>
  
        <div className="signup-right">
            <span className="loginwith">Sign up with<br />social network</span>
            
            <button className="social-signin facebook">Sign up with facebook</button>
            <button className="social-signin twitter">Sign up with Twitter</button>
            <button className="social-signin google">Sign up with Google+</button>
        </div>
    </div>
    )
}

export default SignupForm;