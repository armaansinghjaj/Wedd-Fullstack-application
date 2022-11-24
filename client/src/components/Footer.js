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
            <h2>About</h2>
            <Link id='footer-about-links' to='/About' onClick={ScrollToTop}>How it works</Link>
            <Link id='footer-about-links' to='/Contact' onClick={ScrollToTop} >Contact</Link>
            <Link id='footer-about-links' to='/Ride' onClick={ScrollToTop} >Ride with us</Link>
            <Link id='footer-about-links' to='/Login' onClick={ScrollToTop} >Login</Link>
            <Link id='footer-about-links' to='/Signup' onClick={ScrollToTop} >Sign up</Link>
          </div>
        </div>
        <div  className='footer-link-wrapper'>
          <div id='social-media-links'  className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='/https://www.instagram.com'>Instagram</a>
            <a href='/https://www.facebook.com'>Facebook</a>
            <a href='/https://www.youtube.com'>Youtube</a>
            <a href='/https://twitter.com'>Twitter</a>
            <a href='https://www.linkedin.com/'>linked-In</a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
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
              WeDD
              
            </Link>
          </div>
          <small className='website-rights'>WeDD © 2022</small>
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