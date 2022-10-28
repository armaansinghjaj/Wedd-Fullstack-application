import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import ContactJpg from '../images/smartphone.jpg';
import AboutJpg from '../images/keys.jpg';
import RideJpg from '../images/driving-car.jpg';
import StaffJpg from '../images/man-and-keys.jpg';


function Cards () {

    return (
        <div className='cards'>
            <h1>Learn more about us!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                        <CardItem
                            src={ContactJpg}
                            text='Join us'
                            path='/Contact'
                        />
                        <CardItem
                            src={AboutJpg}
                            text='About'
                            path='/About'
                        />
                        </ul>
                        <ul className='cards__items'>
                        <CardItem
                            src={RideJpg}
                            text='Ride With us'
                            path='/Ride'
                        />
                         <CardItem
                            src={StaffJpg}
                            text='Our Staff'
                            path='/About'
                        />
                        </ul>
                </div>
            </div>
      </div>
    )
}

export default Cards;