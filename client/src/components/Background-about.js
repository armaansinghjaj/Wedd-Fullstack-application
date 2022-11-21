import React from 'react';
import './Background.css';
import Abouttop from './About-top';


function newbackground() {

    return (
        <>
            <div className='BackgroundAbout-container'>
                <div className='title-container'>
                    <Abouttop />
                </div>
            </div>
        </>
        
    );
}

export default newbackground;