import React, {useEffect, useState} from "react";
import '../Customer-components/Profilepage-components/Profile.css';
import './Driver-ellipse-menu.css'
import './Driver-Profile.css'

export default function DProfile() {
    const driverName = 'Drivers name';
    const driverEmail = 'DriversEmail@email.com';

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect( () => {
        fetchDriverDetails();
    }, []);

    const [driverDetails, setDriverDetails] = useState([]);

    const fetchDriverDetails = async () => {
        const data = await fetch('/api/employeeprofile/');
        const driverDetails = await data.json();
        setDriverDetails(driverDetails);
    };

    // Functions
    const closeAllOverlays = () =>{
        setShowMenu(false);
        setEditProfile(false);
        setChangePassword(false);
        setDeleteAccount(false);
    }

    // Open menu
    const menuHandler = () => {
        closeAllOverlays();
        setShowMenu(!showMenu);
    }

    // Open hidden forms
    const profileEdit = () => {
        closeAllOverlays();
        setEditProfile(!editProfile)
    }
    const passwordChange = () => {
        closeAllOverlays();
        setChangePassword(!changePassword)
    }

    const remove = () => {
        closeAllOverlays();
        setDeleteAccount(!deleteAccount)
    }

    // Close hidden forms
    const closeEdit = () => {
        setEditProfile(!editProfile)
    }
    const closeChange = () => {
        setChangePassword(!changePassword)
    }
    const closeRemove = () => {
        setDeleteAccount(!deleteAccount)
    }

    return(
        <>

        <div className='ellipse-menu-container' id='ellipse-menu-container'>
            <div className='ellipse-menu-user-name'>Driver Name</div>
            <i className="fa fa-ellipsis-v ellipse-menu" onClick={menuHandler} aria-hidden="true"></i>
        </div>
        {(showMenu === true) ? (
            <div className='menu-parent-container' id='menu-parent-container'>
            <div className='menu-wrapper'>
                <div className='menu-list'>
                    {/* <div className='menu-list-item'>Dashboard</div>
                    <div className='menu-list-item-divider'></div> */}

                    <div className='menu-list-item'>Start Shift</div>
                    <div className='menu-list-item-divider'></div>
                    
                    <div className='menu-list-item item-delete-account' onClick={remove}>Delete Account</div>
                    
                    {/* <div className='menu-list-item-divider'></div> */}
                    {/* <div className='menu-list-item'>Signout</div> */}
                </div>
            </div>
        </div>)
        : ("")
        }

        {/* Display drivers profile info */}
        <div className="Driver-settings-display">
            <h1 id="profile-settings-h1">
                Profile Settings
            </h1>
            <div className="driver-general-settings">
            <p className="driver-profile-heading-general">General Settings</p>
                <ul id="drivers-edit-profile-ul">
                    <li>
                        <p><span className="driver-first-word">Name:</span> {driverName}</p>
                    </li>
                    <li>
                        <p><span className="driver-first-word">Email:</span> {driverEmail}</p>
                    </li>
                </ul>
                <button className="driver-edit-button" onClick={profileEdit}>
                        Edit details
                </button>
            </div>
            <div id="divider"/>
            <div className="driver-password-change">
                <p className="driver-profile-heading-general">Change password</p>
                <ul>
                    <li>
                        <button className="driver-edit-button" onClick={passwordChange}>Change Password</button>
                    </li>
                </ul>
            </div>
            {/* <div className="divider-delete-btn"> */}
                {/* <div id="divider"/> */}
                {/* <div className="Driver-change"> */}
                    {/* <h1 id="Driver-change-profilei">Delete account</h1> */}
                    {/* <button className="Driver-delete-account-btn" onClick={remove}>Delete account</button> */}
                {/* </div> */}
            {/* </div> */}
        </div>

                    
        {/* Hidden delete profile form */}
        <div id={deleteAccount ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
            <div id={deleteAccount ? "drivers-delete-profile-form-active": "drivers-delete-profile-form"}>
                <form action="/Employeeprofile/account?option=delete" method="post">
                    <div className={"delete-confirmation"}>
                        <h1 id="delete-warning">WARNING!</h1>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                        <input type="submit" id="Driver-submit-confirm" value="Confirm"/> <input type="reset"  id="Driver-submit-cancel" className="delete_account_btn" value="Cancel" onClick={closeRemove}/>
                    </div>
                </form>
            </div>
        </div>
        

        {/* Hidden drivers name edit form */}
        <div id={editProfile ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
                <div id={editProfile ? "Driver-edit-form-active" :"Driver-edit-form"}>
                    <h1 id="Driver-change-profile">Edit profile</h1>
                    <form action="/employeeprofile/account?option=details" method="post">
                        <ul>
                            <li id="Driver-name"><input type="text" name="employee_name" id="Driver-employee-name" value={driverName}/></li>
                            <li id="Driver-inputemail"><input type="email" name="employee_email" id="Driver-employee-email" value={driverEmail}/></li>
                            <div className="driver-edit-profile-btns">
                                <input type="submit" className="Driver-submit" value="Update"/>
                                <input type="reset" className="Driver-submit" value="Cancel" onClick={closeEdit}/>
                            </div>
                        </ul>
                    </form>
                </div>
            </div>

            {/* Hidden drivers password change form */}
            <div id={changePassword ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
                <div className={changePassword ? "Driver-password-form-active" : "Driver-password-form"}>
                    <h1 id="Driver-change-profilec">Change password</h1>
                    <form action="/Employeeprofile/account?option=password" method="post">
                        <ul>
                            <li>Old password: <br/><input type="password" name="employee_password[old]" id="Driver-old-password" value=""/></li>
                            <li>New password: <br/><input type="password" name="employee_password[new]" id="Driver-new-password" value=""/></li>
                            <li>Confirm password: <br/><input type="password" name="employee_password[confirm]" id="Driver-confirm-password" value=""/></li>
                            <input type="submit"  id="Driver-submit" value="Update"/>
                            <input type="reset"  id="Driver-submit" value="cancel" onClick={closeChange}/>
                        </ul>
                    </form>
                </div>
            </div>    
        </>
    )
}