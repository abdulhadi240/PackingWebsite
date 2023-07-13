import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
const page = () => {

    const body = (
        <div className='lg:mx-20 -mt-20 sm:-mt-32'>
        <Details heading={'CEMENT & BLOCK BOTTOM BAGS'} image={'/n8.jpeg'}>
        Our Valve Bags mostly find application in Cement Industry across the world. We have recently added a new product -
         the Block Bottom bags to the existing line of Valve Bags products. The demand for Block Bottom Bags is growing rapidly
          and plastic bags are preferred over paper bags.
            </Details>
        </div>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside image={'/product-back.jpg'}  body={body} />
            <div className=''>
                <Footer show={true} />
            </div>
        </div>
    )
}

export default page