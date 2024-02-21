import React, { useEffect } from 'react';
import area1 from '../../assets/images/home/area1.jpeg';
import area2 from '../../assets/images/home/area2.jpeg';
import area3 from '../../assets/images/home/area3.jpeg';
import area4 from '../../assets/images/home/area4.jpeg';
import area5 from '../../assets/images/home/area5.jpeg';
import area6 from '../../assets/images/home/area6.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurArea() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className='flex justify-center mt-10'>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-black" data-aos="fade-down">
          Our Premises
        </h1>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 md:ml-36 mr-4 ml-4 md:mr-56'>
        <div>
            <img src={area1} alt="" className='rounded-lg shadow-xl' data-aos="fade-right" />
        </div>
        <div>
            <img src={area2} alt="" className='rounded-lg shadow-xl' data-aos="fade-down" />
        </div>
        <div>
            <img src={area3} alt="" className='rounded-lg shadow-xl' data-aos="fade-left" />
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 md:ml-36 mr-4 ml-4 md:mr-56'>
        <div>
            <img src={area4} alt="" className='rounded-lg shadow-xl' data-aos="fade-right" />
        </div>
        <div>
            <img src={area5} alt="" className='rounded-lg shadow-xl' data-aos="fade-up" />
        </div>
        <div>
            <img src={area6} alt="" className='rounded-lg shadow-xl' data-aos="fade-left" />
        </div>
      </div>
      <div className='flex justify-center mt-4 md:mt-10'>
        <a href="/ourarea" className="text-white bg-backgroundColor pt-3 pb-3 pr-8 pl-8 font-semibold text-lg md:text-2xl rounded-full">View More</a>
      </div>
    </>
  );
}

export default OurArea;
