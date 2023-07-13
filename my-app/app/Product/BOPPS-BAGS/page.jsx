
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
        <Details heading={'PP NON WOVEN ( LAMINATED COATED INSIDE & WITHOUT LAMINATION) BAGS'} image={'/n5.jpg'}>
        Our BOPP bags have a volume of 5 kgs - 50 kgs and are suitable for packaging Detergent Powder, Flour, Animal Feed, Food Grains, etc.
         The outer coated layer of BOPP bags is made attractive and extra glossy by using BOPP film
         (printed) which is sandwich laminated with PP fabric. This makes our BOPP bags ideal for advertising.
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