'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Productcard = dynamic(() => import('./Products/Productcard'))
const MainInfo = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className='bg-primary-100 transition-al'>
        <div className={`w-full overflow-hidden ${show ? 'h-auto' : 'h-[500px]'}  sm:h-auto pt-4   text-white transition-all bg-primary-100 `}>
          <h1 className='flex justify-center text-center pt-8 text-2xl font-bold tracking-wider transition-all'>WELCOME!</h1>
          <p className=' sm:text-center lg:w-auto flex justify-center  mx-10 lg:text-lg lg:py-4 sm:py-0 py-2 transition-all'>
            Introducing CloudFour Packages: Your Trusted Provider of High-Quality PP Woven Bags, BOPP Lamination Bags,  paper Sack , OPP prineted rolls and PP transparent laminated sheets

            Established in 1980, CloudFour Packages has emerged as a prominent and trusted brand in the packaging industry. With a focus on delivering superior quality products, we specialize in manufacturing and exporting top-of-the-line PP woven bags and  BOPP lamination bags.

            Our commitment to excellence and customer satisfaction has propelled us to the forefront of the market, where we have gained the trust and confidence of consumers worldwide. We take pride in our ability to provide cost-efficient solutions that never compromise on quality.

            At CloudFour Packages, we understand the importance of packaging in safeguarding products and enhancing brand value. That's why our PP woven bags and BOPP lamination bags are meticulously crafted using advanced techniques and state-of-the-art machinery. The result is a range of durable, reliable, and visually appealing packaging solutions that meet the highest industry standards.

            In addition to our expertise in packaging solutions, we have also ventured into the production. 

            Over the years, CloudFour Packages has built a solid reputation for delivering excellence, meeting deadlines, and providing exceptional customer service. Our professional team of experts is committed to understanding and fulfilling our customers' unique requirements, ensuring that we exceed their expectations with every interaction.

            As a socially responsible company, we are committed to sustainable practices and eco-friendly initiatives. We strive to minimize our environmental impact by promoting recycling and adopting greener manufacturing processes.

            Choose CloudFour Packages as your preferred packaging partner and experience the utmost professionalism, reliability, and product quality. We look forward to serving you and contributing to the success of your business.</p>
        </div>
        {show?(
        <h1 className='text-secondary-100 font-bold sm:hidden' onClick={()=>{setShow(false)}}>Show Less ...</h1>

        ):(
          <h1 className='text-secondary-100 font-bold  sm:hidden mt-6' onClick={()=>{setShow(true)}}>Show More ...</h1>

        )}

      </div>
      
        
      

      <div className=' lg:mx-14 mt-6'>
        <div className='flex justify-center text-3xl'>
          <h1 className='font-bold text-gray-400 mb-2'>PRODUCTS</h1>
        </div>
        <div>
          <hr />
          <hr />
        </div>
        <div className='mt-10 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-16'>
          <div className='flex justify-center sm:block'>
            <Productcard
              image={'/PP-WOVEN.png'}
              text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
              heading={'PP WOVEN BAGS'}
              links={'/Product/PPWOVEN'}
              buttonText={'Read More'}
              large={true} />
          </div>

          <div className='flex justify-center sm:block'>
            <Productcard
              image={'/non-woven.png'}
              text={'We are into manufacturing of PP Non Woven Bags in different size'}
              heading={'PP NON-WOVEN BAGS '}
              links={'/Product/PPNONWOVEN'}
              buttonText={'Read More'}
              large={true} />
          </div>

          <div className='flex justify-center sm:block'>
            <Productcard
              image={'/bopp1.png'}
              text={'Our BOPP bags have a volume of 5 kgs - 50 kgs and are suitable for packaging'}
              heading={'BIAXIALLY ORIENTED POLYPROPYLENE'}
              links={'/Product/BOPPS-BAGS'}
              buttonText={'Read More'}
              large={true}
              small={true} />
          </div>

          <div className='flex justify-center sm:block'>
            <Productcard
              image={'/OPP.png'}
              text={'BOPP printed rolls are versatile and widely used material due to its excellent clarity, high tensile strength, and resistance to moisture and chemicals. '}
              heading={'OPP PRINTED ROLLS'}
              links={'/Product/OPP-ROLLS'}
              buttonText={'Read More'}
              large={true} />
          </div>

          <div className='flex justify-center sm:block'>
            <Productcard
              image={'/laminated.jpg'}
              text={'PP laminated sheets offer a balance of strength, moisture resistance, printability, and cost-effectiveness'}
              heading={'PP laminated sheet'}
              links={'/Product/LAMINATEDSHEETS'}
              buttonText={'Read More'}
              large={true} />
          </div>

          <div className='flex justify-center sm:block'>
            <Productcard
              image={'/Paper.png'}
              text={'These bags are made from a combination of high-quality paper and laminated materials'}
              heading={'PAPER LAMINATED BAGS ( BLOCK BOTTOM)'}
              links={'/Product/PAPERBAGS'}
              buttonText={'Read More'}
              large={true} />
          </div>



        </div>
      </div>
    </div>
  )
}

export default MainInfo