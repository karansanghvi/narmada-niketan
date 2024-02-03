import React from 'react';
import nanapic from '../../assets/images/aboutus/bhupatray_mehta_picture.jpg';

function AboutPresident() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={nanapic} alt="" className="hero-image rounded-lg shadow-xl" />
        <h1 className='text-black text-2xl font-extrabold ml-2'>President Bhupatray J. Mehta</h1>
      </div>
    </div>
  );
}

export default AboutPresident;
