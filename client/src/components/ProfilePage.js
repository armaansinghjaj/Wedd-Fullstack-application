import React from "react";

export default function ProfilePage() {

    const profileImage= require("../images/Profile-picture.png");
    const customer_account_name='Customer name';

    return(
        <>  
        <div className="profile-container">
            <div id="picture-container">
                <figure id="profile-image-wrapper">
                    <img src={profileImage} id='profile-image'/>
                </figure>
                <figcaption>{customer_account_name}</figcaption>


                <ul>
                    <li><p><img class="customer_pp" src=''/><i id="profile_picture_pencil" className="fa fa-pencil" aria-hidden="true"></i></p></li>
                    <li class="picture_change_item">
                        <form action="" method="post" enctype="multipart/form-data">
                            <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image"/> <br/>
                            <input type="submit" value="Update profile picture"/>
                        </form>
                    </li>
                </ul>
            </div>
        </div>

        </>

    )
}