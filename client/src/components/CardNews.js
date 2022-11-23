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
                    <CardItem className={click ? 'cardnews__item-active' : 'cardnews__item'} text='News 1'
                    name='news 1'/>
                    <CardItem className={click ? 'cardnews__item-active' : 'cardnews__item'} text='News 2'
                    name='news 2'/>
                    <CardItem className={click ? 'cardnews__item-active' : 'cardnews__item'} text='News 3'
                    name='news 3'/>
                    <CardItem className={click ? 'cardnews__item-active' : 'cardnews__item'} text='News 4'
                    name='news 4'/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CardNews;