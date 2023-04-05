import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;