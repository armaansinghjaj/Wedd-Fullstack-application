import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  // On button press for page change scroll page to top
  const ScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About' onClick={ScrollToTop}>How it works</Link>
            <Link to='/Contact' onClick={ScrollToTop} >Contact</Link>
            <Link to='/Ride' onClick={ScrollToTop} >Ride with us</Link>
            <Link to='/Login' onClick={ScrollToTop} >Login</Link>
            <Link to='/Signup' onClick={ScrollToTop} >Sign up</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Placeholder</h2>
            <Link to='/' onClick={ScrollToTop} >Placeholder</Link>
            <Link to='/' onClick={ScrollToTop} >Placeholder</Link>
            <Link to='/' onClick={ScrollToTop} >Placeholder</Link>
            <Link to='/' onClick={ScrollToTop} >Placeholder</Link>
            <Link to='/' onClick={ScrollToTop} >Placeholder</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>linked-In</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link id='footer-address' to='/About' onClick={ScrollToTop}>Address Placeholder</Link>
            <Link id='footer-phone' to='/About' onClick={ScrollToTop}>(403)-201-8223</Link>
            <Link id='footer-email' to='/Ride' onClick={ScrollToTop} >WeDesignatedDrivers@gmail.com</Link>

          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo' onClick={ScrollToTop}>
              WEDD
              <i id='footer-logo' className='fa-solid fa-taxi' />
            </Link>
          </div>
          <small className='website-rights'>WEDD © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;