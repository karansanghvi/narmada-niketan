import React, { useEffect } from 'react'
import location from '../../assets/images/icons/placeholder.png';
import phone from '../../assets/images/icons/phone.png';
import email from '../../assets/images/icons/mail.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

  return (
    <>
    <div className='flex justify-center mt-12'>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-black" data-aos="fade-down">
          Contact Us
        </h1>
      </div>
        <div className='contact-section ml-2 md:ml-36 mr-2 md:mr-56'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='mt-1 ml-8' data-aos="fade-right">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={location} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-2xl ml-2'>Location</h1>
                    </div>
                        <p className='text-black ml-10 font-semibold'>Narmada Niketan & Vishram Dham:</p>
                        <p className='text-black justify-evenly ml-10'>
                            Plot No. 2, Sector 8, 
                            <br />
                            CBD Belapur, 
                            <br />
                            Navi Mumbai- 400702
                        </p>
                        <p className='text-black ml-10 font-semibold'>Registered Office:</p>
                        <p className='text-black justify-evenly ml-10'>
                            5, Rajshree Palace, 
                            <br />
                            Khimji Lane, Ghatkopar (East), 
                            <br />
                            Mumbai- 400077 
                        </p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={phone} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-2xl ml-2'>Phone Number</h1>
                    </div>
                    <p className='text-black ml-10 font-semibold'>Landline Number:</p>
                    <p className='text-black ml-10'>Narmada Niketan: <a href='tel:+02227571555'>+022-27571555</a></p>
                    <p className='text-black ml-10'>Vishram Dham: <a href='tel:+0222757 8754'>+022-27578754</a></p>
                    <p className='text-black ml-10 font-semibold'>Mobile Number:</p>
                    <p className='text-black ml-10'>President Bhupatray J. Mehta: <a href='tel:+91 9820980590'>+91- 9820980590</a></p>
                    <p className='text-black ml-10'>Rahul Mehta: <a href='tel:+919820256689'>+91-9820256689</a></p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={email} alt="" className='w-8 h-8' />
                        <h1 className='text-black font-extrabold text-2xl ml-2'>Email Address</h1>
                    </div>
                    <p className='text-black ml-10'><a href="mailto:ncfoundation@gmail.com">ncfoundation@gmail.com</a></p>
                </div>
                <div className='mt-1 mr-8' data-aos="fade-left">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7359215947477!2d73.03811427466417!3d19.031354853373657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24aac790d57%3A0x5c4b353b43b6d487!2sNarmada%20Ben%20Charitable%20Foundation%2C%20Bhanumati%20Mukundrai%20Mehta%20Vishramdham%2C%20Sector%208%2C%20Sector%208A%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1706953119483!5m2!1sen!2sin"
                        width="100%" 
                        height="500"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="sm:mt-4" 
                    ></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
