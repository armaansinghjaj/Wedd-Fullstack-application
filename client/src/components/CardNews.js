import React from "react";
import CardItem from "./CardItem";
import './CardNews.css';


function CardNews () {
    return (
        <div>
            <div>
                <div>
                    <ul>
                        <CardItem 
                        src=''
                        text='News1'
                        label=''
                        path=''/>
                        <CardItem 
                        src=''
                        text='News2'
                        label=''
                        path=''/>
                        <CardItem 
                        src=''
                        text='News3'
                        label=''
                        path=''/>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardNews;