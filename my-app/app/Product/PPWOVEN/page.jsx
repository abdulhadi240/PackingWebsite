import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu'
import Inside from '../../components/Inside'
import Details from '@/app/components/Products/Details'
const page = () => {

    const body = (
        <div className='lg:mx-20 -mt-20 sm:-mt-32'>
        <Details heading={'PP (POLYPROPYLENE) WOVEN BAGS AND FABRICS'} image={'/n1.jpg'}>
        Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries. 
        These sacks are considered as the toughest packaging bags, wide in demand in the industries of sugar, gains, milling and food. 
        As per your requirement, the sacks can be UV treated for longer life. Please contact our Sales & Exports team for any further 
        information about our production capacities and capabilities for manufacturing wide range of PP Woven sack.
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