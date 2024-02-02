import React from 'react';
import area1 from '../../assets/images/home/area1.jpeg';
import area2 from '../../assets/images/home/area2.jpeg';
import area3 from '../../assets/images/home/area3.jpeg';
import area4 from '../../assets/images/home/area4.jpeg';
import area5 from '../../assets/images/home/area5.jpeg';
import area6 from '../../assets/images/home/area6.jpeg';

function OurArea() {
  return (
    <>
      <div className='flex justify-center mt-10'>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-black">
          Our Premises
        </h1>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 md:ml-36 mr-4 ml-4 md:mr-56'>
        <div>
            <img src={area1} alt="" className='rounded-lg shadow-xl' />
        </div>
        <div>
            <img src={area2} alt="" className='rounded-lg shadow-xl' />
        </div>
        <div>
            <img src={area3} alt="" className='rounded-lg shadow-xl' />
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 md:ml-36 mr-4 ml-4 md:mr-56'>
        <div>
            <img src={area4} alt="" className='rounded-lg shadow-xl' />
        </div>
        <div>
            <img src={area5} alt="" className='rounded-lg shadow-xl' />
        </div>
        <div>
            <img src={area6} alt="" className='rounded-lg shadow-xl' />
        </div>
      </div>
    </>
  );
}

export default OurArea;
