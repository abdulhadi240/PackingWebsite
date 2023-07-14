import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Productcard = ({image , text , buttonText , links , heading ,large}) => {
  return (
    <div className={`${large?'w-[340px] sm:w-[370px] xl:w-[400px]':'w-[240px] sm:w-[300px] xl:w-[300px]'} h-auto p-4 border-[2px] text-center group cursor-pointer shadow-lg rounded-md`}>
        <div className='flex justify-center group-hover:scale-105 transition-all '>
            <Image src={image} width={250} height={250} alt='product_img'/>
        </div>
        <div>
            <h1 className='mb-4 pt-2 text-[#3364af] font-bold'>{heading}</h1>
            <p>{text}</p>
        </div>
        <div>
            <Link href={links}><button className='w-auto pl-2 pr-2 h-auto bg-[#98ca3e]  transition-colors group-hover:bg-[#3364af] text-white mt-4 mb-4'>
                {buttonText}
            </button></Link>
        </div>
    </div>
  )
}

export default Productcard