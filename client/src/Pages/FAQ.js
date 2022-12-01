import React from "react";
import Faq from '../components/Common-components/FAQ';
import AccountNavbar from "../components/Customer-components/Profilepage-components/Account-Navbar";

export default function FrequentlyAskedQuestions() {

    return(
        <>
            <div className="Faq-container">
                <AccountNavbar/>
                <Faq/>
            </div>
        </>
    )
}