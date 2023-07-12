import React from 'react'
import Name from './Name'
import Link from 'next/link'
const Menu = ({border , background , color , hover , margin , active,hide}) => {
  return (
    <div className={`h-10   py-auto sm:w-full ${background ? 'bg-[#98ca3e]' : ''}  mt-${margin} lg:block ${hide?'hidden' : 'block'}`}>
        <div className={`  grid grid-cols-3 text-xs sm:text-base sm:w-full sm:flex sm:justify-between text-center   ${color?`text-white` : 'text-gray-400'} overflow-hidden`}>
            <Link  href={'./'}><Name Text={'HOME'} border={border} hover={border}  TextHover={hover} active={active}/></Link>
            <Link href={'./AboutUs'}><Name Text={'ABOUT US'} border={border} hover={border} TextHover={hover} active={active}/></Link>
            <Link href={'./'}><Name Text={'PORDUCTS'} border={border} hover={border} TextHover={hover} active={active}/></Link>
            <Link href={'./Testimonails'}><Name Text={'TESTIMONAIL'} border={border} hover={border} TextHover={hover} active={active}/></Link>
            <Link href={'./ContactUs'}><Name Text={'CONTACT US'} border={border} hover={border} TextHover={hover} active={active}/></Link>
            <Link href={'./'}><Name Text={'CAREER'} border={border} hover={border} TextHover={hover} active={active}/></Link>

        </div>
    </div>
  )
}

export default Menu