import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Rideform.css'

function Rideform() {

    const navigate = useNavigate();
    //Monitors state of input
    const [Name, setName]=useState('');
    const [nameError, setNameError]=useState('');
    const [Email, setEmail]=useState('');
    const [EmailError, setEmailError]=useState('');
    const [Phone, setPhone]=useState('');
    const [PhoneError, setPhoneError]=useState('');
    const [Dropoff, setDropoff]=useState('');
    const [DropoffError, setDropoffError]=useState('');
    const [Pickup, setPickup]=useState('');
    const [PickupError, setPickupError]=useState('');


    const [Credit, setCredit]=useState('');

    const [Debit, setDebit]=useState('');

    const [Apple, setApple]=useState('');

    const [Paypal, setPaypal]=useState('');

    const [PaymentError, setPaymentError]=useState('');


    const handleNameChange=(e)=>{
        setNameError('');
        setName(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmailError('');
        setEmail(e.target.value);
    }
    const handlePhoneChange=(e)=>{
        setPhoneError('');
        setPhone(e.target.value);
    }
    const handleDropoffChange=(e)=>{
        setDropoffError('');
        setDropoff(e.target.value);
    }
    const handlePickupChange=(e)=>{
        setPickupError('');
        setPickup(e.target.value);
    }

    const handlePaymentChange=(e)=>{
        setPaymentError('');
        setCredit(e.target.value)
        setDebit(e.target.value)
        setPaypal(e.target.value)
        setApple(e.target.value)
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();

        //checking if Name is empty
        if ( Name !== '' ? '' :  setNameError('Name required'));

        //checking if Email is empty
        if ( Email !== '' ? '' :  setEmailError('Email required'));

        //checking if Phone is empty
        if ( Phone !== '' ? '' :  setPhoneError('Phone number required'));

        //checking if Pickup is empty
        if ( Pickup !== '' ? '' :  setPickupError('Pickup location required'));

        //checking if Dropoff is empty
        if ( Dropoff !== '' ? '' :  setDropoffError('Dropoff location required'));
        
        // checking discount code

        //checking if Payment type is empty
        if ( (Credit!== '' && Debit!== ''  && Apple!== ''  && Paypal!== '')   ? '' :  setPaymentError('Payment type required'));

        navigate('/rideConfirm')
    }

    return (
        <div className='ride-background'>
            <div className='ride-container'>
                <form onSubmit={handleFormSubmit}>
                <div className='ride-left'>
                    <h2 id='ride-contact'>Contact Information:</h2>  
                    <input className="ride-Fnamei" placeholder='Name ' id='ride-input' type='text' value={Name} onChange={handleNameChange}
/>
                   
                    {nameError&&<div className='error-msg'>{nameError}</div>}
                    <input className="ride-emaili" placeholder='Email ' id='ride-input' type='email' value={Email} onChange={handleEmailChange}
/>
                    {EmailError&&<div className='error-msg'>{EmailError}</div>}
                    <input className="ride-phonei" placeholder='Phone number' id='ride-input' type='tel' value={Phone} onChange={handlePhoneChange}
/>
                    {PhoneError&&<div className='error-msg'>{PhoneError}</div>}
                </div>

                <div className='ride-right'>
                    <h2 className='ride-location'>Location:</h2>  
                    <input className="ride-Paddri" placeholder='Pick-up Location ' id='ride-input' type='text' value={Pickup} onChange={handlePickupChange}
/>
                    {PickupError&&<div className='error-msg'>{PickupError}</div>}
                    <input className="ride-Daddri" placeholder='Drop-off Location' id='ride-input' type='text' value={Dropoff} onChange={handleDropoffChange}
/>
                    {DropoffError&&<div className='error-msg'>{DropoffError}</div>}
                    
                    
                </div>

                <div className='ride-bottom'>
                        <h2 className='payment-type'>Payment Type:</h2>

                        <div className='payment-left'>
                            <div id='ride-checklist'>
                            <input type='radio' name='r1' id='ride' 
                            class='ride-checklist' value='Paypal' onChange={handlePaymentChange}/> 
                            <label id='payment-label' htmlFor='ride'>Cash</label>
                            </div>

                            <div id='ride-checklist'>
                            <input type='radio'  name='r1'id='ride1' class='ride-checklist' value='Credit' onChange={handlePaymentChange}/> 
                            <label id='payment-label' htmlFor='ride1'>Credit Card</label>
                            </div>

                            <div id='ride-checklist'>
                            <input type='radio' name='r1' id='ride3' class='ride-checklist' value='Debit' onChange={handlePaymentChange}/> 
                            <label id='payment-label' htmlFor='ride3'>Debit card</label>
                            </div>
                            
                        </div>
                        <div>
                            {PaymentError&&<div className='paymenterror-msg'>{PaymentError}</div>}
                        </div>


                            <h2 class='car-type'>Car Type:</h2>
                            <div className='car-left'>
                           
                            <div id='car-checklist'>
                            <input type='radio' name='c1' id='car1' 
                            class='car-checklist' value='Manual' /> 
                            <label id='car-label' htmlFor='car'>Manual</label>
                            </div>

                            <div id='car-checklist'>
                            <input type='radio'  name='c1'id='car1' class='car-checklist' value='auto'/> 
                            <label id='car-label' htmlFor='car1'>Automatic</label>
                            </div>
                            </div>
                       
                            <div className="discount-code-div">
                                
                            <input type='text' name='discount_code' id='discount_code' placeholder='Discount code' />
                            </div>

                        <div className="submit-btn-div">
                            <input type="submit" id='ride-submit' value="Submit"></input>
                        </div>

                        
                </div>
                </form>
                 {/* <div className="map-container">
                <p>ide</p>
                </div> */}
            </div> 
            
        </div>
       
    );
}

export default Rideform;