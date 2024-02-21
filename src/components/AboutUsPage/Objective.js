import React, { useEffect } from 'react';
import img1 from '../../assets/images/aboutus/about_image_1.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Objective() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
       <div className="grid md:grid-cols-2 grid-cols-1 ml-2 md:ml-56 mr-2 md:mr-72 mt-4">
        <div data-aos="fade-right">
          <img src={img1} alt="" className="hero-image rounded-lg shadow-xl " />
        </div>
        <div className="md:mt-1 mt-8"> 
          <div className="mb-8 mr-8" data-aos="fade-left">
            <p className='text-black text-justify'>
            The Narmadaben Charitable Foundation (NCF) is the embodiment of <b>Founder President Bhupatray Mehta's</b> visionary dream. Established on November 13th, 1980, in honor of his grandmother Narmadaben, the NCF Trust operates two Homes for the elderly in CBD Belapur, Navi Mumbai. 
            These Homes distinguish themselves through a No Profit No Loss model, ensuring residents are charged without commercial motives.
            </p>
            <p className='text-black font-extrabold mt-2 text-xl'>Our Reason To Be:</p>
            <p className='text-black text-justify'>
            With medical and urbanization advancements, the senior citizen population has surged. Homes for seniors, established in 1980, offer a secure, companionship-rich environment, catering to unmarried, widowed, or childless individuals, often with children abroad. Affordability is prioritized for those with fixed incomes.
            </p>
            <p className='text-black font-extrabold mt-2 text-xl'>Our Objectives:</p>
            <p className='text-black text-justify'>
                1) To provide an ambiance of hygiene, silence & safety for the residents who stay at our home.
            </p>
            <p className='text-black text-justify'>
                2) To encourage & facilitate the residents to explore activities & hobbies which keep them creatively occupied.
            </p>
            <p className='text-black text-justify'>
                3) To be a hub of activities & services that keep our residents smiling. 
            </p>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Objective
