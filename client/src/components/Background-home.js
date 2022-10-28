import React from 'react';
import './Background.css';
import BackgroundHome from './BackgroundHome';

function newbackground() {

    return (
        <>
            <div className='Background-container'>
                <div className='title-container'>
                    <BackgroundHome/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;