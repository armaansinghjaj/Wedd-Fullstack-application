import React, {useState} from 'react'
import {ToastContainer, toast } from 'react-toastify';
import './Forgot-password.css';




export default function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
   
  const setVal = (e) =>{
    setEmail(e.target.value)
  }

  const sendLink = async(e)=>{
    e.preventDefault()
 
    const res = await fetch("/sendpasswordlink",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email})
    });

    const data = await res.json();

    if(data.status == 201){

      setEmail("");
      setMessage(true);

    }
    else{
      toast.error("Invalid user")
    }

  }
  
  return (
    <>

        <div id='forget-container'>
            <h1 id='forget-1'>Forget your password?</h1>
            <p id = "txt">Please enter your email address associated with your WeDD account.</p>
            <input type="email" value={email} onChange={setVal} name="email" placeholder="Email"  id='forget-input'  />
            {message ? <p> Password reset link send successfully sent in your Email</p>: ""}
            <input type="submit" name="forget_submit" value="Submit" onClick={sendLink} id='forget-submit'/> 

              
        </div>
 </>
  )
}

// export default Forgot-password