import React, { useEffect, useState } from 'react';
import CardItem from "./CardItemnews";
import './CardNews.css';


function CardNews () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
      
    return (
        <>
            <div className={click ? 'update-active' : 'update-container'} onClick={handleClick}>
                <div className={click ? 'news-circle-active' : 'news-circle'} onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-down'} onClick={handleClick}/>
                    <div className={click ? 'update-links-active' : 'update-links'}>
                    <h3 id={click ? 'update-h3-active' : 'update-h3'}>Updates</h3>
                    <ul>
                        <li id={click ? 'update-h3-active' : 'update-h3'}><h1>news 1</h1><p>update</p></li>
                        <li id={click ? 'update-h3-active' : 'update-h3'}><h1>news 2</h1><p>update</p></li>
                        <li id={click ? 'update-h3-active' : 'update-h3'}><h1>news 3</h1><p>update</p></li>
                        <li id={click ? 'update-h3-active' : 'update-h3'}><h1>news 4</h1><p>update</p></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CardNews;