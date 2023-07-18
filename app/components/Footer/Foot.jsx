import React from 'react'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'
const Foot = () => {
  return (
    <div className='mt-5 w-full h-auto  text-center bg-primary-100 text-white sm:flex sm:justify-between '>
      <div className='mx-10 w-a text-sm sm:text-lg test-center sm:text-start   mt-[3px]'>©CloudFour Packages <span className='hidden'>ALL RIGHTS RESERVED</span></div>
      <div className='flex flex-row gap-4 mt-[3px] sm:justify-normal justify-center'>
        <Link href={'https://www.facebook.com/profile.php?id=100094634150621&mibextid=LQQJ4d'} target='_blank'><FaFacebookF size={25} className='hover:text-secondary-100 cursor-pointer' /></Link>
        <AiFillYoutube size={25} className='hover:text-secondary-100 cursor-pointer'/>
        <Link href={'https://mail.google.com/mail/?view=cm&to=info@cloudfourpackages.com&su=Your%20Subject&body=Your%20Message'} target='_blank'><BiLogoGmail size={25} className='hover:text-secondary-100 cursor-pointer'/></Link>
        <FaTwitter size={25} className='hover:text-secondary-100 cursor-pointer'/>
        <FaLinkedinIn size={25} className='hover:text-secondary-100 cursor-pointer'/>
      </div>
      <div className='mx-20 mt-[3px] '>Designed By <span className='hover:text-orange-800 transition-all cursor-pointer'></span> </div>
    </div>
  )
}

export default Foot