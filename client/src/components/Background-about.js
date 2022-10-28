import React from 'react';
import './Background.css';
import About from './Aboutus';

function newbackground() {

    return (
        <>
            <div className='Background-container'>
                <div className='title-container'>
                    <About/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;