import React from 'react'
import Hero from './Hero.jsx'
import HomeSect2 from './HomeSect2.jsx'
import Navbar from '../../components/Navbar.jsx'

const Homepage = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='pr-[5rem] lg:pr-[6rem]'>
        <Hero />
        <HomeSect2 />

      
      </div>
    </div>

  )
}

export default Homepage