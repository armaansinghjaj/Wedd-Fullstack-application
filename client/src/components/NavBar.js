import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    // close menu on click variables
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // Header visibility variables
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    // Watch page path 
    const location = useLocation();
    // console.log(location);

    const ScrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 479) {
          setButton(false);
        } else {
          setButton(true);
        }
      }; 
      
    window.addEventListener('resize', showButton);

    const scrollAndClose = () => {
            closeMobileMenu();
            ScrollToTop();
    }

        useEffect(()=> {
            const handleScroll = () => {
               let moving = window.pageYOffset
               
               setVisible(position > moving);
               setPosition(moving)
            };
            window.addEventListener("scroll", handleScroll);
            return(() => {
               window.removeEventListener("scroll", handleScroll);
            })
        })
    
    const cls = visible ? "visible" : "hidden";

    return (

        <>
            <nav  id='navbar' className={cls}>
                <div className="navbar-container">
                        <Link to="/Home" className="navbar-logo" onClick={scrollAndClose}>WeDD <i className=''/>
                        </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
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
                    </ul>
                    {button && <Button onClick={scrollAndClose} buttonStyle='btn--outline'></Button>}
                </div>
            </nav>
            
        </>
    );
}

export default NavBar;