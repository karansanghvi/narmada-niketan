import React from 'react'
import Footer from '../components/Footer'

function Donate() {
  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          Want To Help Us?
        </h1>
      </div>

      <div className='ml-2 md:ml-56 mr-2 md:mr-72 mt-4'>
        <p className='text-black text-justify'>
          Right from the inception of Narmada Charitable Foundation (NCF), numerous donors have showered us with their generosity. The donations have been in the form of money as well as volunteering.
          Several organizations also offer their contribution in the form of workshops, music (orchestra, karaoke) physiotherapy sessions etc. Without this support, we are certain that NCF would not have seen the light of this day.
        </p>
        <p className='text-black font-extrabold text-center mt-2 text-2xl'>
          We accept monetary contributions in any denomination.
        </p>
        <p className='text-black mt-2'>
          The utilization of the donations will be towards the following:
        </p>
        <ol type="1" className='text-black ml-3' style={{ listStyleType: 'decimal' }}>
          <li className='text-black font-bold'>
            The maintenance of the premises:
          </li>
          <p className='text-black'>
            The campus being over 4 decades old faces constant wear and tear which need to be attended.
          </p>
          <li className='text-black font-bold'>
            Sustainable Endeavours:
          </li>
          <p className='text-black'>
            Currently the Trust has solar power generation capacity in excess of 120kWh. A bulk of the power consumed at the Homes is generated through sustainable means. The Trust also intends to install waste (gray/black) water treatment plant and rain water harvesting to ensure zero waste and sustainability. 
          </p>
          <li className='text-black font-bold'>
            Skill-building:
          </li>
          <p className='text-black text-justify'>
            We recognize that as India’s population ages, skills need to be developed for taking care of this geriatric population. We are in discussions with organizations such as TISS to run a skill building program for geriatric care within our premises. Graduates of this program will be able to take care of elderly people and will be employable as aayaas, wardboys. Your contributions will help us subsidize the course fees for the needy students.
          </p>
        </ol>

        <div className='mt-4'>
          <p className='text-black font-bold'>There are several ways in which you could contribute to this cause. Some are listed below:</p>
          <ol type="1" className='text-black ml-3' style={{ listStyleType: 'decimal' }}>
            <li>
              We have a plan to increase the built-up area of the homes to a total of 90,000 sq ft. For this, we are in constant needs of funds. This donation is accepted for:
            </li>
            <div>
              <b>Plan 1: </b>
              <p className='text-black'>
                Various schemes for naming a particular section of our Homes ranging from Rs 25 lacs to Rs 5 lacs.
              </p>
            </div>
            <div>
              <b>Plan 2: </b>
              <p className='text-black'>
                Fixing a name plate outside the rooms - Rs 150,000.
              </p>
            </div>
            <div>
              <b>Plan 3: </b>
              <p className='text-black'>
                A one-time donation of Rs 11,000/- towards equipment required for one elderly person. Donor’s name will be displayed in the donor’s list.
              </p>
            </div>
            <div>
              <b>Plan 4: </b>
              <p className='text-black'>
                Towards Pooja in our temple on a particular day – Rs 2,500.
              </p>
            </div>
            <div>
              <b>Plan 5: </b>
              <p className='text-black'>
                Donating monies towards our equipment requirement from time to time. For e.g. TV, etc depending upon what we require
              </p>
            </div>
            <div>
              <b>Plan 6: </b>
              <p className='text-black'>
                Donations are accepted towards the expenses incurred for the maintenance of existing and planned green areas like lawns.
              </p>
            </div>
            <div>
              <b>Plan 7: </b>
              <p className='text-black'>
                Estimated expenses towards installing statues and chairs at regular intervals would be in the range of Rs 15 lacs.
              </p>
            </div>
            <div>
              <b>Plan 8: </b>
              <p className='text-black'>
                The donors can contribute as per their might. Monetary help as well as any kind of volunteering in any form is always welcome.
              </p>
            </div>
            <ol type="a" className='text-black ml-16' style={{ listStyleType: 'lower-alpha' }}>
              <li>
                50% of donations are allowed as deduction under Section 80G of IT Act
              </li>
              <li>
                Exempted under Gift Tax under Section 5 (1) (v) of Gift Tax Act
              </li>
              <li>
                Donations are not included in the wealth of the donor.
              </li>
            </ol>
          </ol>

          <p className='text-black font-extrabold text-center mt-4 text-2xl'>
            Cheque/DD to be made in the name of "Narmadaben Charitable Foundation"
          </p>

          <p className='text-black font-bold mt-4'>Volunteering:</p>
          <ol type="1" className='text-black ml-3' style={{ listStyleType: 'decimal' }}>
            <li>
              We are always looking for increasing the activities at our Homes for the benefit of our residents. If you would like to conduct any regular activity (yoga/pranayam, singing bhajans, etc.) for our inmates, we welcome you.
            </li>
            <li>
              We look for partner NGOs/Trusts that could run centers (for e.g naturopathy, toy library, etc) promoting related activities from our premises.
            </li>
            <li>
              And finally, we welcome you to come over to the Homes and visit us regularly.
            </li>
          </ol>
        </div>
      </div>

      <br />

      <Footer/>
    </>
  )
}

export default Donate
