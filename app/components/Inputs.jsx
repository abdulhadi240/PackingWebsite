'use client'
import React, { useState } from 'react'

const Inputs = () => {

    const [text,setText] =useState('');

    const HandleChange = (e) =>{
        setText(e.target.value)
    }

  return (
    <div className='mt-4 relative'>
        <input type="text" value={text} className='text-sm peer h-8 peer-focus:transition peer-focus:duration-300 border-2' onChange={HandleChange}/>
        <label className='absolute mt-[5px] left-4 text-sm  peer-focus:text-[7px] peer-focus:-top-2 peer-focus:left-2 peer-focus:transition peer-focus:duration-300'>Email Address</label>
        
    </div>
  )
}

export default Inputs