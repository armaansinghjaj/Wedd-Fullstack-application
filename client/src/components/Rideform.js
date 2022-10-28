import React from 'react';
import './Rideform.css';

function Rideform() {


    return (
        <div className='ride-background'>
            <div className='ride-container'>
                <form>
                <div className='ride-left'>
                    <h2 id='ride-contact'>Contact Information:</h2>  
                    <input className="ride-Fnamei" placeholder='First Name (Required)' id='ride-input' type='text' required/>
                    <input className="ride-Lnamei" placeholder='Last Name (Required)' id='ride-input' type='text' required/>
                    <input className="ride-emaili" placeholder='Email (Required)' id='ride-input' type='email' required/>
                    <input className="ride-phonei" placeholder='Phone number(Required)' id='ride-input' type='tel' required/>
                </div>

                <div className='ride-right'>
                    <h2 className='ride-location'>Location:</h2>  
                    <input className="ride-Paddri" placeholder='Pickup Location (Required)' id='ride-input' type='text' required/>
                    <input className="ride-Daddri" placeholder='Drop-off Location(Required)' id='ride-input' type='text' required/>
                    <label>Pickup time:</label>
                    <input className="pickup-time" placeholder='Pickup time (Required)' id='ride-input' type='time' required/>
                </div>

                <div className='ride-bottom'>
                        <h2 className='payment-type'>Payment Type:</h2>

                        <div className='payment-left'>
                            <label id='payment-label' htmlFor='ride'>Pay-Pal</label>
                            <input type='radio' name='r1' id='ride' 
                            className='ride-checklist' value='visa' required/> 
                            <label id='payment-label' htmlFor='ride1'>Credit Card</label>
                            <input type='radio'  name='r1'id='ride1' className='ride-checklist' value='Master'/> 
                        </div>

                        <div className='payment-right'> 
                            <label id='payment-label' htmlFor='ride2'>Apple pay</label>
                            <input type='radio' name='r1' id='ride2' className='ride-checklist' value='Apple'/> 
                            <label id='payment-label' htmlFor='ride3'>Debit card</label>
                            <input type='radio' name='r1' id='ride3' className='ride-checklist' value='Debit'/> 
                        </div>


                        <input type="submit" id='ride-submit' value="Submit"></input>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Rideform;