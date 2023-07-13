import React from 'react'
import {AiFillShopping} from 'react-icons/ai'
import Link from 'next/link'
const SideMenu = ({active}) => {
  return (
    <div className='w-80 h-auto p-4 text-center xl:flex xl:flex-col gap-2 hidden '>

       <Link href={'/Product/PPWOVEN'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        PP WOVEN BAGS AND FABRICS
        </div></Link>


        <Link href={'/Product/PPNONWOVEN'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        PP NONWOVEN BAGS 
        </div></Link>


        <Link href={'/Product/BOPPS-BAGS'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        BOPP Bags
        </div></Link>


        <Link href={'/Product/COTTON-BAGS'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        Cotton Bags
        </div></Link>


        <Link href={'/Product/JUTE-BAGS'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        Jute Bags
        </div></Link>


        <Link href={'/Product/CEMENT-BAGS'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        Cement & Block Bottom Bags
        </div></Link>

        <Link href={'/Product/JUMBO-BAGS'}><div className={`${active ? 'bg-[#3364af]' : 'bg-[#98ca3e]'} w-auto p-2 hover:bg-[#3364af] text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        Jumbo Bags/ FIBCS/ Big Bags
        </div></Link>

        
        

        

       
    </div>
  )
}

export default SideMenu