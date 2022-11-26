import React, { useState } from 'react';

import './CardNews.css';


function CardNews () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
      
    return (
        <>
            <div onClick={handleClick} className={click ? 'update-active' : 'update-container'}>
                <div onClick={handleClick}  className={click ? 'news-circle-active' : 'news-circle'} >
                    <i className={click ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-down'} onClick={handleClick}/>
                    <div  className={click ? 'update-links-active' : 'update-links'}>
                    <h3 id={click ? 'update-h3-active' : 'update-h3'}>Updates</h3>
                    <ul>
                        <li id={click ? 'update-li-active' : 'update-li'}><h1 id='update-h1'>Discount!</h1><p id='update-p'>Use the code Wedd20</p></li>
                        <li id={click ? 'update-li-active' : 'update-li'}><h1 id='update-h1'>Happy Holiday!</h1><p id='update-p'>Christmas is close!</p></li>
                        <li id={click ? 'update-li-active' : 'update-li'}><h1 id='update-h1'>Hours</h1><p id='update-p'>Closed feb 23rd</p ></li>
                        <li id={click ? 'update-li-active' : 'update-li'}><h1 id='update-h1'>Cheers!</h1><p id='update-p'>Drink responsibly</p></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CardNews;