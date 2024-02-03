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
      <div className='grid md:grid-cols-5 grid-cols-1 mt-6 justify-center items-center  ml-2 md:ml-56 mr-2 md:mr-72'>
        <div className='principle-card'>
            <h1 className='text-black font-semibold'>No Discrimination</h1>
            <p className='text-black justify-evenly'>
            The Narmadaben Charitable Foundation (NCF) is the embodiment of <b>Founder President Bhupatray Mehta's</b> visionary dream. Established on November 13th, 1980, in honor of his grandmother Narmadaben, the NCF Trust operates two Homes for the elderly in CBD Belapur, Navi Mumbai. 
            These Homes distinguish themselves through a No Profit No Loss model, ensuring residents are charged without commercial motives.
            </p>
        </div>
        <div className='principle-card'>
            <h1 className='text-black'>2</h1>
        </div>
        <div className='principle-card'>
            <h1 className='text-black'>3</h1>
        </div>
        <div className='principle-card'>
            <h1 className='text-black'>4</h1>
        </div>
        <div className='principle-card'>
            <h1 className='text-black'>5</h1>
        </div>
      </div>
    </>
  )
}

export default FoundingPrinciples
