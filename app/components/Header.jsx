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
import MobileMenu from "./MobileMenu";
import Link from "next/link";

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
    <motion.header
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration:1}}
     className={` xl:px-24 lg:px-10   w-full h-auto  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} ${color} `}>
      <div className={`flex h-24 w-full lg:px-0 mt-1 justify-between `}>
        <Link href={'/'}><div className="-mt-6 cursor-pointer -z-1">
          <Image src={"/L.png"} height={200} width={170} alt="logo"/>
        </div></Link>
        <div className="  gap-2 hidden sm:flex sm:gap-2 mt-8 ">
          <div className="hidden sm:block">
          <Info
            Icon={IoMdLocate}
            Text={"Locate Us"}
            Label={"Plot No.705,Industrial Area 2"}
            src={'https://www.google.com/maps/search/Plot+No.+705,+Industrial+Area+2,+First+Industrial+Street,+Sharjah,+P.O.+Box+35848,+Sharjah,+U.A.E./@25.3152496,55.3944698,17z/data=!3m1!4b1?entry=ttu'}
            
          />
          </div>
          <div className="hidden sm:block">
          <Info
            Icon={IoMdCall}
            Text={"Call us"}
            Label={"+971 555 651 604"}
            src={'/'}
          />
          </div>
          <div className="hidden lg:block">          
            <Info
            Icon={GrMail}
            Text={"Email us"}
            Label={"info@cloudfourpackages.com"}
            src={'https://mail.google.com/mail/?view=cm&to=info@cloudfourpackages.com&su=Your%20Subject&body=Your%20Message'}
          />
          </div>
          <div className="hidden lg:block">
          <Info
            Icon={IoLogoWhatsapp}
            Text={"Whatsapp"}
            Label={"+971 555 651 604"}
            src={'https://api.whatsapp.com/send/?phone=%2B971555651604&text&type=phone_number&app_absent=0'}
          />
          </div>
        </div>
        {mobilemenu ? (
        <AiOutlineMenu size={20} className="sm:hidden block mt-10" onClick={()=>{setMobileMenu(false)}}/>

        ) : (
            <HiOutlineMenuAlt1 size={20} className="sm:hidden block mt-10" onClick={()=>{setMobileMenu(true)}}/>

        )}
        

        <Link href={'/'}><div className="mt-4 cursor-pointer">
          <Image src={"/logo4.png"} height={120} width={120} alt="logo"/>
        </div></Link>
      </div>
      {!mobilemenu && (
            <motion.div initial={{x:-400}}
            animate={{x:0}}
            transition={{delay:0.5}} 
            className="fixed top-0 bg-primary-100 z-50 sm:hidden ">
                <MobileMenu setMobileMenu={setMobileMenu} color={'white'} background={true} border={true} margin={20} hide={true}/>
            </motion.div>
        )}
      
    </motion.header>
  );
};
