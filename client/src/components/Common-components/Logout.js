import React, { useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Loader from '../Common-components/Loader';
import Cookies from 'universal-cookie';

export default function Logout() {

    const [isLoggedIn, setLoggedIn] = useState(true);
    const [loader, setLoader] = useState(false);
    const cookies = new Cookies();

    useEffect( ()=>{
        setLoader(true)
        if(isLoggedIn){
            fetch('/api/logout', {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    __sid: cookies.get('__sid')
                }),
            })
            .then(logout_response => logout_response.json())
            .then(logout_responseData => {
                if(logout_responseData.logout){
                    cookies.remove('c_user');
                    cookies.remove('__sid');
                    setLoggedIn(false);
                }
                setLoader(false)
            })
        }
    }, []);

    return (
    <>
        {/* Loader component */}
        {loader && <Loader/>}

        {(!isLoggedIn) && <Navigate to="/login" replace={true}/>}
    </>
    );
}