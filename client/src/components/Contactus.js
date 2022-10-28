import React from 'react';
import './Contact.css';

function Contactus() {


    return (
        <div className='contact-container'>
            <form>
                  <p id='contact-info'>Contact WeDD by filling out the form below. </p>
                <div id='contact-top'>
                  <h2 id='font-format'>Contact Information</h2>
                  <input typeof='text' id='contact-input' placeholder='First Name (required)' required/>
                  <input typeof='text' id='contact-input' placeholder='lastname (required)' required/>  
                  <input typeof='tel' id='contact-input' placeholder='Phone Number (Required)' required/>
                  <input typeof='email' id='contact-input' placeholder='E-mail Address (required)' required/>
                </div>

                <div id='contact-location'>
                  <h2 id='font-format'>Address</h2>
                  <input typeof='text' id='contact-input' placeholder='street (required)' required/>
                  <input typeof='text' id='contact-input' placeholder='city (required)' required/>
                  <input typeof='text' id='contact-input' placeholder='province (required)' required/>
                  <input typeof='text' id='contact-input' placeholder='postal code (required)' required/>
                </div>

                <div id='contact-middle'>
                  <h2 id='font-format'>What service are you looking for?</h2>
                  <input type='radio' name='r1' id='what' value='Ride'/> 
                  <label htmlFor="what" id='contact-label'>Shuttle Service (Our Car)</label>
                  <input type='radio'  name='r1'id='what1' value='Ride1'/> 
                  <label htmlFor="what1" id='contact-label'>Chauffeur Service (Your Car)</label>
                  <input type='radio' name='r1' id='what2' value='Drive'/> 
                  <label htmlFor="what2" id='contact-label'>Apply to be a driver</label>
                  <input type='radio' name='r1' id='what3' value='Own'/> 
                  <label htmlFor="what3" id='contact-label'>Request to open a franchise</label>
                </div>

                <div id='contact-bottom'>
                  <h2 htmlFor="comment" id='font-format'>Comments and Questions:</h2>
                  <textarea name="Comment" id="commenti" cols="88" rows="15"></textarea>
                </div>

                <input type="submit"  id='contact-submit' value="Submit" />

            </form> 
        </div>
    );
}

export default Contactus;