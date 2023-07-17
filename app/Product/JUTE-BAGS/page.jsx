import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
import ProductSlider from '@/app/components/ProductSlider'
import Details1 from '@/app/components/Details1'
import Points from '@/app/components/Points'

const page = () => {

    const body = (
        <div className='mt-3'>
        <Details heading={'JUTE BAGS'} image={'/n7.jpg'}>
        Our organization is highly rated in the field of providing Twill Jute Bag to its clients. 
        Our products are known for its unique designing and distinct features such as long term sustaining and high in quality. 
        They are finely processed and tested by the team of highly knowledgeable and experienced professional at advanced units. 
        Twill Jute Bag is used for packing variety of products.
        </Details>

        <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                            <div>
                                <li className='mt-8'>
                                    <span className='text-md'><Points text={'Sustainability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Biodegradability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Strength and Durability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Breathability'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Thermal Insulation'} /></span>

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
                                    <span className='text-md'><Points text={'Shopping Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Promotional Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Fashion and Accessories'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Gift Bags'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Home Decor and Crafts'} /></span>

                                </li>

                                

                            </div>

                            <div>

                                <li className='sm:mt-8 mt-3'>
                                    <span className='text-md'><Points text={'Agriculture and Farming'} /></span>

                                </li>

                                <li className='mt-3'>
                                    <span className='text-md'><Points text={'Event and Conference Bags'} /></span>

                                </li>

                                
                            </div>
                        </div>

                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bg-[#068ea8] text-center flex justify-center mt-10'>
                <h1
                    className='mx-16  my-10 text-white text-lg font-bold'>
                    Their eco-friendly properties, strength, and natural aesthetics make them a preferred choice for individuals, businesses, and
                     organizations seeking sustainable alternatives to plastic bags.
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