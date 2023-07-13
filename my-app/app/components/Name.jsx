import React from 'react'
const Name = ({Text , border , background , hover , TextHover , active}) => {
  return (
    <div className={`w-[150px] lg:w-[210px] xl:w-[270px] text-center ${border?'border-r-[1px]' : 'border-r-[0px]'} px-4 h-[40px] flex justify-center pt-2 border-white  font-bold ${hover? 'hover:bg-[#3364af]' : ''}  ${TextHover? 'hover:text-[#3364af]' : ''} cursor-pointer hover:transition`}>
        {Text}
    </div>
  )
}

export default Name