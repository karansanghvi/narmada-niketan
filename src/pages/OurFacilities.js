import React from 'react';
import narmada_niketan_building_1 from '../assets/images/facilities/narmada niketan/entrance.jpeg';
import narmada_niketan_building_2 from '../assets/images/facilities/narmada niketan/narmada_niketan_main_building.jpeg';
import narmada_niketan_building_3 from '../assets/images/facilities/narmada niketan/lobby.jpeg';
import temple1 from '../assets/images/facilities/narmada niketan/radha_krishna_temple_2.jpeg';
import temple3 from '../assets/images/facilities/narmada niketan/radha_krishna_temple_3.jpeg';
import canteen1 from '../assets/images/facilities/narmada niketan/narmada_niketan_canteen_1.jpeg';
import canteen2 from '../assets/images/facilities/vishram dham/vishram_dham_canteen_1.jpeg';
import dispensary from '../assets/images/facilities/narmada niketan/disensary.jpeg';
import satsang_hall_1 from '../assets/images/facilities/narmada niketan/satsang_hall_1.jpeg';
import satsang_hall_2 from '../assets/images/facilities/narmada niketan/satsang_hall_2.jpeg';
import basketball_area from '../assets/images/facilities/vishram dham/pic_1_vishram_dham.jpeg';
import main_entrance from '../assets/images/facilities/vishram dham/main_entrance.jpeg';
import building1 from '../assets/images/facilities/vishram dham/building_1.jpeg';
import building2 from '../assets/images/facilities/vishram dham/entrance.jpeg';
import building3 from '../assets/images/facilities/vishram dham/vishram_dham_building_1.jpeg';
import building4 from '../assets/images/facilities/vishram dham/path.jpeg';
import building5 from '../assets/images/facilities/vishram dham/photo1706761289 (8).jpeg';
import building6 from '../assets/images/facilities/vishram dham/photo1706761921 (9).jpeg';
import male_ward from '../assets/images/facilities/vishram dham/male_ward.jpeg';
import female_ward from '../assets/images/facilities/vishram dham/female_ward.jpeg';
import gym from '../assets/images/facilities/vishram dham/gym.jpeg';
import library from '../assets/images/facilities/vishram dham/library.jpeg';
import activity_area from '../assets/images/facilities/vishram dham/activity_area.jpeg';
import shivling from '../assets/images/facilities/vishram dham/shivling_1.jpeg';
import room from '../assets/images/facilities/vishram dham/room.jpeg';
import hanuman_temple from '../assets/images/facilities/vishram dham/hanuman_temple.jpeg';
import sitting_area from '../assets/images/facilities/vishram dham/sitting_area.jpeg';
import top_view_1 from '../assets/images/facilities/top view/top_view_1.jpeg';
import top_view_2 from '../assets/images/facilities/top view/top_view_2.jpeg';
import top_view_3 from '../assets/images/facilities/top view/top_view_3.jpeg';
import Footer from '../components/Footer';

function OurFacilities() {
  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          Facilities
        </h1>
      </div>

      <div className='ml-2 md:ml-56 mr-2 md:mr-72 mt-4'>
        {/* <h1 className='text-black text-2xl font-extrabold'>Narmada Niketan</h1> */}
        <div className='grid md:grid-cols-3 grid-cols-1 mt-4 mb-4 gap-4'>
          <div>
            <img src={narmada_niketan_building_1} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Narmada Niketan Entrance</h1>
          </div>
          <div>
            <img src={narmada_niketan_building_2} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Narmada Niketan Building</h1>
          </div>
          <div>
            <img src={narmada_niketan_building_3} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Narmada Niketan Lobby</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-2'>
          <div>
            <img src={temple1} alt="" />
          </div>
          <div>
            <img src={temple3} alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2'>Radha Krishna Temple At Narmada Niketan</h1>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={canteen1} alt="" />
            <h1 className='text-black text-2xl font-bold text-center mt-2'>Canteen At Narmada Niketan</h1>
          </div>
          <div>
            <img src={canteen2} alt="" />
            <h1 className='text-black text-2xl font-bold text-center mt-2'>Canteen At Vishram Dham</h1>
          </div>
        </div>
        <div>
          
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={satsang_hall_1} alt="" />
          </div>
          <div>
            <img src={satsang_hall_2} alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2'>Satsang Hall At Narmada Niketan</h1>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={basketball_area} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Basketball Area At Vishram Dham</h1>
          </div>
          <div>
            <img src={sitting_area} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Sitting Area</h1>
          </div>
          <div>
            <img src={main_entrance} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Vishram Dham Main Entrance</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={building1} alt="" />
          </div>
          <div>
            <img src={building2} alt="" />
          </div>
          <div>
            <img src={building3} alt="" />
          </div>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-1'>
          <div>
            <img src={building4} alt="" />
          </div>
          <div>
            <img src={building5} alt="" />
          </div>
          <div>
            <img src={building6} alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2'>Vishram Dham</h1>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={male_ward} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Male Ward At Vishram Dham</h1>
          </div>
          <div>
            <img src={dispensary} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Dispensary</h1>
          </div>
          <div>
            <img src={female_ward} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Female Ward At Vishram Dham</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={gym} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Gym</h1>
          </div>
          <div>
            <img src={library} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Library</h1>
          </div>
          <div>
            <img src={activity_area} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Activity Area</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={shivling} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Shivling</h1>
          </div>
          <div>
            <img src={room} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Room</h1>
          </div>
          <div>
            <img src={hanuman_temple} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Hanuman Temple</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div>
            <img src={top_view_1} alt="" />
          </div>
          <div>
            <img src={top_view_2} alt="" />
          </div>
          <div>
            <img src={top_view_3} alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2'>Top View Of Narmadaben Charitable Foundation (NCF)</h1>
        </div>
      </div>
      <br /> <br />
      <Footer/>
    </>
  )
}

export default OurFacilities
