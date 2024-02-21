import React, { useEffect } from 'react';
import narmadaniketan from '../../assets/images/aboutus/narmada_niketan.jpeg';
import vishramdham from '../../assets/images/aboutus/vishram_dham.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BothBuildings() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
      <div className="grid gap-4 p-8 ml-2 md:ml-40 mr-2 md:mr-72">
        <div className="grid grid-cols-2 gap-4 p-8">
          <div className="align-middle" data-aos="fade-right">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="font-extrabold text-2xl text-black">Narmada Niketan</h1>
              </div>
              <p className="text-black md:block text-justify">
                Our first Home, a building constructed on a plot of 3000 sq m to accommodate 50 mobile senior citizens with boarding facility, a satsang hall for prayers and common gatherings, in the center a temple of Lord Radha Krishna and a clinic for residents.
              </p>
            </div>

            <div className='mt-4'>
              <div className="flex items-center gap-4">
                <h1 className="font-extrabold text-2xl text-black">Smt. Bhanumati Mukundrai Mehta - Vishram Dham</h1>
              </div>
              <p className="text-black md:block text-justify">
                Our second Home, a building constructed on a plot of 6000 sq m to accommodate 150 mobile senior citizens with boarding facility. It also includes a spacious auditorium (Mangal sabhagruh) to accommodate 500 people, and vast halls which are envisioned to be given to other organizations for carrying out related activities in line with the objects of the NCF Trust. It has various sections like Arogya Dham and Home for the Aged for accommodating elderly residents.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
            <img
              src={narmadaniketan}
              alt="flight"
              className="rounded-full w-60 h-auto mb-10"
              data-aos="fade-down"
            />
            <img
              src={vishramdham}
              alt=""
              className="rounded-full w-60 h-auto mt-10"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BothBuildings;
