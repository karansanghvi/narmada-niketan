import React from 'react';
import nanapic from '../../assets/images/aboutus/bhupatray_mehta_picture.jpg';

function AboutPresident() {
  return (
    <>
      <div className='flex justify-center mt-8'>
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-black">
          Our Team
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 ml-2 md:ml-56 mr-2 md:mr-72 mt-4">
        <div>
          <img src={nanapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-8'>Bhupatray J. Mehta</h1>
          <i className='text-black ml-24 text-lg'>Founder President</i>
        </div>
        <div className="md:mt-1 mt-8"> 
          <div className="mb-8 mr-8">
            <p className='text-black text-justify'>
              Narmadaben Charitable Foundation is fortified by the steadfast support of esteemed trustees, 
              including <b>Shri. Subhash Pingle</b>, <b>Shri. Nagindas Mehta</b>, and <b>Shri. Dr. Jairaj</b>. 
              Additionally, our foundation has been enriched by the contributions of ex-trustees, namely <b>Shri. Hasmukhbhai M Mehta</b>, 
              <b>Late Shri. T N Chandran</b>, and <b>Late Ms. Nirupamaben Vasavada</b>. 
              Together, these dedicated individuals have played pivotal roles in guiding the foundation through numerous milestones, 
              transforming our collective dream into a remarkable reality. Their enduring commitment has been a cornerstone of our eventful journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPresident;
