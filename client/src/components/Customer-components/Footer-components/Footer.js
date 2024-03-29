import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
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
        {/* PAGE LINKS */}
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link id='footer-about-links' to='/About' onClick={ScrollToTop}>How it works</Link>
            <Link id='footer-about-links' to='/Services' onClick={ScrollToTop} >Contact</Link>
            <Link id='footer-about-links' to='/Ride' onClick={ScrollToTop} >Ride with us</Link>
            <Link id='footer-about-links' to='/Login' onClick={ScrollToTop} >Login</Link>
            <Link id='footer-about-links' to='/Signup' onClick={ScrollToTop} >Sign up</Link>
          </div>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div  className='footer-link-wrapper'>
          <div id='social-media-links'  className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='http://www.instagram.com' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='http://www.facebook.com' target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href='http://www.youtube.com' target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href='http://twitter.com' target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href='http://www.linkedin.com' target="_blank" rel="noopener noreferrer">Linked-In</a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact us</h2>
            <Link id='footer-address' to='/About' onClick={ScrollToTop}>Address Placeholder</Link>
            <Link id='footer-phone' to='/About' onClick={ScrollToTop}>(403)-201-8223</Link>
            <Link id='footer-email' to='/Ride' onClick={ScrollToTop} >WeDD@gmail.com</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to={{pathname: "/Home" }} target="_blank" className='social-logo' onClick={ScrollToTop}>
              WeDD
              
            </Link>
          </div>
          <small className='website-rights'>WeDD © 2022</small>

          {/* SOCIAL MEDIA ICONS */}
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
               href='http://www.facebook.com' target="_blank" rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='http://www.instagram.com' target="_blank" rel="noopener noreferrer"

              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='http://www.youtube.com' target="_blank" rel="noopener noreferrer"

              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href='http://twitter.com' target="_blank" rel="noopener noreferrer"

              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link twitter'
              href='http://www.linkedin.com' target="_blank" rel="noopener noreferrer"

              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;