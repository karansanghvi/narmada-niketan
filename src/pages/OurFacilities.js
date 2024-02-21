import React, { useEffect } from 'react';
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
import '../assets/styles/facilities.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurFacilities() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          Facilities
        </h1>
      </div>

      <div className='ml-2 md:ml-56 mr-2 md:mr-72 mt-4'>
        {/* capacity */}
        <h1 className='text-black font-bold'>
          Narmadaben Chairtable Foundation (NCF) provides a variety of facilities which are included in the monthly charges to the residents:
        </h1>
        <div>
          <ul>
            <li className='text-black'>
              <b>1) </b>
              Stay in 225 to 300 sq ft rooms. Each of these rooms includes basic furniture like bed, mattress, cupboard, table, chair and an attached toilet.
            </li>
            <li className='text-black'>
              <b>2) </b>
              Vegetarian meals which includes breakfast, lunch and dinner. Along with this tea/coffee served thrice a day.
            </li>
            <li className='text-black'>
              <b>3) </b>
              Utility charges include water and electricity.
            </li>
            <li className='text-black'>
              <b>4) </b>
              Common facilities like common room, newspapers, magazine subscriptions, etc. to all residents.
            </li>
            <li className='text-black'>
              <b>5) </b>
              Cleaning of rooms, washing of clothes, room service if applicable.
            </li>
            <li className='text-black'>
              <b>6) </b>
              Campus includes a Radha Krishna temple at Narmada Niketan and a Shivaling at Vishram Dham.
            </li>
            <li className='text-black'>
              <b>7) </b>
              The campus also has green areas, a library, meditation room, a saloon, and auditorium and walking track.
            </li>
            <li className='text-black'>
              <b>8) </b>
              As a responsible citizenry we have set up 140KW rooftop with mounted solar panels for generating electricity from sun light. 
            </li>
            <li className='text-black'>
              <b>9) </b>
              All the major Indian festivals are celebrated with the residents. We have appointed two social workers to engage
              with our elderly on a daily basis. Several other initiatives like an Awakin circle is hosted at the premises where the elders participate.
            </li>
          </ul>
        </div>
        <div className='mt-4'>
          <b className='text-black'>Note:</b>
          <p className='text-black'>Cleaning of rooms, washing of clothes, room services is provided at a nominal cost.</p>
          <p className='text-black'>Residents are allowed to bring their white goods (TV, refrigerators, etc) on payment of due charges to the services provider and/or NCF as applicable.</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-4 mb-4 gap-4'>
          <div data-aos="fade-right">
            <img src={narmada_niketan_building_1} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Narmada Niketan Entrance</h1>
          </div>
          <div data-aos="fade-down">
            <img src={narmada_niketan_building_2} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Narmada Niketan Building</h1>
          </div>
          <div  data-aos="fade-left">
            <img src={narmada_niketan_building_3} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Narmada Niketan Lobby</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-2'>
          <div  data-aos="fade-right">
            <img src={temple1} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={temple3} alt=""  />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2'>Radha Krishna Temple At Narmada Niketan</h1>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right" >
            <img src={canteen1} alt="" />
            <h1 className='text-black text-2xl font-bold text-center mt-2'>Canteen At Narmada Niketan</h1>
          </div>
          <div data-aos="fade-left">
            <img src={canteen2} alt=""  />
            <h1 className='text-black text-2xl font-bold text-center mt-2'>Canteen At Vishram Dham</h1>
          </div>
        </div>
        <div>
          
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right">
            <img src={satsang_hall_1} alt=""  />
          </div>
          <div data-aos="fade-left">
            <img src={satsang_hall_2} alt=""  />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2'>Satsang Hall At Narmada Niketan</h1>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right">
            <img src={basketball_area} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Basketball Area At Vishram Dham</h1>
          </div>
          <div data-aos="fade-up">
            <img src={sitting_area} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Sitting Area</h1>
          </div>
          <div data-aos="fade-left">
            <img src={main_entrance} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Vishram Dham Main Entrance</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div data-aos="flip-right">
            <img src={building1} alt="" />
          </div>
          <div data-aos="flip-right">
            <img src={building2} alt="" />
          </div>
          <div data-aos="flip-right">
            <img src={building3} alt="" />
          </div>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-1'>
          <div data-aos="flip-right">
            <img src={building4} alt="" />
          </div>
          <div data-aos="flip-right">
            <img src={building5} alt="" />
          </div>
          <div data-aos="flip-right">
            <img src={building6} alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2' data-aos="fade-up">Vishram Dham</h1>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right">
            <img src={male_ward} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Male Ward At Vishram Dham</h1>
          </div>
          <div data-aos="fade-down">
            <img src={dispensary} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Dispensary</h1>
          </div>
          <div data-aos="fade-left">
            <img src={female_ward} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Female Ward At Vishram Dham</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right">
            <img src={gym} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Gym</h1>
          </div>
          <div data-aos="fade-up">
            <img src={library} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Library</h1>
          </div>
          <div data-aos="fade-left">
            <img src={activity_area} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Activity Area</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right">
            <img src={shivling} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Shivling</h1>
          </div>
          <div data-aos="fade-down">
            <img src={room} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Room</h1>
          </div>
          <div data-aos="fade-left">
            <img src={hanuman_temple} alt="" />
            <h1 className='text-black text-center text-2xl font-bold'>Hanuman Temple</h1>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div data-aos="fade-right">
            <img src={top_view_1} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={top_view_2} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={top_view_3} alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-black text-2xl font-bold text-center mt-2' data-aos="fade-up">Top View Of Narmadaben Charitable Foundation (NCF)</h1>
        </div>
      </div>
      <br /> <br />
      <Footer/>
    </>
  )
}

export default OurFacilities
