'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ABout = () => {
    return (
        <div>

            <div className='mx-14'>
                <h1 className='text-[24px] text-secondary-100 font-bold xl:pt-10'>ABOUT US</h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='mt-2'>We are known for providing the best quality in the market of PP WOVEN BAG AND BOPP LAMINATION BAGS.
                    We specialize in serving diverse business sectors both domestically and internationally. Our esteemed
                    clientele consists of major manufacturers operating in the global market, specializing in the production of food grains, spices,
                    sugar, and cement. Leveraging our advanced technology and expertise, we consistently meet and exceed our customers' expectations by
                    delivering their requirements promptly and ensuring exceptional quality. Our streamlined processes enable us to achieve minimal
                    delivery lead times while maintaining unwavering commitment to meeting the highest standards of quality assurance.
                    <br className='' /><br /><span className='text-[17px] text-primary-100 font-bold'>Our Motto itself is: "Protecting and Presenting Perfection."</span></motion.p>


                <h1 className='text-[24px] text-secondary-100 mt-10 font-bold'>MISSION</h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='mt-2'>Aiming to produce high quality of PP WOVEN BAGS AND BOPP LAMINATION BAGS with highly trained efficient team of technologists.</motion.p>


                <h1 className='text-[24px] text-secondary-100 mt-10 font-bold'>VISION</h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='mt-2'>Our vision is to establish ourselves as pioneers and industry leaders in the GCC region, serving as the ultimate one-stop solution for all packaging needs, specifically in the PP woven/non-woven bags and sacks market. With a forward-looking approach, we aim to anticipate and cater to future market demands by continuously improving and embracing the latest trends and technologies. By staying ahead of the game, we strive to maintain our position at the forefront of the industry.</motion.p>

                <h1 className='text-[24px] text-secondary-100 mt-10 font-bold'>No quality compromise.</h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='mt-2'>
                    We maintain a rigorous quality control process through our fully-equipped in-house laboratory, ensuring consistent quality checks at all times. Our commitment to quality is unwavering as we strive to exceed industry standards. Additionally, we actively seek out export opportunities across the globe, aiming to expand our reach and establish strong partnerships in international markets. By exploring and capitalizing on these opportunities, we aim to further grow and enhance our global presence.</motion.p>


                <h1 className='text-[24px] text-secondary-100 mt-10 font-bold'>CORE VALUES</h1>
                <motion.ul
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <li> Focus on new and innovative business ideas</li>
                    <li> Practice high ethical standards</li>
                    <li> Respect and protect the environment</li>
                    <li>Meet the changing needs and desires of clients and consumers</li>
                </motion.ul>

                <h1 className='text-[24px] mt-10 text-secondary-100 font-bold '>MANUFACTURING AND QUALITY ASSURANCE</h1>
                <motion.p initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='mt-2'>CloudFour PACKAGES guarantees the highest quality of PP woven bags and BOPP lamination bags, utilizing state-of-the-art machinery and employing cutting-edge in-house quality techniques. Our stringent quality control measures encompass every step of the production process, with close monitoring conducted in our dedicated quality control laboratory. Each bag undergoes a thorough quality check and analysis performed by our team of expert technologists. By adhering to these rigorous standards, we ensure that only the finest products reach our valued customers.</motion.p>

            </div>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='mx-16  my-10 text-white text-lg font-bold'>"We are leading the Way in Polypropylene Woven Sacks, Cotton, Jute, and Non-Woven Bags: Delivering Unmatched Packaging Solutions in the Middle East"</motion.h1>

            </div>

        </div>
    )
}

export default ABout