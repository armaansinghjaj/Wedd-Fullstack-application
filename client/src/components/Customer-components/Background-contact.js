import React from 'react';
import './Background.css';
import Services from '../Customer-components/Services-components/Service';

function newbackground() {

    return (
        <>
            <div className='Background-contact-container'>
                <div className='title-container'>
                    <Services/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;