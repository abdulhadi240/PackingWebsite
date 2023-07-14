import Image from 'next/image'
import { Header } from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer/Footer'
import Inside from './components/Inside'
import Productcard from './components/Products/Productcard'
export default function Home() {


  const body = (
    <>
    <div className='w-full h-[500px] sm:h-64 bg-[#98ca3e] text-white -mt-16 sm:-mt-24 lg:-mt-10 xl:-mt-0 '>
      <h1 className='flex justify-center text-center pt-8 text-2xl font-bold tracking-wider'>WELCOME!</h1>
      <p className=' lg:text-center lg:w-auto flex justify-center  mx-10 lg:text-lg py-10'>Akma Packaging Industries LLC established in Aug 2004 is a Limited Liability Company based in Ajman, United Arab Emirates. Today we are most trusted and largest manufacturers of PP Woven bags, PP Woven Laminated & Non Laminated bags, PP Woven Photographic printing bags, BOPP bags, PP Non Woven bags, Cotton Bags, Jute bags, AD Star valve type cement bags and FIBC bags (Jumbo bags) in the region. We are pioneers in non woven bags, Jute bags and cotton bags in the GCC.</p>
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
    </>
  )
  return (
    <div>
      <Header active={true}/>
      
      <Menu color={'white'} background={true} border={true} margin={20} hide={true}/>
      <Inside image={'/Hero.jpg'} body={body}/>
      <Footer show={true}/>
    </div>
  )
}
