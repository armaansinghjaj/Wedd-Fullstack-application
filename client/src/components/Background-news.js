import React from 'react';
import './Background.css';
import CardNews from './CardNews';

function newbackground() {

    return (
        <>
            <div className='news-container'>
                <div className='news-title-container'>
                    <CardNews/>
                </div>
            </div>
        </>
        
    );
}

export default newbackground;