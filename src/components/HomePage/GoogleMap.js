import React from 'react'

function GoogleMap() {
  return (
    <>
      <div className='md:ml-48 md:mr-56 md:mt-8 mt-6 mb-6'>
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7359215947477!2d73.03811427466417!3d19.031354853373657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24aac790d57%3A0x5c4b353b43b6d487!2sNarmada%20Ben%20Charitable%20Foundation%2C%20Bhanumati%20Mukundrai%20Mehta%20Vishramdham%2C%20Sector%208%2C%20Sector%208A%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1706953119483!5m2!1sen!2sin"
            width="100%" 
            height="500"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="sm:mt-4 " 
        ></iframe>
      </div>
    </>
  )
}

export default GoogleMap
