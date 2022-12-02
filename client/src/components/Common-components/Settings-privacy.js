import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import '../Customer-components/Profilepage-components/AccountPages.css';

export default function Settings() {

    const cookies = new Cookies();

    const [profileName, setprofileName]=useState('');
    const [profileEmail, setprofileEmail]=useState('');
    const [profileAddress, setprofileAddress]=useState('');
    const [profileCar, setprofileCar]=useState('');
    const [profileOldPassword, setprofileOldPassword]=useState('');
    const [profileNewPassword, setprofileNewPassword]=useState('');
    const [profileNewPassword_confirm, setprofileNewPassword_confirm]=useState('');
    const [customerDetails, setCustomerDetails] = useState([]);

    // REST API responses
    const [passwordChanged, setpasswordChanged] = useState(false);
    const [accountDeleted, setDeleteAccount] = useState(false);

    useEffect( () => {
        fetchCustomerDetails();
    }, []);

    const fetchCustomerDetails = async () => {
        const data = await fetch(`/api/account/profile/${cookies.get('__sid')}`);
        const customerDetails = await data.json();
        setCustomerDetails(customerDetails);
        // console.log(customerDetails);
    };

    // Handle value changes
    const handleProfileDetailsNameChange=(e)=>{
        setprofileName(e.target.value);
    }
    const handleProfileDetailsEmailChange=(e)=>{
        setprofileEmail(e.target.value);
    }
    const handleProfileDetailsAddressChange=(e)=>{
        setprofileAddress(e.target.value);
    }
    const handleProfileDetailsCarChange=(e)=>{
        setprofileCar(e.target.value);
    }

    const handleProfileOldPassword=(e)=>{
        setprofileOldPassword(e.target.value);
    }
    const handleprofileNewPassword=(e)=>{
        setprofileNewPassword(e.target.value);
    }
    const handleprofileNewPassword_confirm=(e)=>{
        setprofileNewPassword_confirm(e.target.value);
    }

    // Handle details form submit
    const handleDetailsForm = () => {
        if(profileName === "" || profileEmail === "" || profileAddress === "" || profileCar === ""){
            
            // SHOW ERROR HERE
            alert("Empty");

        } else{
            const details_data = {
                customer_email: profileEmail,
                customer_name: profileName,
                customer_car: profileCar,
                home_address: profileAddress
            }
            fetch(`/api/account/profile/${cookies.get('__sid')}?option=details`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details_data),
            })
            .then(profile_details_response => profile_details_response.json())
            .then(profile_details_response => {
                alert(profile_details_response);
            })
        }
    }

    const handlePasswordForm = () => {
        if(profileOldPassword === "" || profileNewPassword === "" || profileNewPassword_confirm === ""){
            
            // SHOW ERROR HERE
            alert("Empty");

        } else{
            const password_data = {
                profile_password_old: profileOldPassword,
                profile_password_new: profileNewPassword,
                profile_password_confirm: profileNewPassword_confirm,
            }
            fetch(`/api/account/profile/${cookies.get('__sid')}?option=password`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(password_data),
            })
            .then(profile_password_response => profile_password_response.json())
            .then(profile_password_response => {
                console.log(profile_password_response);
                setpasswordChanged(true);
            })
        }
    }

    const handleDeleteForm = () => {
        fetch(`/api/account/profile/${cookies.get('__sid')}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(profile_delete_response => profile_delete_response.json())
        .then(profile_delete_response => {
            console.log(profile_delete_response);
            if(profile_delete_response.delete){
                cookies.remove('c_user');
                cookies.remove('__sid');
                setDeleteAccount(true);
            }
        })
    }

    const [visibleConfirm, setVisibleConfirm] = useState(false) 
    const displayConfirm = visibleConfirm ? "confirmation-visible" : "confirmation";

    const displayButton = () => {
        setVisibleConfirm(!visibleConfirm);
    }

    return(
        <>

            {(accountDeleted === true) && <Navigate to="/login" replace={true}/>}
            {(passwordChanged === true) && <Navigate to="/account" replace={true}/>}

            <div className="settings-container">
                <h1>General Settings</h1>
                <div className="Profile-container">
                    <hr />
                </div>
            <h3 id="profile-h3">Change profile</h3>

            <form method="put" onSubmit={handleDetailsForm}>
                <ul>
                    <li id="vert-navbar-li">Your name: <input type="text" name="customer_name" id="customer_name" onChange={handleProfileDetailsNameChange} value={customerDetails.name}/></li>
                    <li id="vert-navbar-li">Your email: <input type="email" name="customer_email" id="customer_email" onChange={handleProfileDetailsEmailChange} value={customerDetails.email}/></li>
                    <li id="vert-navbar-li">Your home address: <input type="text" name="home_address" id="home_address" onChange={handleProfileDetailsAddressChange} value={customerDetails.home_address}/></li>
                    <li id="vert-navbar-li">Your car: <input type="text" name="customer_car" id="customer_car" onChange={handleProfileDetailsCarChange} value={customerDetails.car_name}/></li>
                    <input type="submit" id="submit" value="Update account"/>
                </ul>
            </form>
            <div className="changepass">
                <h3 id="profile-h3">Change password</h3>

                <form method="put" onSubmit={handlePasswordForm}>
                    <ul>
                        <li>Old password: <input type="password" name="customer_password[old]" id="old_password" onChange={handleProfileOldPassword} value={profileOldPassword}/></li>
                        <li>New password: <input type="password" name="customer_password[new]" id="new_password_field" onChange={handleprofileNewPassword} value={profileNewPassword}/></li>
                        <li>Confirm password: <input type="password" name="customer_password[confirm]" id="confirm_password" onChange={handleprofileNewPassword_confirm} value={profileNewPassword_confirm}/></li>
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
            </div>
        </>
    )
}