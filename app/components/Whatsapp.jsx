import React from 'react'
import {RiWhatsappFill} from 'react-icons/ri'
import Link from 'next/link'
const Whatsapp = () => {
  return (
    <Link target='_blank' href={'https://api.whatsapp.com/send/?phone=%2B971552302058&text&type=phone_number&app_absent=0'}><div className='hidden sm:block fixed sm:top-[78%] lg:top-[70%] xl:top-[75%]  w-auto h-auto  bg-white shadow-2xl rounded-full right-6'>
        <RiWhatsappFill size={60} color='green'  className='cursor-pointer rounded-full hover:scale-125 transition-transform '/>
    </div></Link>
  )
}

export default Whatsapp