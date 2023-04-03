import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import AboutUs from './AboutUs'; 

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
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
    </div>
  );
}

export default HeroSection;
