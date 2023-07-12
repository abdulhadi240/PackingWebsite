import React from 'react'
import Name from './Name'
import Link from 'next/link'
const Menu = ({border , background , color , hover , margin , active}) => {
  return (
    <div className={`h-10 py-auto w-full ${background ? 'bg-[#98ca3e]' : ''}  mt-${margin} lg:block hidden`}>
        <div className={`w-full flex justify-between test-center  ${color?`text-white` : 'text-gray-400'}`}>
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