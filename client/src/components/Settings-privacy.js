import React, {useState} from "react";
import './AccountPages.css';

export default function Settings() {

    const customer_account_name='Customer Name';
    // const customer_email='Email';
    // const customer_phone='Phone';
    // const customer_pp='customer profile picture';

    const [visibleConfirm, setVisibleConfirm] = useState(false) 
    const displayConfirm = visibleConfirm ? "confirmation-visible" : "confirmation";

    const displayButton = () => {
        setVisibleConfirm(!visibleConfirm);
    }

    return(

        <>
        <div className="settings-container">
            <h1>General Settings</h1>
            <div className="Profile-container">
        <hr />
</div>
<h3 id="profile-h3">Change profile</h3>

<form action="" method="post">
    <ul>
        <li id="vert-navbar-li">Your name: <input type="text" name="customer_name" id="customer_name" value= "customer_account.name" /></li>
        <li id="vert-navbar-li">Your email: <input type="email" name="customer_email" id="customer_email" value=" customer_account.email"/></li>
        <li id="vert-navbar-li">Your home address: <input type="text" name="home_address" id="home_address" value=" customer_account.home_address"/></li>
        <li id="vert-navbar-li">Your car: <input type="text" name="customer_car" id="customer_car" value=" customer_account.customer_car"/></li>
        <input type="submit" id="submit" value="Update account"/>
    </ul>
</form>
<div className="changepass">
<h3 id="profile-h3">Change password</h3>

<form action="" method="post">
    <ul>
        <li>Old password: <input type="password" name="customer_password[old]" id="old_password" value=""/></li>
        <li>New password: <input type="password" name="customer_password[new]" id="new_password_field" value=""/></li>
        <li>Confirm password: <input type="password" name="customer_password[confirm]" id="confirm_password" value=""/></li>
        <input type="submit" id="submit" value="Update password"/>
    </ul>
</form>
</div>

<div className="deleteacc">
<h3 id="profile-h3">Delete account</h3>
<button class="delete_account_btn" id="submit" onClick={displayButton}>Delete account</button>

</div>
<div className={displayConfirm}>
            <form action="" method="post">
                <div class="delete_confirmation" >
                <p id="line">Once you delete your account, there is no going back. Please be certain.</p>
                    <input type="submit" id="submit" value="Confirm"/> 
                </div>
            </form>
            <button id="cancel-end-shift-btn" onClick={displayButton}>Close</button>
            </div>
        </div>
        </>
    )
}