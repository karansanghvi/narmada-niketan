import React from 'react'
import celebration1 from '../assets/images/celebrations/1.png'
import celebration2 from '../assets/images/celebrations/2.png'
import celebration3 from '../assets/images/celebrations/4.png'
import celebration4 from '../assets/images/celebrations/3.png'
import celebration5 from '../assets/images/celebrations/5.png'
import Footer from '../components/Footer'

function Celebrations() {
  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          Festivals Celebrated At NCF
        </h1>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 md:ml-56 mr-2 md:mr-72 mt-4 gap-4'>
          <div>
            <img src={celebration1} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Metro Ride</h1>
          </div>
          <div>
            <img src={celebration2} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Monteriya Village Picnic</h1>
          </div>
          <div>
            <img src={celebration3} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Ram Mandir Pratishtha</h1>
          </div>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 md:ml-96 mr-2 md:mr-96 mt-4 gap-4'>
        <div>
          <img src={celebration4} alt="" />
          <h1 className='text-black text-center text-2xl font-bold'>Republic Day</h1>
        </div>
        <div>
          <img src={celebration5} alt="" />
          <h1 className='text-black text-center text-2xl font-bold'>Tulsi Vivah</h1>
        </div>
      </div>

      <br />

      <Footer/>
    </>
  )
}

export default Celebrations
