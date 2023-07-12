'use client'
import React, { useState } from "react";
import Image from "next/image";
import Info from "./Info";
import { CiLocationOff, CiLocationOn } from "react-icons/ci";
import { IoCall, IoLogoClosedCaptioning, IoMdCall, IoMdLocate } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp,IoLocationSharp } from "react-icons/io";
import {AiOutlineMenu} from 'react-icons/ai'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import Name from "./Name";
import Menu from "./Menu";

export const Header = () => {
    const [mobilemenu , setMobileMenu] = useState(true);
    

  return (
    <div className="">
      <div className="flex h-10 w-full  px-6 sm:px-14 mt-4 justify-between">
        <div>
          <Image src={"/logo.png"} height={200} width={150} />
        </div>
        <div className="  lg:flex lg:gap-2 hidden mt-8 ">
          <Info
            Icon={IoMdLocate}
            Text={"Find Us"}
            Label={"P.O. Box 20829, Ajman, UAE"}
          />
          <Info
            Icon={IoMdCall}
            Text={"Call us"}
            Label={"+ 971 6 748 2024"}
          />
          <Info
            Icon={GrMail}
            Text={"Email us"}
            Label={"info@akmaindustries.com"}
          />
          <Info
            Icon={IoLogoWhatsapp}
            Text={"Product enquiry only"}
            Label={"+971 555 651 604"}
          />
        </div>
        {mobilemenu ? (
        <AiOutlineMenu size={20} className="lg:hidden block mt-10" onClick={()=>{setMobileMenu(false)}}/>

        ) : (
            <HiOutlineMenuAlt1 size={20} className="lg:hidden block mt-10" onClick={()=>{setMobileMenu(true)}}/>

        )}
        {!mobilemenu && (
            <div className="bg-gray-200 w-44 h-44 border-2 transition delay-300 duration-300">
                <h1>HOME</h1>
                <h1>HOME</h1>
                <h1>HOME</h1>
                <h1>HOME</h1>
                <h1>HOME</h1>
            </div>
        )}

        <div>
          <Image src={"/logo-right.png"} height={200} width={150} />
        </div>
      </div>
      
    </div>
  );
};
