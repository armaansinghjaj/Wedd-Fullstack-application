import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import ProfilePage from '../Customer-components/Profilepage-components/ProfilePage'
import '../Customer-components/Profilepage-components/AccountPages.css';
import '../Common-components/Settings-privacy.css';

export default function Settings() {

    const cookies = new Cookies();

    const driverName1 = 'Drivers name';
    const driverEmail1 = 'DriversEmail@email.com';

    // const [profileName, setprofileName]=useState('');
    // const [profileEmail, setprofileEmail]=useState('');
    // const [profileAddress, setprofileAddress]=useState('');
    // const [profileCar, setprofileCar]=useState('');
    // const [profileOldPassword, setprofileOldPassword]=useState('');
    // const [profileNewPassword, setprofileNewPassword]=useState('');
    // const [profileNewPassword_confirm, setprofileNewPassword_confirm]=useState('');
    const [customerDetails, setCustomerDetails] = useState([]);

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

  

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


    // REST API responses
    const [passwordChanged, setpasswordChanged] = useState(false);
    const [accountDeleted, setAccountDeleted] = useState(false);

    useEffect( () => {
        fetchCustomerDetails();
    }, []);

    const fetchCustomerDetails = async () => {
        const data = await fetch(`/api/account/profile/${cookies.get('__sid')}`);
        const customerDetails = await data.json();
        setCustomerDetails(customerDetails);
        // console.log(customerDetails);
    };

    // // Handle value changes
    // const handleProfileDetailsNameChange=(e)=>{
    //     setprofileName(e.target.value);
    // }
    // const handleProfileDetailsEmailChange=(e)=>{
    //     setprofileEmail(e.target.value);
    // }
    // const handleProfileDetailsAddressChange=(e)=>{
    //     setprofileAddress(e.target.value);
    // }
    // const handleProfileDetailsCarChange=(e)=>{
    //     setprofileCar(e.target.value);
    // }

    // const handleProfileOldPassword=(e)=>{
    //     setprofileOldPassword(e.target.value);
    // }
    // const handleprofileNewPassword=(e)=>{
    //     setprofileNewPassword(e.target.value);
    // }
    // const handleprofileNewPassword_confirm=(e)=>{
    //     setprofileNewPassword_confirm(e.target.value);
    // }

    // // Handle details form submit
    // const handleDetailsForm = () => {
    //     if(profileName === "" || profileEmail === "" || profileAddress === "" || profileCar === ""){
            
    //         // SHOW ERROR HERE
    //         alert("Empty");

    //     } else{
    //         const details_data = {
    //             customer_email: profileEmail,
    //             customer_name: profileName,
    //             customer_car: profileCar,
    //             home_address: profileAddress
    //         }
    //         fetch(`/api/account/profile/${cookies.get('__sid')}?option=details`, {
    //             credentials: 'same-origin',
    //             mode: 'cors',
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(details_data),
    //         })
    //         .then(profile_details_response => profile_details_response.json())
    //         .then(profile_details_response => {
    //             alert(profile_details_response);
    //         })
    //     }
    // }

    // const handlePasswordForm = () => {
    //     if(profileOldPassword === "" || profileNewPassword === "" || profileNewPassword_confirm === ""){
            
    //         // SHOW ERROR HERE
    //         alert("Empty");

    //     } else{
    //         const password_data = {
    //             profile_password_old: profileOldPassword,
    //             profile_password_new: profileNewPassword,
    //             profile_password_confirm: profileNewPassword_confirm,
    //         }
    //         fetch(`/api/account/profile/${cookies.get('__sid')}?option=password`, {
    //             credentials: 'same-origin',
    //             mode: 'cors',
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(password_data),
    //         })
    //         .then(profile_password_response => profile_password_response.json())
    //         .then(profile_password_response => {
    //             console.log(profile_password_response);
    //             setpasswordChanged(true);
    //         })
    //     }
    // }

    // const handleDeleteForm = () => {
    //     fetch(`/api/account/profile/${cookies.get('__sid')}`, {
    //         credentials: 'same-origin',
    //         mode: 'cors',
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(profile_delete_response => profile_delete_response.json())
    //     .then(profile_delete_response => {
    //         console.log(profile_delete_response);
    //         if(profile_delete_response.delete){
    //             cookies.remove('c_user');
    //             cookies.remove('__sid');
    //             setAccountDeleted(true);
    //         }
    //     })
    // }

    // const [visibleConfirm, setVisibleConfirm] = useState(false) 
    // const displayConfirm = visibleConfirm ? "confirmation-visible" : "confirmation";

    // const displayButton = () => {
    //     setVisibleConfirm(!visibleConfirm);
    // }

    return(
        <>

    <div className='ellipse-menu-container' id='ellipse-menu-container'>
            <div className='ellipse-menu-user-name'>
            <ProfilePage className="account-profile-class" imageSrc=""/></div>
            <i className="fa fa-ellipsis-v ellipse-menu" onClick={menuHandler} aria-hidden="true"></i>
            
        </div>
        {(showMenu === true) ? (
            <div className='menu-parent-container' id='menu-parent-container'>
            <div className='menu-wrapper'>
                <div className='menu-list'>
                    {/* <div className='menu-list-item'>Dashboard</div>
                    <div className='menu-list-item-divider'></div> */}

                    {/* <div className='menu-list-item'>Start Shift</div>
                    <div className='menu-list-item-divider'></div> */}
                    
                    <div className='menu-list-item item-delete-account' onClick={remove}>Delete Account</div>
                    
                    {/* <div className='menu-list-item-divider'></div> */}
                    {/* <div className='menu-list-item'>Signout</div> */}
                </div>
            </div>
        </div>)
        : ("")
        }


            {(accountDeleted === true) && <Navigate to="/login" replace={true}/>}
            {(passwordChanged === true) && <Navigate to="/account" replace={true}/>}


        <div className="Driver-settings-display">
            <h1 id="profile-settings-h1">
                Profile Settings
            </h1>
            <div className="driver-general-settings">
            <p className="driver-profile-heading-general" id="general-settings-header">General Settings</p>
                <ul id="drivers-edit-profile-ul">
                    <li>
                        <p><span className="driver-first-word">Name:</span> {driverName1}</p>
                    </li>
                    <li>
                        <p><span className="driver-first-word">Email:</span> {driverEmail1}</p>
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
                    <div className={"delete-confirmation1"}>
                        <h1 id="delete-warning1">WARNING!</h1>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                        <input type="submit" id="Driver-submit-confirm1" value="Confirm"/> <input type="reset"  id="Driver-submit-cancel1"
                         className="delete_account_btn1" value="Cancel" onClick={closeRemove}/>
                    </div>
                </form>
            </div>
        </div>
        

        {/* Hidden drivers name edit form */}
            <div id={editProfile ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
                <div id={editProfile ? "Driver-edit-form-active" :"Driver-edit-form"}>
                    <h1 id="Driver-change-profile1">Edit profile</h1>
                    <form action="/employeeprofile/account?option=details" method="post">
                        <ul>
                            <li id="Driver-name"><input type="text" name="employee_name" id="Driver-employee-name" value={driverName1}/></li>
                            <li id="Driver-inputemail"><input type="email" name="employee_email" id="Driver-employee-email" value={driverEmail1}/></li>
                            <div className="driver-edit-profile-btns1">
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
                    <h1 id="Driver-change-profilec1">Change password</h1>
                    <form action="/Employeeprofile/account?option=password" method="post">
                        <ul>
                            <li>Old password: <br/><input type="password" name="employee_password[old]" id="Driver-old-password" value=""/></li>
                            <li>New password: <br/><input type="password" name="employee_password[new]" id="Driver-new-password" value=""/></li>
                            <li>Confirm password: <br/><input type="password" name="employee_password[confirm]" id="Driver-confirm-password" value=""/></li>
                            <input type="submit"  className="Driver-submit" value="Update"/>
                            <input type="reset"  className="Driver-submit" value="cancel" onClick={closeChange}/>
                        </ul>
                    </form>
                </div>
            </div>    

        {/* <div className="settings-container">
                <h1>General Settings</h1>
                <div className="Profile-container">
                    <hr />
                </div>
            <h3 id="profile-h3">Change profile</h3>

            <form method="put" onSubmit={handleDetailsForm}>
                <ul>
                    <li id="vert-navbar-li">Your name: <input type="text" name="customer_name" id="customer_name" 
                onChange={handleProfileDetailsNameChange} value={customerDetails.name}/></li>
                    <li id="vert-navbar-li">Your email: <input type="email" name="customer_email" id="customer_email" 
                onChange={handleProfileDetailsEmailChange} value={customerDetails.email}/></li>
                    <li id="vert-navbar-li">Your home address: <input type="text" name="home_address" id="home_address" 
                onChange={handleProfileDetailsAddressChange} value={customerDetails.home_address}/></li>
                    <li id="vert-navbar-li">Your car: <input type="text" name="customer_car" id="customer_car" 
                onChange={handleProfileDetailsCarChange} value={customerDetails.car_name}/></li>
                    <input type="submit" id="submit" value="Update account"/>
                </ul>
            </form>
            <div className="changepass">
                <h3 id="profile-h3">Change password</h3>

                <form method="put" onSubmit={handlePasswordForm}>
                    <ul>
                        <li>Old password: <input type="password" name="customer_password[old]" id="old_password" 
                onChange={handleProfileOldPassword} value={profileOldPassword}/></li>
                        <li>New password: <input type="password" name="customer_password[new]" id="new_password_field" 
                onChange={handleprofileNewPassword} value={profileNewPassword}/></li>
                        <li>Confirm password: <input type="password" name="customer_password[confirm]" id="confirm_password" 
                onChange={handleprofileNewPassword_confirm} value={profileNewPassword_confirm}/></li>
                        <input type="submit" id="submit" value="Update password"/>
                    </ul>
                </form>
            </div>

            <div className="deleteacc">
                <h3 id="profile-h3">Delete account</h3>
                <button class="delete_account_btn" id="submit" onClick={displayButton}>Delete account</button>
                </div>
        
            <div className={displayConfirm}>
                        <form method="delete" onSubmit={handleDeleteForm}>
                            <div class="delete_confirmation" >
                            <p id="line">Once you delete your account, there is no going back. Please be certain.</p>
                                <input type="submit" id="submit" value="Confirm"/> 
                        </div>
                    </form>
                    </div>
                </form>
            </div>
            </div> */}
        </>
    )
}