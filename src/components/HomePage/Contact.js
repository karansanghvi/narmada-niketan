import React from 'react'
import location from '../../assets/images/icons/placeholder.png';
import phone from '../../assets/images/icons/phone.png';
import email from '../../assets/images/icons/mail.png';

function Contact() {
  return (
    <>
        <div className='contact-section ml-2 md:ml-36 mr-2 md:mr-56'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='mt-4 ml-8'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={location} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-xl ml-2'>Narmada Niketan & Vishram Dham:</h1>
                    </div>
                    <p className='text-black justify-evenly ml-10'>
                        Plot No. 2, Sector 8, 
                        <br />
                        CBD Belapur, 
                        <br />
                        Navi Mumbai- 400702
                    </p>
                    <br /> <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={location} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-xl ml-2'>Registered Office:</h1>
                    </div>
                    <p className='text-black justify-evenly ml-10'>
                        5, Rajshree Palace, 
                        <br />
                        Khimji Lane, Ghatkopar (East), 
                        <br />
                        Mumbai- 400077 
                    </p>
                </div>
                <div className='mt-4 mr-8'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={phone} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-xl ml-2'>Landline Number:</h1>
                    </div>
                    <p className='text-black ml-10'>Narmada Niketan: <a href='tel:+02227571555'>+022-27571555</a></p>
                    <p className='text-black ml-10'>Vishram Dham: <a href='tel:+0222757 8754'>+022-27578754</a></p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={phone} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-xl ml-2'>Phone Number:</h1>
                    </div>
                    <p className='text-black ml-10'>President Bhupatray J. Mehta: <a href='tel:+91 9820980590'>+91- 9820980590</a></p>
                    <p className='text-black ml-10'>Vishram Dham: <a href='tel:+919820256689'>+91-9820256689</a></p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={email} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-xl ml-2'>Email Address:</h1>
                    </div>
                    <p className='text-black ml-10'><a href="mailto:ncfoundation@gmail.com">ncfoundation@gmail.com</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
