import React from 'react'
import AboutPresident from '../components/AboutUsPage/AboutPresident'
import Objective from '../components/AboutUsPage/Objective'
import FoundingPrinciples from '../components/AboutUsPage/FoundingPrinciples'
import Footer from '../components/Footer';
import BothBuildings from '../components/AboutUsPage/BothBuildings';

function AboutUs() {
  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          About Us
        </h1>
      </div>
      <Objective/>
      <BothBuildings/>
      <FoundingPrinciples/>
      <br /> <br />
      <AboutPresident/>
      <br />
      <Footer/>
    </>
  )
}

export default AboutUs
