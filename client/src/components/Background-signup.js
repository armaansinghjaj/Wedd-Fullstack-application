import React from 'react';
import './Background.css';
import SignupForm from './SignupForm';

function newbackground() {

    return (
        <>
            <div className='signup-container'>
                <div className='title-container'>
                    <SignupForm/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;