import React from 'react'
import Image from 'next/image'
const Inside = ({image,body,text}) => {
  return (
    <div>
    <div className='w-full h-32 mt-20 lg:mt-0 relative'>
        <Image src={image} height={400} width={1800} alt='img'/>
        <div className='sm:absolute top-0 md:left-[35%] lg:left-[40%] mt-8 '>
            {text}
        </div>
    </div>
    <div className='lg:mt-64 xl:mt-80 sm:mt-32 md:mt-44 mt-10'>{body}</div>
    </div>
  )
}

export default Inside