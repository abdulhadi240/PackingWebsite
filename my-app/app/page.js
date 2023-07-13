import Image from 'next/image'
import { Header } from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer/Footer'
import Inside from './components/Inside'
import Productcard from './components/Products/Productcard'
export default function Home() {


  const body = (
    <>
    <div className='w-full h-[500px] sm:h-64 bg-[#98ca3e] text-white '>
      <h1 className='flex justify-center text-center pt-8 text-2xl font-bold tracking-wider'>WELCOME!</h1>
      <p className='flex justify-center text-center mx-10 text-lg py-10'>Akma Packaging Industries LLC established in Aug 2004 is a Limited Liability Company based in Ajman, United Arab Emirates. Today we are most trusted and largest manufacturers of PP Woven bags, PP Woven Laminated & Non Laminated bags, PP Woven Photographic printing bags, BOPP bags, PP Non Woven bags, Cotton Bags, Jute bags, AD Star valve type cement bags and FIBC bags (Jumbo bags) in the region. We are pioneers in non woven bags, Jute bags and cotton bags in the GCC.</p>
    </div>

    <div className=' mx-6 sm:mx-20 mt-6'>
      <div className='flex justify-center text-3xl'>
        <h1 className='font-bold text-gray-400 mb-2'>PRODUCTS</h1>
      </div>
      <div>
        <hr/>
        <hr/>
      </div>
      <div className='mt-10 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 sm:gap-16'>
        <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'./'}
         buttonText={'Read More'}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'./'}
         buttonText={'Read More'}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'./'}
         buttonText={'Read More'}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'./'}
         buttonText={'Read More'}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'./'}
         buttonText={'Read More'}/>
         </div>

         <div className='flex justify-center sm:block'>
        <Productcard
         image={'/n1.jpg'} 
         text={'Over the years, PP Woven Sacks have proved their excellence in the packaging unit of several industries.'}
         heading={'PP WOVEN BAGS AND FABRICS'}
         links={'./'}
         buttonText={'Read More'}/>
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
