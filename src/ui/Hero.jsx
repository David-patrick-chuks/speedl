import React, { useState } from 'react';
import NavBar from './fixed/NavBar';

function Hero() {


  const [navOpen, setNavopen] = useState(false)
  function handleNavBar() {
    // setNavopen(prev => !prev)
    setNavopen(!navOpen)
    console.log("user click the menu icon", navOpen);

  }

  return (
    <div className='bg-secondary-500 h-screen w-full'>
      <div className='z-[5000]'>
        <NavBar handleNavBar={handleNavBar} navOpen={navOpen} />
      </div>
      <div className='absolute flex right-0 z-10 top-0'><img src="/images/c1.png" className='w-[250px] lg:w-full' /></div>
    </div>
  )
}

export default Hero