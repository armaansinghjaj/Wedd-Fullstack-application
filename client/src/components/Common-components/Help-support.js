import React, { useState } from "react";
import Auth from './Auth';
import Loader from '../Common-components/Loader';
import './Help-support.css';

export default function Help() {
    const [click, setClick]=useState(false)
    const [email, setEmail]=useState('');
    const [reason, setReason]=useState('');
    const [description, setDescription]=useState('');
    const [emailError, setEmailError]=useState('');
    const [reasonError, setReasonError]=useState('');
    const [descriptionError, setDescriptionError]=useState('');
    const [comments, setComments]=useState('');
    const [confirmation, setConfirmation]=useState(false);
    const [loader, setLoader] = useState(false);

    const handleClick=()=>{
        setClick(!click)
    }

    const resetStates = () =>{
        setEmail('')
        setReason('')
        setDescription('')
        setComments('')
    }

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

    const handleSupportForm = (e) => {
        e.preventDefault();
        setLoader(true)
        if(email === "" || reason === "" || description === ""){
            alert("Fields are empty")

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
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(support_data),
            })
            .then(support_response => support_response.json())
            .then(support_response => {
                if(support_response.status === 200){
                    setConfirmation(true);
                    alert(support_response.message);
                } else {
                    alert(support_response.message);
                }
                resetStates()
            })
        }
        setLoader(false)
    }
    
    return(
        <>
        {/* Loader component */}
        {loader && <Loader/>}
        <Auth/>
        <div className="help-container">

            <div id="help-left">
                <h2 className= "support-h2">Help us help you</h2>
                    <div id="help-container-descriptions">
                        <ul id="feedback-list">
                            <li><h2 id="feedback-h2">Community</h2><br/><p id="feedback-p">At We Designated Drivers, our goal is to better our communites by providing a safe and reliable chauffeur service.</p></li>
                            <br/>
                            <li><p id="feedback-p">We Strive to bring you the best experience when using our services. By receiving your feedback you can help up evolve and provide better accomodations for your next trips.</p></li>
                            <br/>
                            <li><h2 id="feedback-h2">Feedback</h2><br/><p id="feedback-p">If you have any questions, comments, please leave a message to our employees through this contact form.</p></li>
                            <br/>
                            <li><p id="feedback-p">If you have any concerns regarding our services, please fill out the form and our staff will contact you for further inquiries.</p></li>
                        </ul>
                        <button id="display-contact-form" onClick={handleClick}>Contact us</button>
                    </div>
            </div>
            <div id="help-right">
            <h2 id="contactus-h2">Reach out to us</h2>
                <form id="support_form" onSubmit={handleSupportForm}>
                    <div className="user">
                    <label>User email:</label><br/>
                    <br/>
                    <input type="email" name="email" id="customer_email" onChange={handleSupportEmailChange} value={email} required/> <br/><br/>
                    {(emailError !== "")?<div className="helpandsupport-errors">{emailError}</div>:<></>}
                    <label>How can we help you?</label>
                    <br/>
                    <select  required name="reason" id="drop"  onChange={handleSupportReasonChange} value={reason}>
                        <option value="">--SELECT REASON--</option>
                        <option value="book_ride">Problems with booking a ride</option>
                        <option value="account">Account related problems</option>
                        <option value="service_contact">I'm facing problems with contacting you for services</option>
                    </select> <br/><br/>

                    <label>Briefly describe your problems in one or two lines.</label> <br/>
                    <input required type="text" id="brief_description" name="description" placeholder="The form on the homepage..." onChange={handleSupportDescriptionChange} value={description}/>
                    <br/><br/>
                    <label>Do you have any additional comments over the issue so that we can assist you better ?</label> <br/>
                    <textarea id="textarea" rows="8" cols="50" name="comments" placeholder="Comments..." onChange={handleSupportCommentsChange} value={comments}></textarea><br/><br/>
                    <button id="submitnew">Contact</button>
                    </div>
                </form>
            </div>


            {/* Hidden contact us form */}
            <div id={click ?  "contact-form-mobile" : "contact-form-hidden"}>
            <h2 id="contactus-h2">Reach out to us</h2>
            <button id="close-contact-btn" onClick={handleClick}><i className="fa-solid fa-x"></i></button>
                <form id="support_form" method="put" onSubmit={handleSupportForm}>
                    
                    <div className="user">
                    <label>User email:</label><br>
                    </br>
                    <input type="email" name="email" id="customer_email" onChange={handleSupportEmailChange} value={email}/> <br/><br/>
                    <label>How can we help you?</label>
                    <br/>
                    <select name="reason" id="drop"  onChange={handleSupportReasonChange} value={reason}>
                        <option value="">--SELECT REASON--</option>
                        <option value="book_ride">Problems with booking a ride</option>
                        <option value="account">Account related problems</option>
                        <option value="service_contact">I'm facing problems with contacting you for services</option>
                    </select> <br/><br/>

                    <label>Briefly describe your problems in one or two lines.</label> <br/>
                    <input type="text" id="brief_description" name="description" placeholder="The form on the homepage..." onChange={handleSupportDescriptionChange} value={description}/>
                    <br/><br/>
                    <label>Do you have any additional comments over the issue so that we can assist you better ?</label> <br/>
                    <textarea id="textarea" rows="8" cols="50" name="comments" placeholder="Comments..." onChange={handleSupportCommentsChange} value={comments}></textarea><br/><br/>
                    <button type="submit" id="submitnew">Contact</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}