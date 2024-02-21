import React, { useEffect } from 'react';
import heroimage from '../../assets/images/home/home_image_1.jpeg';
import slogan from '../../assets/images/home/slogan.jpg';
import '../../assets/styles/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeAbout() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 ml-2 md:ml-36 mr-2 md:mr-56">
        <div data-aos="fade-right">
          <img src={heroimage} alt="" className="hero-image rounded-lg shadow-xl " />
        </div>
        <div className="md:mt-0 mt-8"> 
          <div className="mb-8" data-aos="fade-left">
            <p className='text-black text-justify'>
              In the hustle of life—navigating peer pressure, family, and career—we often forget to reflect on who we truly are. As retirement looms, many fall into the trap of believing life loses its essence.
            </p>
            <p className='text-black text-justify'>
              Yet, this phase is an opportunity for renewal. Freed from the pressures, we can discover our strengths, contribute to a better world, and reignite the joy of learning. Vanaprastha, the autumn of life, is a chance for a personal embrace.
            </p>
            <p className="text-black text-justify">
              NCF is here to guide you through this transition, supporting your journey to a fulfilling post-retirement life. It's not a waiting room; it's a gateway to new beginnings.
            </p>
          </div>
          <img src={slogan} alt="" className="block mx-auto mb-4 max-w-full" data-aos="fade-up" /> 
          <div className='flex justify-center mt-4 md:mt-10'>
            <a href="/aboutus" className="text-white bg-backgroundColor pt-3 pb-3 pr-8 pl-8 font-semibold text-lg md:text-2xl rounded-full" data-aos="fade-up">Read More</a>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default HomeAbout;
