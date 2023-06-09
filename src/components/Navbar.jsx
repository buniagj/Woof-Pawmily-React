import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [buttonText, setButtonText] = useState('SIGN UP');
  const [button, setButton] = useState(true);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    if (window.innerWidth > 960) {
      setButton(true);
    }
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/profile') {
      setButtonText('LOG OUT');
    } else {
      setButtonText('SIGN UP');
    }
  }, [location]);

  return (
    <>
      <nav className='navbar-class'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='' />
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/signupform'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                {buttonText}
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle='btn--outline'
              style={{ borderColor: '#3D55C1', color: '#3D55C1', backgroundColor: '#F9C784' }}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
