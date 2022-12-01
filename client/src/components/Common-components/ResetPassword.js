import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {

    const {id, token} = useParams();

    const history = useNavigate();

    const userValid = async()=>{
        const res = await fetch(`/forgotpassword/${id}/${token}`,{
        method:"GET",
        headers: {
            "Content-Type":"application/json"
        }
    });
    const data = await res.json()
    if(data.status == 201){
        console.log("user valid")
    }
    else{
        history("*")
    }
}

useEffect(()=>{
    userValid()
},[])

  return (
    <>

    <div id='pass-container'>
        <h1 id='pass-1'>Enter your new password</h1>
        {/* <p id = "txt">Please enter your email address associated with your WeDD account.</p> */}
        <input type="password"name="password" placeholder="Password"  id='pass-input'  />
        {/* {message ? <p> Password reset link send successfully sent in your Email</p>: ""} */}
        <input type="submit" name="pass_submit" value="Reset" onClick="" id='pass-submit'/> 

          
    </div>
</>
  )
}

export default ResetPassword
