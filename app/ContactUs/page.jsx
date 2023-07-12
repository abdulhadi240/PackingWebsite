"use client";
import React, { useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu";
import Inside from "../components/Inside";
import Address from "../components/Address";
import Contact1 from "../components/Contact1";

const page = () => {
  

  const body = (
    <div className="flex flex-col-reverse md:flex-row md:gap-20 mx-20 md:mx-32">
      <div className="h-auto w-80 md:w-auto p-4 flex flex-col gap-4 border-[2px]">
        <h1 className="text-2xl font-bold text-center w-full">Address</h1>
        <Address text={"Akma Packaging Industries LLC."} />
        <Address text={"P.O. Box 20829, Ajman, United Arab Emirates."} />
        <Address text={"+ 971 6 748 2024"} />
        <Address text={"mushfique@akmaindustries.com"} />
        <Address text={"www.akmaindustries.com"} />
      </div>
      
      <Contact1/>
    </div>
  );

  const text = (
    <div className="bg-[#add774] sm:w-72 sm:h-24 p-auto text-center absolute  text-white font-bold sm:text-2xl tracking-wide sm:opacity-80">
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
      <Inside image={"/abt3.jpg"} body={body} text={text} />
      <div className="">
        <Footer show={false}/>
      </div>
    </div>
  );
};

export default page;
