import React from "react";
import Help from '../components/Common-components/Help-support';
import AccountNav from '../components/Customer-components/Profilepage-components/Account-Navbar';
import Auth from '../components/Common-components/Auth';

export default function HelpAndSupport() {
    return(

        <>
        <Auth/>
            <div className="HelpAndSupport-container">
                <AccountNav/>
                <Help/>
            </div>
        </>


    )
}