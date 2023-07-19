import React from 'react'
import { Header } from '../../components/Header'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
import Details1 from '@/app/components/Details1'
import Points from '@/app/components/Points'
import dynamic from 'next/dynamic'
const Footer = dynamic(()=>import('@/app/components/Footer/Footer'))
const ProductSlider = dynamic(()=>import('@/app/components/ProductSlider'))

const page = () => {

    const body = (
        <div className='mt-3'>
        <Details heading={'JUMBO /FIBCS / BIG BAGS'} image={'/n9.jpg'}>
        For transportation and storage of bulk material, we have FIBC(Flexible Intermediate Bulk Containers)or Big Bags that has a capacity of 200 kgs-
         2500 kgs and are suitable for Cement, Sugar, Food, Pharma, Fertilizers and other related industries. Our FIBCs are exported to many countries
          and have proved to be cost-effective in the long run. Several variants of Big Bags are offered by us. We customize the FIBCs as per
           specifications of our customers.
        </Details>
        <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'High Load Capacity'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Space Efficiency'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Durability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Customizability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Protection from Contamination'} /></span>

                                </li>

                                

                               

                            </div>

                            <div>
                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Cost Savings'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Reusability'} /></span>

                                </li>

                               
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>



            <Details1 heading={'APPLICATIONS'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 lg:gap-36 sm:flex-row sm:justify-start '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Chemicals and Fertilizers'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Agriculture and Food Industry'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Construction and Building Materials'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Mining and Minerals'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Waste and Recycling'} /></span>

                                </li>
                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Pharmaceutical and Healthcare'} /></span>

                                </li>

                                

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    Their advantages in terms of load capacity, durability, customizability, and cost savings make them widely used across 
                    various industries, contributing to efficient supply chains and sustainable packaging practices.
                </h1>

            </div>
        </div>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside priority={true} image={'/product-back.jpg'} slider={true} body={body} />
            <div className='overflow-hidden'>
          <ProductSlider/>
        </div>
            <div className=''>
                <Footer show={true} />
            </div>
        </div>
    )
}

export default page