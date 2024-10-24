import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { navLinks } from '../../utils/db'


function NavBar({ handleNavBar, navOpen }) {


  return (
    <div className='flex justify-between fixed top-0 w-full z-[5000] bg-transparent items-center px-[28px] lg:x-[120px] border-b border-white/15 py-6 lg:py-8 text-white'>
      <div className='flex gap-3 items-center lg:gap-5'>
        <img src="/images/spend.png" className='w-6 h-6 lg:w-10 lg:h-10' />
        <p className='font-bold text-lg lg:text-2xl'>Spend.In</p>
      </div>
      <div className={`${navOpen ? "flex gap-5 justify-center items-center  px-5 py-5  flex-col left-0 top-[68px] absolute  w-full " : "hidden"}   lg:gap-10 lg:flex `}>
        {
          navLinks.map((item, id) => (
            <p key={id}>
              {
                item.label === "Company" || item.label === "Products" ? (<span>{item.label} <IoIosArrowDown className='inline-block' /></span>) : (<span>{item.label} </span>)
              }
            </p>
          ))
        }
      </div>
      <div className='lg:flex items-center gap-8 hidden'>
        <p className='text-secondary-200'>Login</p>
        <p className=' rounded-[30px] bg-Primary-500 py-[14px] px-6'>Get Demo</p>
      </div>
      <div onClick={handleNavBar} className='lg:hidden flex'>

        {
          navOpen ? (<MdClose size={30} />) : (<HiMenuAlt4 size={30} />)
        }

      </div>
    </div >
  )
}

export default NavBar