import React from 'react';
import '../../assets/styles/home.css';
import rooms from '../../assets/images/icons/hotel.png';
import garden from '../../assets/images/icons/park.png';
import library from '../../assets/images/icons/library.png';
import activityarea from '../../assets/images/icons/carrom.png';
import gym from '../../assets/images/icons/weightlifter.png';
import badmintoncourt from '../../assets/images/icons/badminton.png';
import temple from '../../assets/images/icons/temple.png';
import hospital from '../../assets/images/icons/clinic.png';
import canteen from '../../assets/images/icons/restaurant.png';
import satsanghall from '../../assets/images/icons/conference.png';
import lift from '../../assets/images/icons/elevator.png';
import morgue from '../../assets/images/icons/morgue.png';

function Facilities() {
  return (
    <>
      <div className='flex justify-center mt-10'>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.0.5)' }}>
          Facilities We Provide
        </h1>
      </div>
      <div className='grid md:grid-cols-6 grid-cols-2 mt-6 justify-center items-center md:ml-48 mr-2 md:mr-56'>
        <div className="facilities-card">
            <img src={rooms} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>90+ Rooms</h1>
        </div>
        <div className='facilities-card'>
            <img src={garden} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Garden</h1>
        </div>
        <div className='facilities-card'>
            <img src={library} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Library</h1>
        </div>
        <div className='facilities-card'>
            <img src={activityarea} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Activity Area</h1>
        </div>
        <div className='facilities-card'>
            <img src={gym} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Gym</h1>
        </div>
        <div className='facilities-card'>
            <img src={badmintoncourt} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Badminton</h1>
        </div>
      </div>
      <div className='grid md:grid-cols-6 grid-cols-2 md:ml-48 md:mr-56 md:mt-8 mt-6 mb-6'>
        <div className="facilities-card">
            <img src={temple} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Temple</h1>
        </div>
        <div className='facilities-card'>
            <img src={hospital} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Hospital</h1>
        </div>
        <div className='facilities-card'>
            <img src={canteen} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Canteen</h1>
        </div>
        <div className='facilities-card'>
            <img src={satsanghall} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Satsang Hall</h1>
        </div>
        <div className='facilities-card'>
            <img src={lift} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Lift</h1>
        </div>
        <div className='facilities-card'>
            <img src={morgue} alt="" className='w-20 h-20 mt-2' />
            <h1 className='text-black font-semibold text-xl'>Morgue</h1>
        </div>
      </div>
    </>
  )
}

export default Facilities;
