"use client";
import React, { useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu";
import Inside from "../components/Inside";
import Address from "../components/Address";
import Contact1 from "../components/Contact1";
import {RiWhatsappFill} from 'react-icons/ri'
import {BsFacebook} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Link from "next/link";

const page = () => {
  

  const body = (
    <>
    <div className="flex justify-center sm:mt-10">
    <div className="flex flex-col-reverse lg:flex-row md:gap-20 mx-20 md:mx-32">
      <div className="h-auto w-auto md:w-auto p-4 flex flex-col gap-4 border-[2px]">
        <h1 className="text-2xl font-bold text-center w-full">Address</h1>
        <Address text={"CloudFour Packages"} />
        <Address text={"Plot No. 705, Industrial Area 2, First Industrial Street, P.O.Box 35848 , Sharjah, U.A.E."} />
        <Address text={"+ 971 55 965 8218"} />
        <Address text={"info@cloudfourpackages.com"} />
        <Address text={"sales@cloudfourpackages.com"} />
        <Address text={"www.cloudfourpackages.com"} />
      </div>
      <Contact1/>
    </div>
    </div>
    <div className="sm:mt-10">
    <h1 className="text-2xl font-bold text-primary-100 flex justify-center text-center">OR</h1>
    <div className="flex justify-center ">
    <hr className="w-80  text-black border-black"/>
    </div>
    <div className="flex justify-center gap-3 mt-4 ">
      <Link href={'https://api.whatsapp.com/send/?phone=%2B971555651604&text&type=phone_number&app_absent=0'} target="_blank"><RiWhatsappFill size={44}  color="green" className="border-[1px] shadow-lg p-2 hover:scale-110 cursor-pointer"/></Link>
      <Link href={'https://www.facebook.com/profile.php?id=100094634150621&mibextid=LQQJ4d'} target='_blank'><BsFacebook  size={44}  color="blue" className="border-[1px] shadow-lg p-2 hover:scale-110 cursor-pointer"/></Link>
      <Link href={'https://mail.google.com/mail/?view=cm&to=info@cloudfourpackages.com&su=Your%20Subject&body=Your%20Message'} target="_blank"><MdEmail size={44}  color="maroon" className="border-[1px] shadow-lg p-2 hover:scale-110 cursor-pointer"/></Link>
    </div>
  </div>
  </>
  );

  const text = (
    <div className="bg-primary-100 sm:w-72 sm:h-24 p-auto text-center absolute  text-white font-bold sm:text-2xl tracking-wide sm:opacity-80">
      <h1 className="mt-2 sm:block hidden">CONTACT US</h1>
    </div>
  );
  return (
    <div>
      <Header />
      <Menu
        color={"white"}
        background={true}
        border={true}
        margin={20}
        active={true}
        hide={true}
      />
      <Inside priority={true} image={"/abt3.jpg"} body={body} text={text} />
      <div className="">
        <Footer show={false}/>
      </div>
    </div>
  );
};

export default page;
