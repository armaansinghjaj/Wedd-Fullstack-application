import React, {useEffect, useState} from 'react';
import CardItem from './CardItem';
import PlaceholderJpg from '../images/placeholderDP.jpg'
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

            <div className='aboutus-middle'>
                <div className='spacing-2'>
                    <h1 id='middle-h1'>Why join We Designated Drivers?</h1>
                    <ul className='about-ul'>
                        <li>Ongoing support and training</li>
                        <li>Simple business model</li>
                        <li>You run your business, your Chauffeurs (drivers) provide the service</li>
                        <li>Low overhead, low capital requirements</li>
                        <li>High profit margins</li>
                        <li>A business with purpose</li>
                        <li>A proven recipe for success</li>
                        <li>Technology that is second to none</li>
                    </ul>
                </div>
            </div>
            <div className='aboutus-bottom'>
                <h3 className='bottom-h3'>Our Staff</h3>
                <div className='spacing'>
                    <div className='bottom-column'>
                        <CardItem
                            id="picture-spacing"
                            src={PlaceholderJpg}
                            text='Staff-name'
                            path=''
                        />
                        <p id="staff-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div className='bottom-column'>
                        
                        <CardItem
                            id="picture-spacing"
                            src={PlaceholderJpg}
                            text='Staff-name'
                            path=''
                        />
                        <p id="staff-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>

                    </div>
                    <div className='bottom-column'>
                        
                        <CardItem
                            id="picture-spacing"
                            src={PlaceholderJpg}
                            text='Staff-name'
                            path=''
                        />
                        <p id="staff-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div className='bottom-column'>
                        
                        <CardItem
                            src={PlaceholderJpg}
                            text='Staff-name'
                            path=''
                        />
                        <p id="staff-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;