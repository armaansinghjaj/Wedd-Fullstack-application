import React, { useState } from "react";
import '../Common-components/Help-support.css';

export default function Help() {

    const [email, setEmail]=useState('');
    const [reason, setReason]=useState('');
    const [description, setDescription]=useState('');
    const [comments, setComments]=useState('');

    const handleSupportEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handleSupportReasonChange=(e)=>{
        setReason(e.target.value);
    }
    const handleSupportDescriptionChange=(e)=>{
        setDescription(e.target.value);
    }
    const handleSupportCommentsChange=(e)=>{
        setComments(e.target.value);
    }

    const handleSupportForm = () => {
        if(email === "" || reason === "" || description === "" || comments === ""){
            
            // SHOW ERROR HERE
            alert("Empty");

        } else{
            const support_data = {
                customer_email: email,
                reason: reason,
                description: description,
                comments: comments,
            }
            fetch(`/api/account/support`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(support_data),
            })
            .then(support_response => support_response.json())
            .then(support_response => {
                if(support_response.status === 200){
                    
                    alert(support_response.message);
                }
                console.log(support_response);
            })
        }
    }
    
    return(
        <>
        <div className="help-container">
        <h2 className= "support-h2">Get in touch</h2>
            
            <form id="support_form" method="post" onSubmit={handleSupportForm}>
                <div className="user">
                <label>User email:</label><br>
                </br>
                <input type="email" name="email" id="customer_email" onChange={handleSupportEmailChange} value={email}/> <br/><br/>
                <label>How can we help you?</label>
                <br/>
                <select name="reason" id="drop"  onChange={handleSupportReasonChange} value={reason}>
                    <option value="">--SELECT REASON--</option>
                    <option value="book_ride">I'm facing problems with booking ride</option>
                    <option value="account">I'm facing problems with my account</option>
                    <option value="service_contact">I'm facing problems with contacting you for services</option>
                </select> <br/><br/>

                <label>Briefly describe your problems in one or two lines.</label> <br/>
                <input type="text" id="brief_description" name="description" placeholder="The form on the homepage..." onChange={handleSupportDescriptionChange} value={description}/>
                <br/><br/>
                <label>Do you have any additional comments over the issue so that we can assist you better ?</label> <br/>
                <textarea id="textarea" rows="8" cols="50" name="comments" placeholder="Comments..." onChange={handleSupportCommentsChange} value={comments}></textarea><br/><br/>
                <button id="submitnew">Contact</button>
                </div>
            </form>
        </div>
        </>
    )
}