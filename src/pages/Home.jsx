import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import Hero from '../comp/Hero'
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