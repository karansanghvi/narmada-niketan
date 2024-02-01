import React from 'react';
import '../assets/styles/wave.css';
import '../App.css';
import '../assets/styles/home.css'
import heroimage from '../assets/images/home/home_image_1.jpeg';

function Hero() {
  return (
    <>
      <section className="blue">
        <div className="grid md:grid-cols-2 grid-cols-1 mr-1 mt--2">
          <div>
            <img src={heroimage} alt="" className="hero-image rounded-lg" />
          </div>
          <div className='mb-20'>
            <h1 className='md:text-7xl font-bold text-black text-3xl font-style'>Your Second Home,</h1>
            <h1 className='md:text-62 font-bold text-black text-3xl md:mt-8 font-style'>since <span className='md:text-62 font-bold text-white text-3xl'>1984</span></h1>
          </div>
        </div>
        <div className="curve"></div>
    </section>
    </>
  )
}

export default Hero
