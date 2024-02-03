import React from 'react';
import '../../assets/styles/aboutus.css';

function FoundingPrinciples() {
  return (
    <>
      <div className='flex justify-center mt-10'>
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-black">
          Our Founding Principles
        </h1>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 mt-6 justify-center items-center  ml-2 md:ml-56 mr-2 md:mr-72'>
        <div className='principle-card'>
            <h1 className='text-black font-extrabold text-2xl'>No Discrimination</h1>
            <p className='text-black justify-evenly'>
              The trust is rooted in thr equality of all humanity and hence admissions are given to all with no exceptions made for faith. 
            </p>
        </div>
        <div className='principle-card'>
            <h1 className='text-black font-extrabold text-2xl'>Trusteeship</h1>
            <p className="text-black justify-evenly">
              The trusteeship fundamentals elaborated by Gandhi Ji inspire us. The founder and trustee have offered their talents and time since the trust's establishment taking no monetary honorarium.
            </p>
        </div>
        <div className='principle-card'>
            <h1 className='text-black font-extrabold text-2xl'>No Profit No Loss</h1>
            <p className='text-black justify-evenly'>
              The trust provides accommodation including meals & cleaning services to around 175 aged currently with the underlying philosophy. 
              The aged who stay here are charged nominally & all the contributions are utilized towards variable expenses incurred by the Trust. 
            </p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 mt-6 justify-center items-center  ml-2 md:ml-56 mr-2 md:mr-72'>
        <div className='principle-card-two'>
            <h1 className='text-black font-extrabold text-2xl'>Zero Space Rental</h1>
            <p className='text-black justify-evenly'>
              The philosophy includes providing free premises for elders. 
              Fixed expenses are covered by society donations. 
              Various schemes receive numerous contributions throughout the year. 
              Donors can't directly offer food to residents; offerings go to the temple and are distributed as prasad.
            </p>
        </div>
        <div className='principle-card-two'>
            <h1 className='text-black font-extrabold text-2xl'>Honoring Non-Financial Capital</h1>
            <p className="text-black justify-evenly">
              We are fortunate to have non-monetary contributes from the society & several individuals as well as organizations contribute non-monetarily through various means by engaging with our elders through yoga classes, music classes, offering physiotherapy and so on.
            </p>
        </div>
      </div>
    </>
  )
}

export default FoundingPrinciples
