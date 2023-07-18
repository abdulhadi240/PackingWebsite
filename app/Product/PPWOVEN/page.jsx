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
        <Details heading={'PP (POLYPROPYLENE) WOVEN BAGS AND FABRICS'} image={'/n1.jpg'}>
        Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries. 
        These sacks are considered as the toughest packaging bags, wide in demand in the industries of sugar, gains, milling and food. 
        As per your requirement, the sacks can be UV treated for longer life. Please contact our Sales & Exports team for any further 
        information about our production capacities and capabilities for manufacturing wide range of PP Woven sack.
        </Details>

        <Details1 heading={'ADVANTAGES'} >
                <div className=''>
                    <ul className=''>
                        <div className='sm:flex sm:gap-14 sm:flex-row lg:gap-36 '>
                        <div>
                    <li className='mt-8'>
                            <span className='text-md'><Points text={'Strength and Durability'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Lightweight'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Moisture Resistance'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'UV Resistance'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Breathability'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Cost-effective'}/></span>
                            
                        </li>
                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Recyclability'}/></span>
                            
                        </li>

                        </div>

                        <div>

                        <li className='sm:mt-8 mt-3'>
                            <span className='text-md'><Points text={'Chemical Resistance'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Versatility'}/></span>
                            
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
                            <span className='text-md'><Points text={'PP Woven Bag / Sack'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Cattle Feed Bags'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Food Grain Bag'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Laminated Bag with Docs Pocket'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Natural Bag'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Flour Bag ( 20 kgs to 50 kgs)'}/></span>
                            
                        </li>
                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Maize Bag'}/></span>
                            
                        </li>

                        </div>

                        <div>

                        <li className='sm:mt-8 mt-3'>
                            <span className='text-md'><Points text={'Multi Color Printed Bag / Sackertilizer Bag'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Three Color Patta Bag'}/></span>
                            
                        </li>

                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Polymers Bag'}/></span>
                            
                        </li>



                        <li className='mt-3'>
                            <span className='text-md'><Points text={'With or Without U.V. Stabilizer Bag'}/></span>
                            
                        </li>
                        <li className='mt-3'>
                            <span className='text-md'><Points text={'Salt Bag'}/></span>
                            
                        </li>
                        </div>
                        </div>
                        
                    </ul>
                </div>
            </Details1>

            <div className='lg:h-36 h-auto w-full bbg-secondary-100 text-center flex justify-center mt-10'>
                <h1
                 className='mx-16  my-10 text-white text-lg font-bold'>
                    These advantages make PP woven bags and fabrics a popular choice for packaging and transportation across industries, including
                     agriculture, construction, chemicals, and retail.
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