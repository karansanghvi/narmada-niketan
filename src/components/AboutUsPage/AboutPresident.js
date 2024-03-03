import React, { useEffect } from 'react';
import nanapic from '../../assets/images/aboutus/bhupatray_mehta_picture.jpg';
import hiteshmehtapic from '../../assets/images/aboutus/hitesh mehta.jpg';
import rahulmehtapic from '../../assets/images/aboutus/rahul mehta.jpg';
import ashoknargardasmehtapic from '../../assets/images/aboutus/ashok nagardas mehta.jpg';
import rrjairajpic from '../../assets/images/aboutus/dr rr jairaj.jpg';
import subashpic from '../../assets/images/aboutus/subhash_pingale.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPresident() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className='flex justify-center mt-8'>
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-black" data-aos="fade-down">
          Our Team
        </h1>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-2 md:mr-72 mt-4 gap-2'>
        <div data-aos="flip-right">
          <img src={hiteshmehtapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-24'>Hitesh Mehta</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
        <div data-aos="flip-right">
          <img src={nanapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-8'>Bhupatray J. Mehta</h1>
          <i className='text-black ml-24 text-xl'>Founder President</i>
        </div>
        <div data-aos="flip-right">
          <img src={rahulmehtapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-3xl font-extrabold ml-24'>Rahul Mehta</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
      </div>

      <br />

      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-2 md:mr-72 mt-4 gap-2'>
        <div data-aos="flip-right">
          <img src={ashoknargardasmehtapic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-2xl font-extrabold ml-22'>Ashok Nagardas Mehta</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
        <div data-aos="flip-right">
          <img src={rrjairajpic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-2xl font-extrabold ml-24'>Dr. RR Jairaj</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
        <div data-aos="flip-right">
          <img src={subashpic} alt="" className="hero-image rounded-lg shadow-xl" />
          <h1 className='text-black text-2xl font-extrabold ml-22'>Subhash G Pingale</h1>
          <i className='text-black ml-36 text-xl'>Trustee</i>
        </div>
      </div>

      <div className='md:ml-56 md:mr-72 ml-4 mr-4'>
        <p className='text-black text-justify'>
          Additionally, our foundation has been enriched by the contributions of ex-trustees, namely <b>Shri. Hasmukhbhai M Mehta</b>, 
          <b>Late Shri. T N Chandran</b>, <b>Late Ms. Nirupamaben Vasavada</b> and <b>Late Shri. Nagindas Mehta</b>. 
          Together, these dedicated individuals have played pivotal roles in guiding the foundation through numerous milestones, 
          transforming our collective dream into a remarkable reality. Their enduring commitment has been a cornerstone of our eventful journey.</p>
      </div>
    </>
  );
}

export default AboutPresident;
