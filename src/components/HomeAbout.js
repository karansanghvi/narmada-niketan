import React from 'react';
import heroimage from '../assets/images/home/home_image_1.jpeg';
import slogan from '../assets/images/home/slogan.jpg';
import '../assets/styles/home.css';

function HomeAbout() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 ml-36 mr-56">
        <div>
          <img src={heroimage} alt="" className="hero-image rounded-lg" />
        </div>
        <div>
          <div className="mb-8">
            <p className='text-black justify-evenly'>
              In the hustle of life—navigating peer pressure, family, and career—we often forget to reflect on who we truly are. As retirement looms, many fall into the trap of believing life loses its essence.
            </p>
            <p className='text-black justify-evenly'>
              Yet, this phase is an opportunity for renewal. Freed from the pressures, we can discover our strengths, contribute to a better world, and reignite the joy of learning. Vanaprastha, the autumn of life, is a chance for a personal embrace.
            </p>
            <p className="text-black justify-evenly">
              NCF is here to guide you through this transition, supporting your journey to a fulfilling post-retirement life. It's not a waiting room; it's a gateway to new beginnings.
            </p>
          </div>
          <img src={slogan} alt="" />
        </div>
      </div>
    </>
  )
}

export default HomeAbout
