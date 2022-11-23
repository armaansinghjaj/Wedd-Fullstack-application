import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function Cards () {

    return (
        <div className='cards'>
            <h1 id='cards-h1'>We are Designated Drivers.</h1>
            <p id="cards-p-main">We know transportation. 400+ communities depend on us for it.</p>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                        <CardItem
                            text='Details'
                            text2='Get to know a little about us!'
                            
                            path='/about'
                        />
                        <CardItem
                            text='Services'
                            text2='Learn about what we provide.'
                            
                            path='/services'
                        />
                        <CardItem
                            text='Join us'
                            text2='Make an account with us today!'
                            
                            path='/signup'
                        />
                        <CardItem
                            text='Ride with us'
                            text2='Schedule a ride for your special events!'
                            
                            path='/ride'
                        />
                        </ul>
                </div>
            </div>
      </div>
    )
}

export default Cards;