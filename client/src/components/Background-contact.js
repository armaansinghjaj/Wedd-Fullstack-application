import React from 'react';
import './Background.css';
import Contact from './Contactus';

function newbackground() {

    return (
        <>
            <div className='Background-contact-container'>
                <div className='title-container'>
                    <Contact/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;