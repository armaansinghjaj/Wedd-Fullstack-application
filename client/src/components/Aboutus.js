import React, {useEffect, useState} from 'react';
import './About.css';

function Aboutus() {

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/about');
        const items = await data.json();
        setItems(items);
    };

    return (
        <div className='about-background'>
            <div className='head-container'>
                <h1>{items.h1}</h1> <br/>
                <h1 className='about-h1'>{items.abouth1}</h1>
            </div>

            <br/>

            <div className='About-container'>
                <p id='para1'>{items.para1}</p> <br/>
                <p id='para2'>{items.para2}</p> <br/>
                <p id='para3'>{items.para3}</p> <br/>
            </div>
        </div>
    );
}

export default Aboutus;