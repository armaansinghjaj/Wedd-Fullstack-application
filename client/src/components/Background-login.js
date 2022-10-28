import React from 'react';
import './Background.css';
import LoginForm from './LoginForm';

function newbackground() {

    return (
        <>
            <div className='Background-container'>
                <div className='title-container'>
                    <LoginForm/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;