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
        <Details heading={'COTTON BAGS'} image={'/n6.jpg'}>
        The Packaging sacks offered by us are designed and manufactured using superior quality cotton and are known for high durability, 
        tear resistance and fine finishing. These custom packaging sacks are available in different color options with drawstring and without drawstring.
         Our customers can buy from us these bags at competitive prices.
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