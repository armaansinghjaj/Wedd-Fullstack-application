import React from "react";
import Settings from '../components/Settings-privacy';
import AccountNavbar from "../components/Account-Navbar";

export default function AccountSettings() {
    return(
        <>
        <div className="Account-settings-container">
            {/* <AccountNavbar/> */}
            <Settings/>
        </div>
        </>
    )
}