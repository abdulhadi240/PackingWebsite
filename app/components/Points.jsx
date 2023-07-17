import React from 'react'
import {FiChevronsRight} from 'react-icons/fi'
const Points = ({text}) => {
  return (
    <div className='w-auto h-auto flex justify-start gap-4'>
    <div>
        <FiChevronsRight className='mt-1'/>
    </div>
    <div className='w-auto sm:w-64 lg:w-72 xl:w-80'>
        {text}
    </div>
    </div>
  )
}

export default Points