import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <>
      <footer className="footer-background">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-black">
                  Narmadaben Charitable Foundation
                </span>
              </Link>
              <div className='mt-4 ml-8'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="ri-map-pin-fill text-black"></i>
                        <p className='text-black ml-6 font-semibold'>Narmada Niketan & Vishram Dham:</p>
                    </div>
                        <p className='text-black justify-evenly ml-10'>
                            Plot No. 2, Sector 8, 
                            CBD Belapur, 
                            Navi Mumbai- 400702
                        </p>
                        <p className='text-black ml-10 font-semibold'>Registered Office:</p>
                        <p className='text-black justify-evenly ml-10'>
                            5, Rajshree Palace, 
                            Khimji Lane, Ghatkopar (East), 
                            Mumbai- 400077 
                        </p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="ri-phone-fill text-black"></i>
                        <p className='text-black ml-6 font-semibold'>Landline Number:</p>
                    </div>
                    <p className='text-black ml-10'>Narmada Niketan: <a href='tel:+02227571555'>+022-27571555</a> | Vishram Dham: <a href='tel:+0222757 8754'>+022-27578754</a></p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <i className="ri-phone-fill text-black"></i> */}
                        <p className='text-black ml-10 font-semibold'>Phone Number:</p>
                    </div>
                    <p className='text-black ml-10'>President Bhupatray J. Mehta: <a href='tel:+91 9820980590'>+91- 9820980590</a> | Rahul Mehta: <a href='tel:+919820256689'>+91-9820256689</a></p>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="ri-mail-fill text-black"></i>
                        <p className='text-black ml-6 font-semibold'>Email Address:</p>
                    </div>
                    <p className='text-black ml-10'><a href="mailto:ncfoundation@gmail.com">ncfoundation@gmail.com</a></p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-lg font-semibold uppercase text-black">Resources</h2>
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
                        <Link to="/ourarea" className='text-black'>Facilities</Link>
                    </li>
                    <li>
                        <Link to="/celebrations" className='text-black'>Celebrations</Link>
                    </li>
                    <li>
                        <Link to="/tariff" className='text-black'>Tariff</Link>
                    </li>
                    <li>
                        <Link to="/donate" className='text-black'>Donate</Link>
                    </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold uppercase text-black">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <li>
                        <Link to="/codeofconduct" className='text-black'>Code Of Conduct</Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="sm:text-center text-black text-lg font-bold">
              © 2024 <Link to="/" className="text-black text-lg font-bold">Narmadaben Charitable Foundation</Link>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
