import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
const page = () => {

    const body = (
        <div className='lg:mx-20 -mt-20 sm:-mt-32'>
        <Details heading={'JUMBO /FIBCS / BIG BAGS'} image={'/n9.jpg'}>
        For transportation and storage of bulk material, we have FIBC(Flexible Intermediate Bulk Containers)or Big Bags that has a capacity of 200 kgs-
         2500 kgs and are suitable for Cement, Sugar, Food, Pharma, Fertilizers and other related industries. Our FIBCs are exported to many countries
          and have proved to be cost-effective in the long run. Several variants of Big Bags are offered by us. We customize the FIBCs as per
           specifications of our customers.
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