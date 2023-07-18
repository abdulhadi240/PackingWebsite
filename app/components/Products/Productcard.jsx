'use client';
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
const Productcard = ({image , text , buttonText , links , heading ,large}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{opacity: 1, y: 0}}
    transition={{ duration: 1.5, ease: 'easeOut' }} 
    className={`${large?'w-[340px] sm:w-[370px] xl:w-[400px]':'w-[240px] sm:w-[300px] xl:w-[300px]'} h-auto p-4 border-[2px] text-center group cursor-pointer shadow-lg rounded-md`}>
        <div className='flex justify-center group-hover:scale-105 transition-all '>
            <Image src={image} width={250} height={250} alt='product_img'/>
        </div>
        <div>
            <h1 className='mb-4 pt-2 text-secondary-100 font-bold'>{heading}</h1>
            <p>{text}</p>
        </div>
        <div>
            <Link href={links}><button className='w-auto pl-2 pr-2 h-auto bg-primary-100 transition-colors group-hover:bg-secondary-100 text-white mt-4 mb-4'>
                {buttonText}
            </button></Link>
        </div>
    </motion.div>
  )
}

export default Productcard