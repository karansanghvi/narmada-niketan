import React from 'react';
import nanapic from '../../assets/images/aboutus/bhupatray_mehta_picture.jpg';
import hiteshmehtapic from '../../assets/images/aboutus/hitesh mehta.jpg';
import rahulmehtapic from '../../assets/images/aboutus/rahul mehta.jpg';
import ashoknargardasmehtapic from '../../assets/images/aboutus/ashok nagardas mehta.jpg';
import rrjairajpic from '../../assets/images/aboutus/dr rr jairaj.jpg';

function AboutPresident() {
  return (
    <>
      <div className='flex justify-center mt-8'>
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-black">
          Our Team
        </h1>
      </div>
      {/* <div className="grid md:grid-cols-2 grid-cols-1 ml-2 md:ml-56 mr-2 md:mr-72 mt-4">
        <div>
          <img src={nanapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-8'>Bhupatray J. Mehta</h1>
          <i className='text-black ml-24 text-lg'>Founder President</i>
        </div>
        <div className="md:mt-1 mt-8"> 
          <div className="mb-8 mr-8">
            <p className='text-black text-justify'>
              Narmadaben Charitable Foundation is fortified by the steadfast support of esteemed trustees, 
              including <b>Shri. Subhash Pingle</b>, and <b>Shri. Dr. Jairaj</b>. 
              Additionally, our foundation has been enriched by the contributions of ex-trustees, namely <b>Shri. Hasmukhbhai M Mehta</b>, 
              <b>Late Shri. T N Chandran</b>, <b>Late Ms. Nirupamaben Vasavada</b> and <b>Late Shri. Nagindas Mehta</b>. 
              Together, these dedicated individuals have played pivotal roles in guiding the foundation through numerous milestones, 
              transforming our collective dream into a remarkable reality. Their enduring commitment has been a cornerstone of our eventful journey.
            </p>
          </div>
        </div>
      </div> */}
      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-2 md:mr-72 mt-4'>
        <div>
          <img src={hiteshmehtapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-24'>Hitesh Mehta</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
        <div>
          <img src={nanapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-8'>Bhupatray J. Mehta</h1>
          <i className='text-black ml-24 text-xl'>Founder President</i>
        </div>
        <div>
          <img src={rahulmehtapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-24'>Rahul Mehta</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
      </div>

      <br />

      <div className='grid md:grid-cols-2 grid-cols-1 md:ml-96 mr-2 md:mr-72 mt-4'>
        <div>
          <img src={ashoknargardasmehtapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-19'>Ashok Nagardas Mehta</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
        <div>
          <img src={rrjairajpic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-24'>Dr. RR Jairaj</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
      </div>
    </>
  );
}

export default AboutPresident;
