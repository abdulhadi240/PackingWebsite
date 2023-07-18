import Image from 'next/image'
import { Header } from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer/Footer'
import Inside from './components/Inside'
import MainInfo from './components/MainInfo'


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
      <Footer show={true}/>
    </div>
  )
}
