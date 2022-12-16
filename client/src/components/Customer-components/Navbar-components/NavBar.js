import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Cookies from 'universal-cookie';
import {Button} from "./Button";
import Dropdown from "./Navbar-Account-dropdown"
import Loader from '../../Common-components/Loader';
import "./NavBar.css";

function NavBar() {
	// close menu on click variables
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
    const [loader, setLoader] = useState(false);
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

	// Header visibility variables
	const [position, setPosition] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);
	// Watch page path
	const location = useLocation();
	// console.log(location);
    const cookies = new Cookies();

	const ScrollToTop = () => {
		window.scrollTo({top: 0, left: 0, behavior: "smooth"});
	};

    const handleProfileClick = ()=>{
        setOpenProfileMenu(!openProfileMenu);
    }

	const [button, setButton] = useState(true);

	const showButton = () => {
		if (window.innerWidth <= 479) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener("resize", showButton);

	const scrollAndClose = () => {
		closeMobileMenu();
		ScrollToTop();
	};

	useEffect(() => {
		const handleScroll = () => {
			let moving = window.pageYOffset;
			setVisible(position > moving);
			setPosition(moving);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const cls = visible ? "visible" : "hidden";

    const [userName, setUserName] = useState('');

    useEffect(()=>{
        if(cookies.get("__sid") !== undefined){
            setLoader(true);
            getUser();
            // setLoader(false);
        } else {
            setUserName('');
        }
    }, []);

    setInterval(()=>{
        if(cookies.get("__sid") !== undefined){
            // setLoader(true);
            getUser();
            // setLoader(false);
        } else {
            setUserName('');
        }
    }, 5000)

    const getUser = ()=>{
        // setLoader(true);
        fetch(`/api/getuser/${cookies.get("__sid")}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(getUser_response => getUser_response.json())
        .then(getUser_responseData => {
            if('user' in getUser_responseData){
                // console.log(getUser_responseData)
                setUserName(getUser_responseData.user.name);
            } else {
                if(cookies.get('__sid')){
                    // window.alert(getUser_responseData.message);
                }
                cookies.remove('c_user');
                cookies.remove('__sid');
                setUserName('');
            }
            setLoader(false);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
        {/* Loader component */}
        {loader && <Loader/>}

        <nav className={cls}>
                <div className="navbar-container">

                    <div className="navbar-group-1">
                        <Link to="/" className="navbar-logo" onClick={scrollAndClose}>WeDD</Link>
                    </div>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <div className="navbar-group-2">
                        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                            <li className = 'nav-item'>
                                <Link to='/' className={location.pathname === '/'?'nav-links nav-links-active' : 'nav-links'} onClick={scrollAndClose}> Home
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to='/ride' className={location.pathname === '/ride'?'nav-links nav-links-active' : 'nav-links'} onClick={scrollAndClose}> Ride
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to='/about' className={location.pathname === '/about'?'nav-links nav-links-active' : 'nav-links'} onClick={scrollAndClose}> About 
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to='/services' className={location.pathname === '/services'?'nav-links nav-links-active' : 'nav-links'} onClick={scrollAndClose}> Services 
                                </Link>
                            </li>
                            <li className = 'nav-item' id='login-active'>
                                <Link to='/login' className='nav-links' onClick={scrollAndClose}> Login 
                                </Link>
                            </li>
                            <li className = 'nav-item' id='signup-active'>
                                <Link to='/signup' className='nav-links' onClick={scrollAndClose}> Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="navbar-group-3">

                            {(userName !== '' && cookies.get('__sid')) && <div className="navbar-user-link">
                                <Link onClick={handleProfileClick} to={{javascript:void(0)}}>{userName.charAt(0).toUpperCase() + userName.slice(1)} {(openProfileMenu === false) ? (<i className='fas fa-angle-down'></i>) : (<i className='fas fa-angle-up'></i>)}</Link>
                                {(openProfileMenu === true) && (<Dropdown/>)}
                            </div>}
                            {!(userName !== '' && cookies.get('__sid')) && <div className="navbar-right">
                                <Link className='navbar-buttons-right' to='/signup'>Signup</Link>
                                <Link className='navbar-buttons-right' to='/login'>Login</Link>
                            </div>}
                    </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
