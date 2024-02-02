import React from 'react';
import Hero from '../components/HomePage/Hero';
import HomeAbout from '../components/HomePage/HomeAbout';
import Facilities from '../components/HomePage/Facilities';
import OurArea from '../components/HomePage/OurArea';
import Contact from '../components/HomePage/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Hero/>
      <HomeAbout/>
      <Facilities/>
      <OurArea/>
      <Contact/>
      <br /> <br />
      <Footer/>
    </>
  )
}

export default Home
