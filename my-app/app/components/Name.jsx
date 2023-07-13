'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import SUB from './SUB';
import {AiFillCaretDown} from 'react-icons/ai'
const Name = ({ Text, border, background, hover, TextHover, active, submenu }) => {
  

  const [show, setShow] = useState(false);
  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {submenu ? (
        <div className={`flex justify-between group w-[150px] lg:w-[180px] xl:w-[150px] text-center ${border ? 'border-r-[0px]' : 'border-r-[0px]'}  h-[40px]  pt-2 border-white  font-bold ${hover ? 'hover:bg-[#3364af]' : ''}  ${TextHover ? 'hover:text-[#3364af]' : ''} cursor-pointer transition`}>
        {Text}
          <AiFillCaretDown className='mt-1 ' size={20}/>
        
      </div>
      ) : (
        <div className={` group w-[150px] lg:w-[180px] xl:w-[150px] text-center ${border ? 'border-r-[0px]' : 'border-r-[0px]'}  h-[40px]  pt-2 border-white  font-bold ${hover ? 'hover:bg-[#3364af]' : ''}  ${TextHover ? 'hover:text-[#3364af]' : ''} cursor-pointer transition`}>
        {Text}
        
          
        
      </div>
      )}
      
      <div>
        {show && submenu && (
          <div className='absolute w-56 h-32  z-50 top-44 left-[37%] hidden lg:block'>
            <SUB/>
          </div>
        )}
      </div>
    </div>

  )
}

export default Name