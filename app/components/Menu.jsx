import React from 'react'
import Name from './Name'
import Link from 'next/link'
const Menu = ({border , background , color , hover , margin , active,hide}) => {
  return (
    <div className={`h-10 py-auto sm:w-full ${background ? 'bg-[#98ca3e]' : ''}   sm:block ${hide?'hidden' : 'block'}`}>
        <div className={`  lg:ml-0 grid grid-cols-3  text-[10px]  sm:text-base lg:w-full sm:flex sm:justify-evenly    ${color?`text-white` : 'text-gray-400'} overflow-hidden`}>
            <Link  href={'/'}><Name Text={'HOME'} border={border} hover={border}  TextHover={hover} active={active} submenu={false}/></Link>
            <Link href={'/Product/PPWOVEN'}><Name Text={'PRODUCTS'} border={border} hover={border} TextHover={hover} active={active} submenu={true}/></Link>
            <Link href={'/AboutUs'}><Name Text={'ABOUT US'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>
            <Link href={'/ContactUs'}><Name Text={'CONTACT US'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>

        </div>
    </div>
  )
}

export default Menu