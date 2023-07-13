import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
import ProductSlider from '@/app/components/ProductSlider'

const page = () => {

    const body = (
        <div className='lg:mx-20 -mt-20 sm:-mt-32'>
        <Details heading={'JUTE BAGS'} image={'/n7.jpg'}>
        Our organization is highly rated in the field of providing Twill Jute Bag to its clients. 
        Our products are known for its unique designing and distinct features such as long term sustaining and high in quality. 
        They are finely processed and tested by the team of highly knowledgeable and experienced professional at advanced units. 
        Twill Jute Bag is used for packing variety of products.
        </Details>
        </div>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside image={'/product-back.jpg'}  body={body} />
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