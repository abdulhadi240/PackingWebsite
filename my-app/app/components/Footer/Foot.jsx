import React from 'react'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'
const Foot = () => {
  return (
    <div className='mt-5 w-full h-auto  text-center bg-[#98ca3e] text-white sm:flex sm:justify-between '>
      <div className='mx-10 w-a text-sm sm:text-lg test-center sm:text-start   mt-[3px]'>© Akma Packaging Industries LLC. <span className='hidden'>ALL RIGHTS RESERVED</span></div>
      <div className='flex flex-row gap-4 mt-[3px] sm:justify-normal justify-center'>
        <FaFacebookF size={25} />
        <AiFillYoutube size={25} />
        <BiLogoGmail size={25} />
        <FaTwitter size={25} />
        <FaLinkedinIn size={25} />
      </div>
      <div className='mx-20 mt-[3px] '>Designed By <span className='hover:text-orange-800 transition-all cursor-pointer'>Dotline</span> </div>
    </div>
  )
}

export default Foot