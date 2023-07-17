'use client'
import React, { useState , useEffect} from "react";
import Image from "next/image";
import Info from "./Info";
import {  IoMdCall, IoMdLocate } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp} from "react-icons/io";
import {AiOutlineMenu} from 'react-icons/ai'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {easeInOut, motion} from 'framer-motion'

export const Header = () => {
    const [mobilemenu , setMobileMenu] = useState(true);
    const [show, setShow] = useState('translate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [color , setColor] = useState('bg-transparent');
    const [change , setChange] = useState('');

    



    
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobilemenu) {
        setShow('h-10')
        setColor('bg-white')
        
      } else {
        setShow('shadow-sm')
      }
    } else {
      setShow('')
      setColor('bg-white')
    }
    setLastScrollY(window.scrollY);
  }


  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () =>
      window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])
  



    

  return (
    <header
    initial={{y:-100}}
    animate={{y:0}}
     className={` xl:px-24 lg:px-10   w-full h-auto  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} ${color} `}>
      <div className={`flex h-auto w-full lg:px-0    mx-6   mt-1 justify-between `}>
        <div className="">
          <Image src={"/logo.png"} height={100} width={120} alt="logo"/>
        </div>
        <div className="  gap-2 hidden sm:flex sm:gap-2 mt-8 ">
          <div className="hidden sm:block">
          <Info
            Icon={IoMdLocate}
            Text={"Find Us"}
            Label={"Plot No.705,Industrial Area 2"}
          />
          </div>
          <div className="hidden sm:block">
          <Info
            Icon={IoMdCall}
            Text={"Call us"}
            Label={"+ 971 6 748 2024"}
          />
          </div>
          <div className="hidden lg:block">          
            <Info
            Icon={GrMail}
            Text={"Email us"}
            Label={"info@akmaindustries.com"}
          />
          </div>
          <div className="hidden lg:block">
          <Info
            Icon={IoLogoWhatsapp}
            Text={"Product enquiry only"}
            Label={"+971 555 651 604"}
          />
          </div>
        </div>
        {mobilemenu ? (
        <AiOutlineMenu size={20} className="sm:hidden block mt-10" onClick={()=>{setMobileMenu(false)}}/>

        ) : (
            <HiOutlineMenuAlt1 size={20} className="sm:hidden block mt-10" onClick={()=>{setMobileMenu(true)}}/>

        )}
        

        <div>
          <Image src={"/logo-right.png"} height={120} width={120} alt="logo" style={{ width: "120px", height: "auto" }}/>
        </div>
      </div>
      {/* {!mobilemenu && (
            <div className="w-64 h-64 rounded-lg absolute top-10 left-[40%] lg:hidden bg-gray-50 ">
                <MobileMenu/>
            </div>
        )} */}
      
    </header>
  );
};
