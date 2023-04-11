import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import Hero from '../components/HeroSection'
import Footer from '../components/Footer'
import Featured from '../comp/Featured'
import FeaturedServices from '../comp/FeaturedServices'

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <FeaturedServices />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;