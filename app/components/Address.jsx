'use client'
import React from 'react'
import {motion} from 'framer-motion'
const Address = ({text}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
   className='w-auto h-auto text-center flex justify-center border-[1px] pt-2 text-lg'>
        {text}
    </motion.div>
  )
}

export default Address