import React, { useState } from 'react';
import './Contact.css';

function Contactus() {
    //Monitors state of input
    const [Firstname, setFirstname]=useState('');
    const [FirstnameError, setFirstnameError]=useState('');
    const [Lastname, setLastname]=useState('');
    const [LastnameError, setLastnameError]=useState('');
    const [Email, setEmail]=useState('');
    const [EmailError, setEmailError]=useState('');
    const [Phone, setPhone]=useState('');
    const [PhoneError, setPhoneError]=useState('');
    const [Street, setStreet]=useState('');
    const [StreetError, setStreetError]=useState('');
    const [City, setCity]=useState('');
    const [CityError, setCityError]=useState('');
    const [Province, setProvince]=useState('');
    const [ProvinceError, setProvinceError]=useState('');
    const [Postal, setPostal]=useState('');
    const [PostalError, setPostalError]=useState('');

    const [Our, setOur]=useState('');

    const [Your, setYour]=useState('');

    const [Apply, setApply]=useState('');

    const [Franchise, setFranchise]=useState('');

    const [ServiceError, setServiceError]=useState('');

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
    const handleStreetChange=(e)=>{
      setStreetError('');
      setStreet(e.target.value);
    }
    const handleCityChange=(e)=>{
      setCityError('');
      setCity(e.target.value);
    }
    const handleProvinceChange=(e)=>{
    setProvinceError('');
    setProvince(e.target.value);
    }
    const handlePostalChange=(e)=>{
      setPostalError('');
      setPostal(e.target.value);
    }

    const handleServiceChange=(e)=>{
      setServiceError('');
      setOur(e.target.value)
      setYour(e.target.value)
      setApply(e.target.value)
      setFranchise(e.target.value)
    }

    const handleFormSubmit=(e)=>{
      e.preventDefault();
      //checking if Firstname is empty
      if ( Firstname !== '' ? '' :  setFirstnameError('First name required'));

      //checking if Lastname is empty
      if ( Lastname !== '' ? '' :  setLastnameError('Last name required'));

      //checking if Email is empty
      if ( Email !== '' ? '' :  setEmailError('Email required'));

      //checking if Phone is empty
      if ( Phone !== '' ? '' :  setPhoneError('Phone number required'));

      //checking if Street is empty
      if ( Street !== '' ? '' :  setStreetError('Street location required'));
      
      //checking if City is empty
      if ( City !== '' ? '' :  setCityError('City location required'));

      //checking if Province is empty
      if ( Province !== '' ? '' :  setProvinceError('Province location required'));

      //checking if Postal is empty
      if ( Postal !== '' ? '' :  setPostalError('Postal location required'));

      //checking if service type is empty
      if ( (City!== '' && Province!== ''  && Street!== ''  && Postal!== '')   ? '' :  setServiceError('Service option required'));

      }

    return (
        <div className='contact-container'>
            <form onSubmit={handleFormSubmit}>
                  <h2 id='contact-info'>Contact Us</h2>
                <div id='contact-top'>
                  <h2 id='font-format'>Contact Information</h2>
                  <input typeof='text' id='contact-input' placeholder='First Name '  value={Firstname} onChange={handleFirstnameChange}/>
                  {FirstnameError&&<div className='error-msg'>{FirstnameError}</div>}
                  <input typeof='text' id='contact-input' placeholder='lastname ' value={Lastname} onChange={handleLastnameChange}/>
                  {LastnameError&&<div className='error-msg'>{LastnameError}</div>}  
                  <input typeof='tel' id='contact-input' placeholder='Phone Number ' value={Phone} onChange={handlePhoneChange}/>
                  {PhoneError&&<div className='error-msg'>{PhoneError}</div>}
                  <input typeof='email' id='contact-input' placeholder='E-mail Address ' value={Email} onChange={handleEmailChange}/>
                  {EmailError&&<div className='error-msg'>{EmailError}</div>}
                </div>

                <div id='contact-location'>
                  <h2 id='font-format'>Address</h2>
                  <input typeof='text' id='contact-input' placeholder='Street ' value={Street} onChange={handleStreetChange}/>
                  {StreetError&&<div className='error-msg'>{StreetError}</div>}
                  <input typeof='text' id='contact-input' placeholder='City ' value={City} onChange={handleCityChange}/>
                  {ProvinceError&&<div className='error-msg'>{CityError}</div>}
                  <input typeof='text' id='contact-input' placeholder='Province ' value={Province} onChange={handleProvinceChange}/>
                  {ProvinceError&&<div className='error-msg'>{ProvinceError}</div>}
                  <input typeof='text' id='contact-input' placeholder='Postal code ' value={Postal} onChange={handlePostalChange}/>
                  {PostalError&&<div className='error-msg'>{PostalError}</div>}
                </div>

                <div id='contact-middle'>
                  <h2 id='font-format'>What service are you looking for?</h2>
                  <div id='checklist-wrapper'>
                    <input type='radio' name='r1' id='what' className='contact-radio' value={Our} onChange={handleServiceChange}/> 
                    <label htmlFor="what" id='contact-label'>Shuttle Service (Our Car)</label>
                  </div>
                  <div id='checklist-wrapper'>
                    <input type='radio'  name='r1'id='what1' className='contact-radio' value={Your} onChange={handleServiceChange}/> 
                    <label htmlFor="what1" id='contact-label'>Chauffeur Service (Your Car)</label>
                  </div>
                  <div id='checklist-wrapper'>
                    <input type='radio' name='r1' id='what2' className='contact-radio' value={Apply} onChange={handleServiceChange}/> 
                    <label htmlFor="what2" id='contact-label'>Apply to be a driver</label>
                  </div>
                  <div id='checklist-wrapper'>
                    <input type='radio' name='r1' id='what3' className='contact-radio' value={Franchise} onChange={handleServiceChange}/> 
                    <label htmlFor="what3" id='contact-label'>Request to open a franchise</label>
                    {ServiceError&&<div className='serviceerror-msg'>{ServiceError}</div>}
                  </div>
                </div>

                <div id='contact-bottom'>
                  <h2 htmlFor="comment" id='font-format'>Comments and Questions:</h2>
                  <textarea name="Comment" id="commenti" cols="50" rows="10"></textarea>
                  <input type="submit"  id='contact-submit' value="Submit" />
                </div>
                

            </form> 
        </div>
    );
}

export default Contactus;