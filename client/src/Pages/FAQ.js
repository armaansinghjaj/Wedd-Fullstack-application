import React from "react";
import Faq from '../components/FrequentlyAskedQuestions';
import AccountNavbar from "../components/Account-Navbar";

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