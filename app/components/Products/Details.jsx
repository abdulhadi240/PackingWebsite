import React from 'react'
import Image from 'next/image'
import SideMenu from './SideMenu'
const Details = ({heading,image,children , small}) => {
  return (
    <>
    <h1 className='text-3xl text-secondary-100 font-bold mx-10  text-center sm:text-start'>{heading}</h1>
    <div className='flex flex-col lg:flex-row mx-10 lg:justify-between mt-3'>
        <div className='sm:flex sm:flex-row sm:gap-10 flex flex-col gap-6'>
        <div className='flex justify-center sm:block'>
          {small ? (
            <Image src={image} width={200} height={200} alt='image' className='hover:scale-110 transition'/>

          ) : (
            <Image src={image} width={400} height={400} alt='image' className='hover:scale-110 transition'/>

          )}
        </div>
        <div className=' sm:w-[400px] xl:w-[700px] lg:w-[500px] h-auto p-2 transition-all'>
            <p className='text-lg tracking-wide'>
                {children}
				</p>
        </div>
        </div>
        
        <div>
            <SideMenu/>
        </div>
    </div>
    </>
  )
}

export default Details