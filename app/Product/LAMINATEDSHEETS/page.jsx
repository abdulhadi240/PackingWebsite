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
        <Details heading={'PP LAMINATED SHEETS'} image={'/laminate.jpg'}>
        PP (Polypropylene) laminated sheets are composite materials made by bonding layers of polypropylene with other materials, typically paper or cardboard. The lamination process involves applying heat and pressure to create a strong bond between the layers, resulting in a durable and versatile sheet that finds applications in various industries.
Material Composition: PP laminated sheets consist of a core material, which is usually paper or cardboard, sandwiched between two layers of polypropylene. The polypropylene layers act as protective barriers, providing additional strength and resistance to moisture and chemicals.
Lamination Process: The lamination process involves applying an adhesive or extruded polypropylene film to the surface of the core material. Heat and pressure are then used to bond the layers together, creating a seamless and sturdy sheet.
        </Details>

        <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Durability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Chemical Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Moisture Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Lightweight'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Cost-Effective'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Reusability'} /></span>

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
                                    <span className='text-md'><Points text={'Packaging Industry'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Graphic Arts and Printing'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Stationery and Office Supplies'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Advertising and Display'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Automotive Industry'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Building and Construction'} /></span>

                                </li>

                                

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                     PP laminated sheets offer a balance of strength, moisture resistance, printability, and cost-effectiveness, making them a popular choice in diverse industries for a wide range of applications.
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