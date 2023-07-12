import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu'
import Inside from '../components/Inside'

const page = () => {

    const body = (
        <div className='sm:-mt-20 mb-6'>
            <div className='flex justify-center'>
            <h1 className='text-3xl font-semibold'>Testimonials</h1>
            </div>
            
            <div className='flex justify-center'>
                <h1 className='font-bold text-orange-500'>Comming Soon !</h1>
            </div>
        </div>
    )

    const text =(
        <div className='bg-[#add774] sm:w-72 sm:h-10 p-auto text-center absolute  text-white font-bold sm:text-2xl tracking-wide sm:opacity-80'>
            <h1 className='mt-2 sm:block hidden' >WHAT OUR CUSTOMERS SAY</h1>
        </div>
    )
  return (
    <div>
        <Header/>
        <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true}/>
        <Inside image={'/abt5.jpg'} body={body} text={text}/>
        <div className=''>
        <Footer show={true}/>
        </div>
    </div>
  )
}

export default page