import React from 'react'
import '../assets/styles/tariff.css'

function Tariff() {
  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          Tariff
        </h1>
      </div>
      <div>
        <table>
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
          </tr>
          <tr>
              <td>Anom</td>
              <td>19</td>
              <td>Male</td>
          </tr>
          <tr>
              <td>Megha</td>
              <td>19</td>
              <td>Female</td>
          </tr>
          <tr>
              <td>Subham</td>
              <td>25</td>
              <td>Male</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Tariff
