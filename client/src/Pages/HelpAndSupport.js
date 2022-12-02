import React from "react";
import Help from '../components/Common-components/Help-support';
import AccountNav from '../components/Customer-components/Profilepage-components/Account-Navbar';

export default function HelpAndSupport() {
    return(

        <>
            <div className="HelpAndSupport-container">
                <AccountNav/>
                <Help/>
            </div>
        </>


    )
}