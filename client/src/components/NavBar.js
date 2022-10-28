import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';




function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const ScrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 1023) {
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

    useEffect(() => {
        showButton();
    }, []);

    return (

        <>
            <nav className="navbar">
                <div className="navbar-container">
                        <Link to="/Home" className="navbar-logo" onClick={scrollAndClose}>WeDD <i className=''/>
                        </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/Home' className='navlinks' onClick={scrollAndClose}> Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/ride' className='navlinks' onClick={scrollAndClose}> Ride
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/about' className='navlinks' onClick={scrollAndClose}> About 
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/contact' className='navlinks' onClick={scrollAndClose}> Contacts 
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/news' className='navlinks' onClick={scrollAndClose}> News
                            </Link>
                        </li>
                        <li className = 'nav-item' id='login-active'>
                            <Link to='/login' className='navlinks' onClick={scrollAndClose}> Login
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