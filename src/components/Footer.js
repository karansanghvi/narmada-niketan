import React from 'react';
import { Link } from 'react-router-dom';
// import location from '../assets/images/icons/placeholder.png';
// import phone from '../../assets/images/icons/phone.png';
// import email from '../../assets/images/icons/mail.png';

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                  Narmadaben Charitable Foundation
                </span>
              </Link>
              {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={location} alt="" style={{ width: '40px', height: '40px', marginLeft: '-2px' }} />
                <p style={{ color: 'black', marginLeft: '10px' }}>
                  Plot No. 2, Sector 8,<br />
                  CBD Belapur,<br />
                  Navi Mumbai- 400702
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={phone} alt="" style={{ width: '40px', height: '40px', marginLeft: '-2px' }} />
                <p style={{ color: 'black', marginLeft: '10px' }}>
                  Plot No. 2, Sector 8,<br />
                  CBD Belapur,<br />
                  Navi Mumbai- 400702
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={email} alt="" style={{ width: '40px', height: '40px', marginLeft: '-2px' }} />
                <p style={{ color: 'black', marginLeft: '10px' }}>
                  Plot No. 2, Sector 8,<br />
                  CBD Belapur,<br />
                  Navi Mumbai- 400702
                </p>
              </div> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-black">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <Link to="/" className="text-black">
                      Home
                    </Link>
                  </li>
                    <li>
                        <Link to="/aboutus" className='text-black'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/ourfacilities" className='text-black'>Our Facilities</Link>
                    </li>
                    <li>
                        <a href="/codeofconduct" className='text-black'>Code Of Conduct</a>
                    </li>
                    <li>
                        <a href="/celebrations" className='text-black'>Celebrations</a>
                    </li>
                    <li>
                        <a href="/tariff" className='text-black'>Tariff</a>
                    </li>
                    <li>
                        <a href="/testimonials" className='text-black'>Testimonials</a>
                    </li>
                    <li>
                        <a href="/donate" className='text-black'>Donate</a>
                    </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-black">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="text-black">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-black">
              © 2024 <Link to="/" className="text-black">Narmadaben Charitable Foundation</Link>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
