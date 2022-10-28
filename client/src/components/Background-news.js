import React from 'react';
import './Background.css';
import CardNews from './CardNews';

function newbackground() {

    return (
        <>
            <div className='Background-container'>
                <div className='title-container'>
                    <CardNews/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;