import React, { useEffect, useState }from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './Services.css';

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
//  const form = useRef();
//  const sendEmail =(e) =>{
//   e.preventDefault();
//  emailjs.sendForm('service_pyu6zvm', 'template_di3rv4j', form.current, 'mebW9di93YKGnpqXw')
//  .then((result) => {
//      console.log(result.text);
//  }, (error) => {
//      console.log(error.text);
//  });
//  e.target.reset()
// };


const cookies = new Cookies();

const [accessForbidden, setAccessForbidden] = useState(false);

useEffect(()=>{
    verifyUser();
}, []);

const verifyUser = ()=>{
    fetch(`/api/getuser/${cookies.get("__sid")}`, {
        credentials: 'same-origin',
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(verify_response => verify_response.json())
    .then(verify_responseData => {
        if(verify_responseData._id !== 3){
            setAccessForbidden(true);
        }
    })
}
    return (
      <>
      {(accessForbidden)?<Navigate replace to={"/admin"}/>:""}
      
      <div className="service-parent-conatiner">
       
       <div className='service-container'>
            <form id='contactus-form' onSubmit={handleFormSubmit}>
                  <h2 id='service-info'>Service WeDD For Any Queries </h2>
                <div id='service-top'>
                  <h2 id='font-formatc'>Service Information</h2>
                  <input typeof='text' id='service-input' placeholder='name '  value={Firstname} onChange={handleFirstnameChange}/>
                  {FirstnameError&&<div className='service-error-msg'>{FirstnameError}</div>}
                  <br />
                  <input typeof='text' id='service-input' placeholder='lastname ' value={Lastname} onChange={handleLastnameChange}/>
                  {LastnameError&&<div className='service-error-msg'>{LastnameError}</div>}  
                  <br />
                  <input typeof='tel' id='service-input' placeholder='Phone Number ' value={Phone} onChange={handlePhoneChange}/>
                  {PhoneError&&<div className='service-error-msg'>{PhoneError}</div>}
                  <br />
                  <input typeof='email' id='service-input' placeholder='E-mail Address ' value={Email} onChange={handleEmailChange}/>
                  {EmailError&&<div className='service-error-msg'>{EmailError}</div>}
                </div>

                <div id='service-location'>
                  <h2 id='font-formata'>Address</h2>
                  <input typeof='text' id='service-input' placeholder='Street ' value={Street} onChange={handleStreetChange}/>
                  {StreetError&&<div className='service-error-msg'>{StreetError}</div>}
                  <br />
                  <input typeof='text' id='service-input' placeholder='City ' value={City} onChange={handleCityChange}/>
                  {ProvinceError&&<div className='service-error-msg'>{CityError}</div>}
                  <br />
                  <input typeof='text' id='service-input' placeholder='Province ' value={Province} onChange={handleProvinceChange}/>
                  {ProvinceError&&<div className='service-error-msg'>{ProvinceError}</div>}
                  <br />
                  <input typeof='text' id='service-input' placeholder='Postal code ' value={Postal} onChange={handlePostalChange}/>
                  {PostalError&&<div className='service-error-msg'>{PostalError}</div>}
                </div>

                <div id='service-middle'>
                  <h2 id='font-formats'>Select Service</h2>
                  <div className="selections">
                  <div className='service-items'>
                    <input type='radio' name='r1' id='what' className='service-radio' value={Our} onChange={handleServiceChange}/> 
                    <label htmlFor="what" id='service-label'>Shuttle Service (Our Car)</label>
                  </div>
                  <div className='service-items'>
                    <input type='radio'  name='r1'id='what1' className='service-radio' value={Your} onChange={handleServiceChange}/> 
                    <label htmlFor="what1" id='service-label'>Chauffeur Service (Your Car)</label>
                  </div>
                  <div className='service-items'>
                    <input type='radio' name='r1' id='what2' className='service-radio' value={Apply} onChange={handleServiceChange}/> 
                    <label htmlFor="what2" id='service-label'>Apply to be a driver</label>
                  </div>
                  {ServiceError&&<div className='service-error-msg'>{ServiceError}</div>}
                  </div>
                  </div>

                <div id='service-bottom'>
                  <h2 htmlFor="comment" id='font-format'>Comments and Questions:</h2>
                  <textarea name="Comment" id="commenti" cols="40" rows="5"></textarea>
                </div>
                <input type="submit"  id='service-submit' value="Submit" />
            </form> 
        </div>

        </div>
        </>
    );
}

export default Contactus;