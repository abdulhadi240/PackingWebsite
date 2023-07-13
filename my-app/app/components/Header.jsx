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
import MobileMenu from "./MobileMenu";

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
        

        <div>
          <Image src={"/logo-right.png"} height={200} width={150} />
        </div>
      </div>
      {/* {!mobilemenu && (
            <div className="w-64 h-64 rounded-lg absolute top-10 left-[40%] lg:hidden bg-gray-50 ">
                <MobileMenu/>
            </div>
        )} */}
      
    </div>
  );
};
