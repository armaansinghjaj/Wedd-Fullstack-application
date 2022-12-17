import React, {useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";
import Loader from '../Common-components/Loader';
import Portals from "../../Portals/Portals";

export default function Auth() {

    //VVVV----------------------------INSTANTIATE------------------------------------------VVVV//
    const cookies = new Cookies();

    //VVVV----------------------------STATES------------------------------------------VVVV//
    const [loader, setLoader] = useState(false);
    const [redirectDriver, setRedirectDriver] = useState(false);
    const [redirectCustomer, setRedirectCustomer] = useState(false);
    const [redirectLogin, setRedirectLogin] = useState(false);
    const [redirectAdmin, setRedirectAdmin] = useState(false);
    const [render, setRender] = useState(false);
    const [location, setLocation] = useState('');

    //VVVV----------------------------STATE HANLERS------------------------------------------VVVV//


    //VVVV----------------------------FORM HANLERS AND FETCH------------------------------------------VVVV//

    useEffect( () => {
        if(cookies.get("__sid") !== undefined || cookies.get("__sid") !== null){
            fetchUserDetails();
        }
    }, []);

    const [userDetails, setUserDetails] = useState({});

    const fetchUserDetails = () => {
        fetch(`/api/getuser/${cookies.get("__sid")}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(user => user.json())
        .then(user => {
            if(cookies.get("__sid")){
                setLoader(true);
                if("status" in user){
                    if(user.status === 404) setRedirectLogin(true)
                    else alert(user.message)
                } else if("user" in user) {
                    if(user.user.role === 1) {
                        let identifier = false;
                        setRedirectAdmin(true)
                        Object.keys(Portals().admin).forEach(path => {
                            if(window.location.toString() === ("http://localhost:3000"+Portals().admin[path])){
                                setRedirectAdmin(false)
                                setLocation(window.location.toString().replace(window.location.origin, ''))
                            }
                            else if(Portals().admin[path] === true && identifier) {
                                setRedirectAdmin(true)
                            }
                        });
                    }
                    else if(user.user.role === 2) {
                        let identifier = false;
                        setRedirectDriver(true)
                        Object.keys(Portals().admin).forEach(path => {
                            if(window.location.toString() === ("http://localhost:3000"+Portals().admin[path])){
                                setRedirectDriver(false)
                                setLocation(window.location.toString().replace(window.location.origin, ''))
                            }
                            else if(Portals().admin[path] === true && identifier) {
                                setRedirectDriver(true)
                            }
                        });
                    }
                    else if(user.user.role === 3) {
                        let identifier = false;
                        setRedirectCustomer(true)
                        Object.keys(Portals().customer).forEach(path => {
                            if(window.location.toString() === ("http://localhost:3000"+Portals().customer[path])){
                                setRedirectCustomer(false);
                                setLocation(window.location.toString().replace(window.location.origin, ''))
                            }
                            else if(Portals().customer[path] === true && identifier) {
                                setRedirectCustomer(true)
                            }
                        });
                    }
                } else {
                    alert(user.message)
                }
                setLoader(false);
            }
            setRender(true);
        })
    }

    //VVVV--------------------------------OVERLAYS--------------------------------------VVVV//
    

    //VVVV--------------------------------RETURN--------------------------------------VVVV//    
    return(
        <>
        {/* Loader component */}
        {loader && <Loader/>}

        {(render === true)?((redirectLogin === true)?
            (<Navigate replace to={"/login"}/>):(
                (redirectCustomer === true)?
                    (<Navigate replace to={"/"}/>):(
                        (redirectDriver === true)?
                        (<Navigate replace to={"/driver"}/>):(
                            (redirectAdmin === true)?
                            (<Navigate replace to={"/admin"}/>):(
                                ""
                            )
                        )
                    )
                )
            ):""
        }
        </>
    )
}