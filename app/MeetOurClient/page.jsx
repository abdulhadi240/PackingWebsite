import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu'
import Inside from '../components/Inside'
import Client from '../components/Client'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <div className='relative mt-20 lg:mt-0'>
                <Image src={'/our-clients.jpg'} height={400} width={1600} alt='banner'/>
            </div>
            <div className='flex justify-center text-2xl font-bold underline mt-10'>
                <h1>OUR CLIENTS</h1>
            </div>
            <div className='mt-20 grid grid-cols-2  gap-y-6 sm:grid-cols-3 sm:mx-10 sm:gap-y-10 lg:mx-32 xl:grid-cols-5 xl:mx-52 xl:gap-y-16'>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>
            <Client image={'/logo1.png'}/>

            </div>
            <div className=''>
                <Footer show={true} />
            </div>
        </div>
    )
}

export default page