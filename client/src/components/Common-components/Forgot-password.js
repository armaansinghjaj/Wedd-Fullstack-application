import React from 'react'

import './Forgot-password.css';

export default function Forgotpassword() {
  return (
   
      
        <div id='forget-container'>
            <h1 id='forget-1'>Forget your password?</h1>
            <div className="txt"> <p>Please enter your email address associated with your WeDD account.</p></div>
            <input type="text" name="email" placeholder="Email" id='forget-input'/>
            <input type="submit" name="forget_submit" value="Submit" id='forget-submit'/>     
        </div>
 
  )
}
