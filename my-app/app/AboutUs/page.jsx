import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu'
import Inside from '../components/Inside'
import ABout from '../components/ABout'
const page = () => {

    const body = (
        <>
            <ABout/>
        </>


    )
    return (
        <div>
            <Header />
            <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true} />
            <Inside image={'/Hero.jpg'} body={body} />
            <div className=''>
                <Footer show={true} />
            </div>
        </div>
    )
}

export default page