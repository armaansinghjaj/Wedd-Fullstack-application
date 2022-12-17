import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../components/Customer-components/Background.css';

function BackgroundHome() {

    const navigate = useNavigate();

    const [homeFormPick, setHomeFormPick] = useState('');
    const [homeFormDrop, setHomeFormDrop] = useState('');

    const handleHomeFormPick = (e) => {
        setHomeFormPick(e.target.value);
    }

    const handleHomeFormDrop = (e) => {
        setHomeFormDrop(e.target.value);
    }

    return (
        <>
            <div className='tag-line'>
                <div className='tag tag-line-word'>
                    <h3>We are</h3>
                </div>
                <div className='tag tag-line-word'>
                    <h3>Designated</h3>
                </div>
                <div className='tag tag-line-word'>
                    <h3>Drivers</h3>
                </div>
            </div>
            <form className='form' onSubmit={() => {
                const cookies = new Cookies();
                cookies.set("form_pick", homeFormPick, {path: "/", maxAge: "600", secure: false, sameSite: 'strict'})
                cookies.set("form_drop", homeFormDrop, {path: "/", maxAge: "600", secure: false, sameSite: 'strict'})
                if(new Cookies().get("__sid")){
                    navigate('/ride');
                } else {
                    navigate("/login");
                }
            }}>
                <div className='form-container'>
                    <h2 className='form-head form-component'>Request your ride</h2>
                    <div className="input-fields form-component">
                        <input id='home-ride-input' type={'text'} name='pickup_location' placeholder='Enter pickup location' onChange={handleHomeFormPick} value={homeFormPick} required/>
                        <input id='home-ride-input' type={'text'} name='drop_location' placeholder='Enter drop off location' onChange={handleHomeFormDrop} value={homeFormDrop} required/>
                    </div>
                    <div className="submit-btn">
                        <input id='home-ride-submit' type={'submit'} className='ride-submit' name='ride-submit' value={'Request'}/>
                    </div>
                </div>
            </form>
        </>
        
    );
}

export default BackgroundHome;