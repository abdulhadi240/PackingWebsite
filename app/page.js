import Image from 'next/image'
import { Header } from './components/Header'
import Menu from './components/Menu'
import Inside from './components/Inside'
import MainInfo from './components/MainInfo'
import dynamic from 'next/dynamic'


const Footer = dynamic(() => import('./components/Footer/Footer'))
const Counter = dynamic(() => import('./components/Counter'))
const Images = dynamic(() => import('./components/Images'))



export default function Home() {


  const body = (
    <>
      <MainInfo />
    </>
  )
  return (
    <div className='overflow-hidden'>
      <Header active={true} />
      <Menu color={'white'} background={true} border={true} margin={20} hide={true} />
      <Inside priority={true} slider={true} image={'/Hero.jpg'} body={body} />
      <div>
        <div className='mt-20 flex lg:flex-row flex-col lg:gap-20'>
          <Images/>
          <div className='flex flex-col w-full bg-slate-100 pt-6'>
            <h1 className='text-primary-100 font-bold text-5xl flex justify-center text-center mb-6'>OUR SUCCESS</h1>
            <Counter />
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-0'>
        <Footer show={true} />
      </div>
    </div>
  )
}
