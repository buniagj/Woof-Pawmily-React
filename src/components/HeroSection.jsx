import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='text-container'>
        <h1>Pawsitively the best.</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Link to='/aboutus' className='btn-cta'>
            <Button
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              LEARN MORE
            </Button>
          </Link>
          <Link to='/signup' className='btn-ncta'>
            <Button
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
          </Link>
        </div>
        <div> 
          <p className="login-class">Already a Member?</p>
          <Link to='/login' className='btn-login'>
              <Button
                buttonStyle='btn--primary'
                buttonSize='btn--large'
              >
                LOGIN
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;