import Image from 'next/image'
import { Header } from './components/Header'
import Menu from './components/Menu'
import Inside from './components/Inside'
import MainInfo from './components/MainInfo'
import dynamic from 'next/dynamic'
import Counter from './components/Counter'


const Footer = dynamic(()=>import('./components/Footer/Footer'))


export default function Home() {


  const body = (
    <>
    <MainInfo/>
    </>
  )
  return (
    <div className='overflow-hidden'>
      <Header active={true}/>
      <Menu color={'white'} background={true} border={true} margin={20} hide={true}/>
      <Inside priority={true} slider={true} image={'/Hero.jpg'} body={body}/>
      <div className='w-full bg-gray-50 h-auto mt-10 '>
        <h1 className='flex justify-center text-center text-5xl font-bold  text-primary-100  pt-10'>OUR SUCCESS</h1>
      <Counter/>
      </div>
      <div className='mt-10 lg:mt-0'>
      <Footer show={true}/>
      </div>
    </div>
  )
}
