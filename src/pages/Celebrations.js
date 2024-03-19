import React, { useEffect } from 'react'
import celebration1 from '../assets/images/celebrations/1.png'
import celebration2 from '../assets/images/celebrations/2.png'
import celebration3 from '../assets/images/celebrations/4.png'
import celebration4 from '../assets/images/celebrations/3.png'
import celebration5 from '../assets/images/celebrations/5.png'
import german1 from '../assets/images/celebrations/DSC05098.JPG'
import german2 from '../assets/images/celebrations/DSC05173.JPG'
import german3 from '../assets/images/celebrations/DSC05217.JPG'
import german4 from '../assets/images/celebrations/DSC05261.JPG'
import german5 from '../assets/images/celebrations/DSC05270.JPG'
import german6 from '../assets/images/celebrations/DSC05350.JPG'
import german7 from '../assets/images/celebrations/DSC05419.JPG'
import german8 from '../assets/images/celebrations/DSC05424.JPG'
import german9 from '../assets/images/celebrations/DSC05475.JPG'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Celebrations() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black" data-aos="fade-down">
          Celebrations At NCF
        </h1>
      </div>

      <h1 className='text-black text-center text-2xl font-bold mt-8'>Germans Visiting NCF</h1>
      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-4 ml-4 md:mr-72 mt-4 gap-4' data-aos="flip-right">
          <div>
            <img src={german1} alt=""  />
          </div>
          <div>
            <img src={german2} alt=""  />
          </div>
          <div>
            <img src={german3} alt=""  />
          </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-4 ml-4 md:mr-72 mt-4 gap-4' data-aos="flip-right">
          <div>
            <img src={german4} alt=""  />
          </div>
          <div>
            <img src={german5} alt=""  />
          </div>
          <div>
            <img src={german6} alt=""  />
          </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-4 ml-4 md:mr-72 mt-4 gap-4' data-aos="flip-right">
          <div>
            <img src={german7} alt=""  />
          </div>
          <div>
            <img src={german8} alt=""  />
          </div>
          <div>
            <img src={german9} alt=""  />
          </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-4 ml-4 md:mr-72 mt-4 gap-4' data-aos="flip-right">
          <div>
            <img src={celebration1} alt=""  />
            <h1 className='text-black text-center text-2xl font-bold'>Metro Ride</h1>
          </div>
          <div>
            <img src={celebration2} alt=""  />
            <h1 className='text-black text-center text-2xl font-bold'>Monteriya Village Picnic</h1>
          </div>
          <div>
            <img src={celebration3} alt=""  />
            <h1 className='text-black text-center text-2xl font-bold'>Ram Mandir Pratishtha</h1>
          </div>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 md:ml-96 mr-4 ml-4 md:mr-96 mt-4 gap-4' data-aos="flip-right">
        <div>
          <img src={celebration4} alt=""  />
          <h1 className='text-black text-center text-2xl font-bold'>Republic Day</h1>
        </div>
        <div>
          <img src={celebration5} alt=""  />
          <h1 className='text-black text-center text-2xl font-bold'>Tulsi Vivah</h1>
        </div>
      </div>

      <br />

      <Footer/>
    </>
  )
}

export default Celebrations
