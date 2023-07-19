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
        <Details heading={'PAPER LAMINATED BAGS ( BLOCK BOTTOM) '} image={'/Paper.png'}>
        Paper laminated bags, also known as block bottom bags or square bottom bags, are a type of packaging solution widely used in various industries for storing and carrying a wide range of products. These bags are made from a combination of high-quality paper and laminated materials, such as plastic or aluminum, which enhances their durability and strength while maintaining their eco-friendliness.
Construction: The bags are typically made of multiple layers, including an outer layer of paper and an inner layer of laminated material. The laminated layer provides additional protection against moisture, grease, and other external elements.
Square/Block Bottom: The distinctive feature of these bags is their square or block-shaped bottom. This design allows the bag to stand upright and maintain its shape, making it easier to fill and stack.
Reinforced Handles: Paper laminated bags often have reinforced handles for comfortable carrying, ensuring they can withstand the weight of the contents.
            </Details>

            <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Eco-Friendly'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Sturdy and Durable'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Moisture Resistance'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Branding Opportunities'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Branding and Information Display'} /></span>

                                </li>

                                

                               

                            </div>

                            <div>
                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Versatility'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Improved Shelf Presence'} /></span>

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
                                    <span className='text-md'><Points text={'Food Industry'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Retail Sector'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Pharmaceutical Industry'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Agriculture'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Industrial and Chemical Products'} /></span>

                                </li>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Pet Food Packaging'} /></span>

                                </li>

                                

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    Paper laminated bags with block bottoms offer an attractive and environmentally responsible packaging solution for a diverse range of products. Their strength, versatility, and branding capabilities make them a popular choice in many industries.
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