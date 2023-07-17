import React from 'react'
import { Contact } from './Contact'
import Name from '../Name'
import Menu from '../Menu'
import Information from './Information'
import Foot from './Foot'
import Map from '../Map'

const Footer = ({show}) => {
  return (
    <div>
      {show && (
        <Contact/>
      )}
        
        {/*<Map/>*/}
        <div className='mt-4'>
        {/* <Menu background={false} border={false} color={false} hover={true} margin={6} hide={false}/> */}
        </div>
        <Information/>
        {/* <Map/> */}
        <Foot/>
    </div>
  )
}

export default Footer