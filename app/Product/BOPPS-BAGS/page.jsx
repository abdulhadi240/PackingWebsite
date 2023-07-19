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
        <Details heading={'BOPP LAMINATED BAGS'} image={'/1.png'} small={true}>
        Our BOPP bags have a volume of 5 kgs - 50 kgs and are suitable for packaging Detergent Powder, Flour, Animal Feed, Food Grains, etc.
         The outer coated layer of BOPP bags is made attractive and extra glossy by using BOPP film
         (printed) which is sandwich laminated with PP fabric. This makes our BOPP bags ideal for advertising.
            </Details>

            <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'High Clarity'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Moisture Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Strength and Durability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Heat Sealability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Printability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Resistance to Chemicals'} /></span>

                                </li>

                            </div>

                            <div>
                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Lightweight'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Recyclability'} /></span>

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
                                    <span className='text-md'><Points text={'Food Packaging'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Retail Packaging'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Promotional Packaging'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Textile Packaging'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Industrial Packaging'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Pharmaceuticals and Healthcare'} /></span>

                                </li>

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    BOPP bags offer a combination of visual appeal, strength, durability, and moisture resistance, making them a popular choice for 
                    packaging a wide range of products across various industries.
                </h1>

            </div>
        </div>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside priority={true} image={'/bopp.png'} slider={true} body={body} />
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