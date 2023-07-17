import Image from 'next/image'
import React from 'react'

const Client = ({image}) => {
  return (
    <div className='h-32 w-44 border-[1px] group shadow-lg transition-all hover:shadow-2xl'>
        <div className='flex justify-center text-center mt-2 transition-all'>
        <Image src={image} height={200} width={200} alt='logo' className='hover:scale-110 transition-all '/>
        </div>
    </div>
  )
}

export default Client