import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu'
import Inside from '../components/Inside'
const page = () => {

    const body = (
        <>
        <div className='mx-14'>
            <h1 className='text-[24px] text-[#3364af] font-bold'>ABOUT US</h1>
            <p className='mt-2'>In a span of nearly two decades the company has acquired large market share in Middle East and Africa by adopting honest business policies and following best industry practices for maintaining quality, cost and delivery. 
                <br className=''/><br/>We cover various segments of business locally and internationally. Our reputed customers are one of the largest manufacturer companies of food grains, spices, sugar and cement in UAE, G.C.C. Countries and international market. With the advanced technology and expertise we managed to meet various customers' requirements and needs with minimum delivery lead times and assured quality.
                <br className=''/><br/><span className='text-[17px] text-[#98ca3e] font-bold'>Our Motto itself is: "Where Deeds Follow Words."</span></p>


                <h1 className='text-[24px] text-[#3364af] mt-10 font-bold'>MISSION</h1>
            <p className='mt-2'>To provide optimum and cost effective solutions for the packing needs of customers, with flexibility to adapt to stringent delivery schedules while keeping the quality consistent.</p>


            <h1 className='text-[24px] text-[#3364af] mt-10 font-bold'>VISION</h1>
            <p className='mt-2'>Our Vision is to be pioneers and industry leaders in GCC region that becomes one stop solution for all types of packaging requirements from PP woven/non woven bags and sacks market. With an eye on future to anticipate future needs and demands of the market to we keep improving and adapting to latest trends and technology to stay on top of the game.</p>


            <h1 className='text-[24px] text-[#3364af] mt-10 font-bold'>CORE VALUES</h1>
            <ul>
                <li> Focus on new and innovative business ideas</li>
                <li> Practice high ethical standards</li>
                <li> Respect and protect the environment</li>
                <li>Meet the changing needs and desires of clients and consumers</li>
            </ul>

            <h1 className='text-[24px] mt-10 text-[#3364af] font-bold '>GOAL</h1>
            <p className='mt-2'>We are in the process of expansion & diversification and we are positive that we will achieve our targeted mission by starting 2019.</p>

</div>

<div className='lg:h-36 h-auto w-full bg-[#068ea8] text-center flex justify-center mt-10'>
    <h1 className='mx-16  my-10 text-white text-lg font-bold'>WE ARE LEADING MANUFACTURERS IN THE REGION OF POLYPROPYLENE WOVEN SACKS,ONLY MANUFACTURERS OF COTTON, JUTE, AND PIONEERS IN NON-WOVEN BAGS IN THE MIDDLE EAST.</h1>

</div>

</>

        
    )
  return (
    <div>
        <Header/>
        <Menu color={'white'} background={true} border={true} margin={20} active={true} hide={true}/>
        <Inside image={'/Hero.jpg'} body={body}/>
        <div className=''>
        <Footer show={true}/>
        </div>
    </div>
  )
}

export default page