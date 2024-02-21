import React, { useEffect } from 'react';
import '../../assets/styles/wave.css';
import '../../App.css';
import '../../assets/styles/home.css'
import img1 from '../../assets/images/home/photo1706761289.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className="relative mb-8">
        <img src={img1} alt="" className="blurimage" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          <h1 className="text-one" data-aos="zoom-in">Your Second Home</h1>
          <h1 className="text-two" data-aos="zoom-in">Since 1984</h1>
        </div>
      </div>
    </>
  )
}

export default Hero
