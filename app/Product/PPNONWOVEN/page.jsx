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
            <Details heading={'PP NON WOVEN ( LAMINATED COATED INSIDE & WITHOUT LAMINATION) BAGS'} image={'/non-woven.png'}>
                Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.
                These sacks are considered as the toughest packaging bags, wide in demand in the industries of sugar, gains, milling and food.
                As per your requirement, the sacks can be UV treated for longer life. Please contact our  Sales & Exports team for any further
                information about our production capacities and capabilities for manufacturing wide range of PP Woven sack.
            </Details>

            <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Lightweight'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Durability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Cost-effective'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Eco-friendly'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Water and Moisture Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Customizable'} /></span>

                                </li>

                            </div>

                            <div>
                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Versatility'} /></span>

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
                                    <span className='text-md'><Points text={'Shopping Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Promotional Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Tote Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Gift Bags'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Exhibition and Event Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Healthcare and Hygiene Products'} /></span>

                                </li>

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    PP non-woven bags, whether laminated coated inside or without lamination, provide a versatile and environmentally friendly packaging
                     solution for various applications. Their lightweight, durability, customization options, and eco-friendliness make them a popular 
                     choice for businesses and consumers alike.
                </h1>

            </div>
        </div>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside priority={true} image={'/product-back.jpg'} body={body} />
            <div className='overflow-hidden'>
                <ProductSlider />
            </div>
            <div className=''>
                <Footer show={true} />
            </div>
        </div>
    )
}

export default page