import React from 'react';
// import './Footer.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Woof Pawmily newsletter to receive our best dog care.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button className='subscribe-btn'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/aboutus'>About</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Products</h2>
            <Link to='/products'>Products</Link>
            <Link to='/pawpedia'>Pawpedia</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/woofpawmily/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} className='social-icon' />
              @WoofPawmily
            </a>
            <a href='https://www.facebook.com/WoofPawmily/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
              <FontAwesomeIcon icon={faFacebookF} className='social-icon' />
              Woof Pawmily
            </a>
            <a href='https://www.youtube.com/channel/UCMlyqckkdndYcbRwkTrGJnA' target='_blank' rel='noopener noreferrer' aria-label='Youtube'>
              <FontAwesomeIcon icon={faYoutube} className='social-icon' />
              Woof Pawmily
            </a>
            <a href='https://twitter.com/WoofPawmily' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
              <FontAwesomeIcon icon={faTwitter} className='social-icon' />
              @WoofPawmily
            </a>
          </div>
        </div>
      </div>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} alt='Logo' />
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>© 2023 Woof Pawmily . All Rights Reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
