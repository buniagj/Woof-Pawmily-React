import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='text-container'>
        <h1><span>Paw</span>sitively <span>the</span> best.</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
        <Link to={'/signupform'} className='hero-btn1'>GET STARTED</Link>
        </div>
        <div> 
          <p className="login-class">Already a Member?</p>
          <Link to={'/LogIn'} className='hero-btn2'>LOGIN</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;