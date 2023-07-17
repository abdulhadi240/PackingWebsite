import React from 'react'
import Image from 'next/image'
const Details1 = ({ heading, image, children }) => {
    return (
        <>
            <h1 className='text-3xl text-[#3364af] font-bold text-center mt-10 sm:mx-10 sm:text-start'>{heading}</h1>
            <div className='flex flex-col lg:flex-row  lg:justify-between mt-3'>
                <div className='sm:mx-10 flex flex-col gap-6'>
                    <div className={`sm:w-[400px] xl:w-[700px] lg:w-[500px]  p-2 transition-all h-auto`}>
                        <div className='text-lg tracking-wide'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details1