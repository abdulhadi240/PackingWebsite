import React from 'react'
import Productcard from './Products/Productcard'
const MainInfo = () => {
  return (
    <div>
        <div className='w-full h-[500px] sm:h-64 bg-primary-100 text-white  '>
      <h1 className='flex justify-center text-center pt-8 text-2xl font-bold tracking-wider'>WELCOME!</h1>
      <p className=' sm:text-center lg:w-auto flex justify-center  mx-10 lg:text-lg lg:py-4 sm:py-0 py-2'>
      CloudFour Packages  is the brand name for best quality of PP WOVEN BAGS AND BOPP LAMINATION BAGS & MANUFACTURER AND EXPORTER OF PET FLAKES. 
      CloudFour Packages functioning as a leading trade unit since 1980. CloudFour Packages wins the confidence of consumers due to their cost efficient and 
      reflection of quality.
      </p>
    </div>

    <div className=' lg:mx-20 mt-6'>
      <div className='flex justify-center text-3xl'>
        <h1 className='font-bold text-gray-400 mb-2'>PRODUCTS</h1>
      </div>
      <div>
        <hr/>
        <hr/>
      </div>
      <div className='mt-10 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-16'>
        <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'/Product/PPWOVEN'}
         buttonText={'Read More'}
         large={true}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n2.jpg'} 
         text={'We are into manufacturing of PP Non Woven Bags in different size'}
         heading={'PP NON-WOVEN BAGS '}
         links={'/Product/PPNONWOVEN'}
         buttonText={'Read More'}
         large={true}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n5.jpg'} 
         text={'Our BOPP bags have a volume of 5 kgs - 50 kgs and are suitable for packaging'}
         heading={'BIAXIALLY ORIENTED POLYPROPYLENE'}
         links={'/Product/BOPPS-BAGS'}
         buttonText={'Read More'}
         large={true}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n6.jpg'} 
         text={'The Packaging sacks offered by us are designed and manufactured using superior quality cotton '}
         heading={'COTTON BAGS'}
         links={'/Product/COTTON-BAGS'}
         buttonText={'Read More'}
         large={true}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n7.jpg'} 
         text={'Our organization is highly rated in the field of providing Twill Jute Bag to its clients'}
         heading={'JUTE BAGS'}
         links={'/Product/JUTE-BAGS'}
         buttonText={'Read More'}
         large={true}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n8.jpeg'} 
         text={'Our Valve Bags mostly find application in Cement Industry across the world. We have recently added a new product'}
         heading={'CEMENT & BLOCK BOTTOM BAGS'}
         links={'/Product/CEMENT-BAGS'}
         buttonText={'Read More'}
         large={true}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n9.jpg'} 
         text={'For transportation and storage of bulk material, we have Big Bags that has a capacity of 200-2500 kgs'}
         heading={'JUMBO /FIBCS / BIG BAGS'}
         links={'/Product/JUMBO-BAGS'}
         buttonText={'Read More'}
         large={true}/>
         </div>

      </div>
    </div>
    </div>
  )
}

export default MainInfo