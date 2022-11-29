import React from "react";
import '../Common-components/Help-support.css';

export default function Help() {
    
    return(
        <>
        <div className="help-container">
        <h2 className= "support-h2">Get in touch</h2>
            
            <form id="support_form" method="post">
                <div className="user">
                <label>User email:</label><br>
                </br>
                <input type="email" name="customer_email" id="customer_email" value="Email"/> <br/><br/>
                <label>How can we help you?</label>
                <br/>
                <select name="problem[reason]" id="drop">
                    <option value="">--SELECT REASON--</option>
                    <option value="book_ride">I'm facing problems with booking ride</option>
                    <option value="account">I'm facing problems with my account</option>
                    <option value="service_contact">I'm facing problems with contacting you for services</option>
                </select> <br/><br/>

                <label>Briefly describe your problems in one or two lines.</label> <br/>
                <input type="text" id="brief_description" name="problem[brief_description]" placeholder="The form on the homepage..."/>
                <br/><br/>
                <label>Do you have any additional comments over the issue so that we can assist you better ?</label> <br/>
                <textarea id="textarea" rows="8" cols="50" name="problem[comments]" placeholder="Comments..."></textarea><br/><br/>
                <button id="submitnew">Contact</button>
                </div>
            </form>
        </div>
        </>
    )
}