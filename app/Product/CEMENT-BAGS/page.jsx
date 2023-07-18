import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
import ProductSlider from '@/app/components/ProductSlider'
import Points from '@/app/components/Points'
import Details1 from '@/app/components/Details1'

const page = () => {

    const body = (
        <div className='mt-3'>
        <Details heading={'CEMENT & BLOCK BOTTOM BAGS'} image={'/n8.jpeg'}>
        Our Valve Bags mostly find application in Cement Industry across the world. We have recently added a new product -
         the Block Bottom bags to the existing line of Valve Bags products. The demand for Block Bottom Bags is growing rapidly
          and plastic bags are preferred over paper bags.
            </Details>

            <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Strength and Durability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Protection'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Easy Handling'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Efficient Filling and Emptying'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Branding and Information Display'} /></span>

                                </li>

                                

                               

                            </div>

                            <div>
                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Moisture Resistance'} /></span>

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
                                    <span className='text-md'><Points text={'Cement Packaging'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Infrastructure Projects'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Industrial Applications'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Retail Sector'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Agriculture and Farming'} /></span>

                                </li>

                                

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    Their applications extend to various sectors, particularly in construction, infrastructure projects, and industrial packaging. 
                    These bags play a crucial role in the safe and efficient handling of cement and other construction materials, ensuring the integrity
                     of the materials throughout the supply chain.
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