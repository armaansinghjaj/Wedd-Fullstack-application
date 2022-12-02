import React from 'react';
import Animation from '../../images/Loader.gif';
import './Loader.css'

function Loader() {

    return (
        <>
            <div className="loader-div">
                <div className='loader'>
                    <img src={Animation} alt="Loading Animation"/>
                    <p>Loading...</p>
                </div>
            </div>
        </>
    )
}

export default Loader;