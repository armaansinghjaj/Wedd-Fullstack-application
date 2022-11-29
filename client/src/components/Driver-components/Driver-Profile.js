import React, {useState} from "react";
import '../Customer-components/Profilepage-components/Profile.css';
import Drivernametag from "./Driver-nametag";
import './Driver-Profile.css'

export default function DProfile() {
    const driverName = 'Drivers name';
    const driverEmail = 'DriversEmail@email.com';

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);

    // Open hidden forms
    const edit = () => {
        setEditProfile(!editProfile)
    }
    const change = () => {
        setChangePassword(!changePassword)
    }

    const remove = () => {
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
        {/* Display drivers name */}
        <Drivernametag/>

        {/* Display drivers profile info */}
        <div className="Driver-settings-display">
            <h1 id="profile-settings-h1">
                Profile Settings
            </h1>
            <ul id="drivers-edit-profile-ul">
                <li>
                    <p><span id="driver-first-word">Name:</span> {driverName}
                    <button id="driver-edit-button" onClick={edit}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    </p>
                </li>
                <li>
                    <p><span id="driver-first-word">Email:</span> {driverEmail}
                    <button id="driver-edit-button" onClick={change}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    </p>
                </li>
            </ul>
            
            <div className="Driver-change">
            <div id="divider"/>
                <h1 id="Driver-change-profilei">Delete account</h1>
                <button className="Driver-delete-account-btn" onClick={remove}>Delete account</button>
            </div>
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
                            <input type="submit"  id="Driver-submit" value="Update"/>
                            <input type="reset"  id="Driver-submit" value="cancel" onClick={closeEdit}/>
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