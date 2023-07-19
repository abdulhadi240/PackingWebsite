import React from 'react'
import { Header } from '../../components/Header'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
import Points from '@/app/components/Points'
import Details1 from '@/app/components/Details1'
import dynamic from 'next/dynamic'
const Footer = dynamic(()=>import('@/app/components/Footer/Footer'))
const ProductSlider = dynamic(()=>import('@/app/components/ProductSlider'))
const page = () => {

    const body = (
        <div className='mt-3'>
        <Details heading={'BOPP PRINTED ROLLS AND FLEXIBLE PACKAGING '} image={'/OPP.png'}>
        BOPP (Biaxially Oriented Polypropylene) printed rolls are a type of flexible packaging material commonly used in various industries for wrapping and protecting products. BOPP is a versatile and widely used material due to its excellent clarity, high tensile strength, and resistance to moisture and chemicals.
BOPP Material: BOPP is a type of polypropylene film that undergoes a biaxial orientation process, which stretches the film in both the machine and transverse directions. This orientation imparts several beneficial properties to the film, including increased tensile strength, optical clarity, and barrier properties.
Printing: BOPP films can be printed using various printing techniques, such as rotogravure or flexographic printing. This allows for high-quality graphics and designs to be applied to the surface of the film, enhancing product visibility and branding.
Flexible Packaging: BOPP printed rolls are commonly used to create flexible packaging solutions, such as bags, pouches, wraps, and labels. These packaging formats are widely used across different industries to package a wide range of products.
        </Details>

        <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Excellent Clarity'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Moisture Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'High Tensile Strength'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Chemical Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Lightweight'} /></span>

                                </li>

                               

                            </div>

                            <div>
                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Printable Surface'} /></span>

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
                                    <span className='text-md'><Points text={'Beverage Packaging'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Personal Care Products'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Stationery and Office Supplies'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Stationery and Office Supplies'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Industrial and Consumer Goods'} /></span>

                                </li>

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    BOPP printed rolls and flexible packaging offer numerous advantages, including clarity, moisture resistance, high tensile strength, and printability. Their versatility and effectiveness in various applications make them a popular choice in the packaging industry.
                </h1>

            </div>
        </div>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside priority={true} image={'/product-back.jpg'}  body={body} />
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