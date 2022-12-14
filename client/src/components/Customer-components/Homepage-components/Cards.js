import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import CardItem from "./CardItem";
import './Cards.css';


function Cards () {

    const cookies = new Cookies();

    const [accessForbidden, setAccessForbidden] = useState(false);

    useEffect(()=>{
        verifyUser();
    }, []);

    const verifyUser = ()=>{
        fetch(`/api/getuser/${cookies.get("__sid")}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(verify_response => verify_response.json())
        .then(verify_responseData => {
            if(verify_responseData._id !== 3){
                setAccessForbidden(true);
            }
        })
    }

    return (

        <>
            {/* {(accessForbidden)?<Navigate replace to={"/admin"}/>:""} */}
        <div className='cards'>
            <p id="cards-p-main">We are Designated Drivers</p>
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
      </>
    )
}

export default Cards;