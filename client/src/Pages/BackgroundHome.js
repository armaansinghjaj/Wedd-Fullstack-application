import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/Background.css';

function BackgroundHome() {

    const navigate = useNavigate();

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
            <form className='form' onSubmit={() => navigate('/ride')}>
                <div className='form-container'>
                    <h2 className='form-head form-component'>Request your ride</h2>
                    <div className="input-fields form-component">
                        <input id='home-ride-input' type={'text'} name='pickup_location' placeholder='Enter pickup location' required/>
                        <input id='home-ride-input' type={'text'} name='drop_location' placeholder='Enter drop off location' required/>
                    </div>
                    <div className="submit-btn">
                        <input type={'submit'} className='ride-submit' name='ride-submit' value={'Request'}/>
                    </div>
                </div>
            </form>
        </>
        
    );
}

export default BackgroundHome;