import React from 'react'
import {RiWhatsappFill} from 'react-icons/ri'
import Link from 'next/link'
const Whatsapp = () => {
  return (
    <Link target='_blank' href={'https://api.whatsapp.com/send/?phone=%2B971555651604&text&type=phone_number&app_absent=0'}><div className='fixed top-[90%] w-auto h-auto  bg-white shadow-2xl rounded-full left-0'>
        <RiWhatsappFill size={58} color='green' rounded className='cursor-pointer hover:scale-125 transition-transform '/>
    </div></Link>
  )
}

export default Whatsapp