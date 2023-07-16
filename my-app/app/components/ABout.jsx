'use client'

import React from 'react'
import {motion} from 'framer-motion'

const ABout = () => {
    return (
        <div>

            <div className='mx-14'>
                <h1 className='text-[24px] text-[#3364af] font-bold xl:pt-10'>ABOUT US</h1>
                <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                 className='mt-2'>In a span of nearly two decades the company has acquired large market share in Middle East and Africa by adopting honest business policies and following best industry practices for maintaining quality, cost and delivery.
                    <br className='' /><br />We cover various segments of business locally and internationally. Our reputed customers are one of the largest manufacturer companies of food grains, spices, sugar and cement in UAE, G.C.C. Countries and international market. With the advanced technology and expertise we managed to meet various customers' requirements and needs with minimum delivery lead times and assured quality.
                    <br className='' /><br /><span className='text-[17px] text-[#98ca3e] font-bold'>Our Motto itself is: "Where Deeds Follow Words."</span></motion.p>


                <h1 className='text-[24px] text-[#3364af] mt-10 font-bold'>MISSION</h1>
                <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='mt-2'>To provide optimum and cost effective solutions for the packing needs of customers, with flexibility to adapt to stringent delivery schedules while keeping the quality consistent.</motion.p>


                <h1 className='text-[24px] text-[#3364af] mt-10 font-bold'>VISION</h1>
                <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                 className='mt-2'>Our Vision is to be pioneers and industry leaders in GCC region that becomes one stop solution for all types of packaging requirements from PP woven/non woven bags and sacks market. With an eye on future to anticipate future needs and demands of the market to we keep improving and adapting to latest trends and technology to stay on top of the game.</motion.p>


                <h1 className='text-[24px] text-[#3364af] mt-10 font-bold'>CORE VALUES</h1>
                <motion.ul 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <li> Focus on new and innovative business ideas</li>
                    <li> Practice high ethical standards</li>
                    <li> Respect and protect the environment</li>
                    <li>Meet the changing needs and desires of clients and consumers</li>
                </motion.ul>

                <h1 className='text-[24px] mt-10 text-[#3364af] font-bold '>GOAL</h1>
                <motion.p initial={{ opacity: 0, y: 50 }}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='mt-2'>We are in the process of expansion & diversification and we are positive that we will achieve our targeted mission by starting 2019.</motion.p>

            </div>

            <div className='lg:h-36 h-auto w-full bg-[#068ea8] text-center flex justify-center mt-10'>
                <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{opacity:1 , y:0}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                 className='mx-16  my-10 text-white text-lg font-bold'>WE ARE LEADING MANUFACTURERS IN THE REGION OF POLYPROPYLENE WOVEN SACKS,ONLY MANUFACTURERS OF COTTON, JUTE, AND PIONEERS IN NON-WOVEN BAGS IN THE MIDDLE EAST.</motion.h1>

            </div>

        </div>
    )
}

export default ABout