import React from 'react';
import Animation from '../../images/Loader.gif';
import './Loader.css'

function Loader() {

    return (
        <>
            <div className="loader-div">
                <span className="loader"></span>
                <p>Loading...</p>
            </div>
        </>
    )
}

export default Loader;