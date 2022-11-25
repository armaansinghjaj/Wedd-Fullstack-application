import React from 'react'

import './Forget.css';

export default function Forgotpassword() {
  return (
   
      
        <div id='forget-container'>
            <h1 id='forget-1'>Forget your password?</h1>      
            <input type="text" name="email" placeholder="Email" id='forget-input'/>
            <input type="submit" name="forget_submit" value="Submit" id='forget-submit'/>     
        </div>
 
  )
}

// export default Forgot-password