import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function Cards () {

    return (
        <div className='cards'>
            <p id="cards-p-main">We know transportation. 400+ communities depend on us for it.</p>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                        <CardItem
                            text='Details'
                            text2='Learn a little about us!'
                            path='/about'
                        />
                        <CardItem
                            text='Services'
                            text2='Find out what we provide.'
                            path='/services'
                        />
                        <CardItem
                            text='Join us'
                            text2='Make an account with us today!'
                            path='/signup'
                        />
                        <CardItem
                            text='Ride with us'
                            text2='Schedule a ride!'
                            path='/ride'
                        />
                        </ul>
                </div>
            </div>
      </div>
    )
}

export default Cards;