import Image from 'next/image'
import { Header } from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer/Footer'
export default function Home() {
  return (
    <div>
      <Header active={true}/>
      
      <Menu color={'white'} background={true} border={true} margin={20}/>
      <Footer show={true}/>
    </div>
  )
}
