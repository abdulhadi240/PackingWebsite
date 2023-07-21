'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Images = () => {
    return (
        <motion.div 
        initial={{left:-600 , rotate:-90}}
        whileInView={{left:0 , rotate:0}}
        transition={{duration:1}}>
            
            <Image src={'/success.jpg'} height={700} width={900} alt='image'/>
        </motion.div>
    )
}

export default Images