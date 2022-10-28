import React from 'react';
import './Background.css';
import RideForm from './Rideform';

function newbackground() {

    return (
        <>
            <div className='Background-container'>
                <div className='title-container'>
                    <RideForm/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;