import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Productcard = ({image , text , buttonText , links , heading}) => {
  return (
    <div className='w-[400px] h-auto p-4 border-[1px] text-center group cursor-pointer shadow-lg'>
        <div className='flex justify-center group-hover:scale-105 transition-all '>
            <Image src={image} width={250} height={250} alt='product_img'/>
        </div>
        <div>
            <h1 className='mb-4 pt-2 text-[#3364af] font-bold'>{heading}</h1>
            <p>{text}</p>
        </div>
        <div>
            <Link href={links}><button className='w-28 h-10 bg-[#98ca3e]  transition-colors group-hover:bg-[#3364af] text-white mt-4 mb-4'>
                {buttonText}
            </button></Link>
        </div>
    </div>
  )
}

export default Productcard