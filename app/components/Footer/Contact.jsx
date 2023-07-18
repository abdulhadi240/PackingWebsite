"use client";
import React from "react";
import Inputs from "../Inputs";
import { useState } from "react";
export const Contact = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comapny, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const HandleChange = (e) => {
    setText(e.target.value);
  };
  const HandleChange1 = (e) => {
    setName(e.target.value);
  };
  const HandleChange2 = (e) => {
    setPhone(e.target.value);
  };
  const HandleChange3 = (e) => {
    setCompany(e.target.value);
  };
  const HandleChange4 = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-[100%] mt-20 md:mt-0 bg-[#fcfcfc] h-full ">
      <h1 className="text-2xl font-bold mb-8 flex justify-center tracking-wider mt-8 pt-8">
        Place Your Enquiry
      </h1>

      <div className=" flex justify-center ">
        <form
          target="_blank"
          action="https://formspree.io/f/xoqovvzg"
          method="POST"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="Name"
                  value={name}
                  className="text-sm rounded-lg w-72 sm:w-80 lg:w-96 peer h-10 placeholder:pl-2 border-2 value:text-sm"
                  onChange={HandleChange1}
                />
              </div>
              <div className="mt-4 relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="Email"
                  required
                  value={text}
                  className="text-sm rounded-lg peer w-72 sm:w-80 lg:w-96 h-10 placeholder:pl-2  border-2"
                  onChange={HandleChange}
                />
              </div>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  required
                  value={phone}
                  className="text-sm placeholder:pl-2  rounded-lg w-72 sm:w-80 lg:w-96 h-10  border-2"
                  onChange={HandleChange2}
                />
              </div>
              <div className="mt-4 relative">
                <input
                  type="name"
                  placeholder="Company Name"
                  name="Company"
                  value={comapny}
                  className="text-sm placeholder:pl-2  rounded-lg  w-72 sm:w-80 lg:w-96 h-10  border-2"
                  onChange={HandleChange3}
                />
              </div>
            </div>
            <div>
              <label
                
                className="block mb-2 -mt-2 text-xs font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-100 focus:border-secondary-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:secondary-100 dark:focus:border-blue-500">
                <option value="PP Non Woven Bags">PP Non Woven Bags</option>
                <option value="PP Woven Laminated Bags">
                  PP Woven Laminated Bags
                </option>
                <option value="PP Woven Laminated Bags">
                  PP Woven Bags with Liner
                </option>
                <option value="PP Woven Laminated Bags">BOPP Bags</option>
                <option value="PP Woven Laminated Bags">Cotton Bags</option>
                <option value="PP Woven Laminated Bags">Jute Bags</option>
                <option value="PP Woven Laminated Bags">
                  Cement &amp; Block Bottom Bags
                </option>
                <option value="PP Woven Laminated Bags">
                  JUMBO /FIBCs / Big Bags
                </option>
              </select>

              <textarea
                id="message"
                name="message"
                onChange={HandleChange4}
                value={message}
                placeholder="Enter Message"
                className="rounded-lg placeholder:text-sm placeholder:pl-2 mt-4 h-36 w-80"
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-2 w-full mt-4 h-10 rounded-lg bg-secondary-100 hover:bg-blue-800 text-white mb-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
