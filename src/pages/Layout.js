import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/aboutus">About Us</Link>
            </li>
            <li>
                <Link to="/ourfacilities">Our Facilities</Link>
            </li>
            <li>
                <Link to="/codeofconduct">Code Of Conduct</Link>
            </li>
            <li>
                <Link to="/celebrations">Celebrations</Link>
            </li>
            <li>
                <Link to="/tariff">Tariff</Link>
            </li>
            <li>
                <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
                <Link to="/donate">Donate</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
