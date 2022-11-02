import React,{useState} from 'react';
import './Rideform.css';

function Rideform() {
    //Monitors state of input
    const [Firstname, setFirstname]=useState('');
    const [FirstnameError, setFirstnameError]=useState('');
    const [Lastname, setLastname]=useState('');
    const [LastnameError, setLastnameError]=useState('');
    const [Email, setEmail]=useState('');
    const [EmailError, setEmailError]=useState('');
    const [Phone, setPhone]=useState('');
    const [PhoneError, setPhoneError]=useState('');
    const [Dropoff, setDropoff]=useState('');
    const [DropoffError, setDropoffError]=useState('');
    const [Pickup, setPickup]=useState('');
    const [PickupError, setPickupError]=useState('');
    const [Date, setDate]=useState('');
    const [DateError, setDateError]=useState('');

    const [Credit, setCredit]=useState('');

    const [Debit, setDebit]=useState('');

    const [Apple, setApple]=useState('');

    const [Paypal, setPaypal]=useState('');

    const [PaymentError, setPaymentError]=useState('');


    const handleFirstnameChange=(e)=>{
        setFirstnameError('');
        setFirstname(e.target.value);
    }

    const handleLastnameChange=(e)=>{
        setLastnameError('');
        setLastname(e.target.value);
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
    const handleDateChange=(e)=>{
        setDateError('');
        setDate(e.target.value);
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
        //checking if Firstname is empty
        if ( Firstname !== '' ? '' :  setFirstnameError('First name required'));

        //checking if Lastname is empty
        if ( Lastname !== '' ? '' :  setLastnameError(' required'));

        //checking if Email is empty
        if ( Email !== '' ? '' :  setEmailError('Email required'));

        //checking if Phone is empty
        if ( Phone !== '' ? '' :  setPhoneError('Phone number required'));

        //checking if Pickup is empty
        if ( Pickup !== '' ? '' :  setPickupError('Pickup location required'));

        //checking if Dropoff is empty
        if ( Dropoff !== '' ? '' :  setDropoffError('Dropoff location required'));

        //checking if Date is empty
        if ( Date !== '' ? '' :  setDateError('Date and time required'));

        //checking if Payment type is empty
        if ( (Credit!== '' && Debit!== ''  && Apple!== ''  && Paypal!== '')   ? '' :  setPaymentError('Payment type required'));
    }

    return (
        <div className='ride-background'>
            <div className='ride-container'>
                <form onSubmit={handleFormSubmit}>
                <div className='ride-left'>
                    <h2 id='ride-contact'>Contact Information:</h2>  
                    <input className="ride-Fnamei" placeholder='First Name ' id='ride-input' type='text' value={Firstname} onChange={handleFirstnameChange}
/>
                    {FirstnameError&&<div className='error-msg'>{FirstnameError}</div>}
                    <input className="ride-Lnamei" placeholder='Last Name ' id='ride-input' type='text' value={Lastname} onChange={handleLastnameChange}
/>
                    {LastnameError&&<div className='error-msg'>{LastnameError}</div>}
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
                    <label>Pickup time:</label>
                    <input className="pickup-time" placeholder='Pick-up time ' id='ride-input' type='time' value={Date} onChange={handleDateChange}
/>
                    {DateError&&<div className='error-msg'>{DateError}</div>}
                </div>

                <div className='ride-bottom'>
                        <h2 class='payment-type'>Payment Type:</h2>

                            <div id='ride-checklist'>
                            <input type='radio' name='r1' id='ride' 
                            class='ride-checklist' value='Paypal' onChange={handlePaymentChange}/> 
                                                        <label id='payment-label' htmlFor='ride'>Pay-Pal</label>
                            </div>


                            <div id='ride-checklist'>
                            <input type='radio'  name='r1'id='ride1' class='ride-checklist' value='Credit' onChange={handlePaymentChange}/> 
                            <label id='payment-label' htmlFor='ride1'>Credit Card</label>

                            </div>
                            <div id='ride-checklist'>
                            <input type='radio' name='r1' id='ride2' class='ride-checklist' value='Apple' onChange={handlePaymentChange}/> 
                            <label id='payment-label' htmlFor='ride2'>Apple pay</label>
                            </div>
                            <div id='ride-checklist'>
                            <input type='radio' name='r1' id='ride3' class='ride-checklist' value='Debit' onChange={handlePaymentChange}/> 
                            <label id='payment-label' htmlFor='ride3'>Debit card</label>
                            </div>
                            <div id='ride-checklist'>
                            {PaymentError&&<div className='paymenterror-msg'>{PaymentError}</div>}
                            </div>



                        <input type="submit" id='ride-submit' value="Submit"></input>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Rideform;