import React from 'react'
import SubMenuName from './SubMenuName'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const MobileMenu = ({setMobileMenu,border , background , color , hover , margin , active,hide}) => {
  return (
    <div className='h-screen w-screen  mt-24 text-xl '>
    <div className={` flex flex-col overflow-hidden`}>
        <Link  href={'/'}><SubMenuName Text={'HOME'} border={border} hover={border}  TextHover={hover}  submenu={false}/></Link>
        <SubMenuName Text={'PRODUCTS'} border={border} hover={border} TextHover={hover} active={active} submenu={true}/>
        <Link href={'/AboutUs'}><SubMenuName Text={'ABOUT US'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>
        <Link href={'/ContactUs'}><SubMenuName Text={'CONTACT US'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>
    </div>
    <div className='absolute top-5 right-10 transition-all' onClick={()=>{setMobileMenu(true)}}>
    <AiOutlineClose size={24} color='white'/>
    </div>

    <div className='z-50'>
      <BsWhatsapp/>
      <FaFacebook/>
      <MdEmail/>
    </div>
</div>
  )
}

export default MobileMenu