import React, {useEffect, useState} from "react";
import { Link, Navigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import './Profile.css';

export default function ProfilePage(props) {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

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

    return(
        <> 
        {(accessForbidden)?<Navigate replace to={"/admin"}/>:""}
                <div id="picture-container">
                    <figure id="profile-image-wrapper">
                        <img src={props.imageSrc} id='profile-image' className={props.profileClassname}/>
                    </figure>
                    <button id="show-profile-picture-form-button" onClick={handleClick}><i id="profile_picture_pencil" className="fa fa-pencil" aria-hidden="true"/></button>
                    
                </div>
                <div className={click ?"form-visible" : "form-hidden"} id={props.profileFormId}>
                    <ul id="profile-picture-ul">
                        <li class="picture_change_item">
                            <form action="" method="post" enctype="multipart/form-data">
                                <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image"/><br/>
                                <input type="submit" value="Update profile picture"/>
                            </form>
                        </li>
                    </ul>
                </div>
        </>

    )
}