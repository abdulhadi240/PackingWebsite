import React from 'react'
import {AiFillShopping} from 'react-icons/ai'
import Link from 'next/link'
const SideMenu = ({active}) => {
  return (
    <div className='w-80 h-auto p-4 text-center xl:flex xl:flex-col gap-2 hidden '>

       <Link href={'/Product/PPWOVEN'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        PP WOVEN BAGS AND FABRICS
        </div></Link>


        <Link href={'/Product/PPNONWOVEN'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        PP NONWOVEN BAGS 
        </div></Link>


        <Link href={'/Product/BOPPS-BAGS'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        BOPP BAGS
        </div></Link>


        <Link href={'/Product/OPP-ROLLS'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        OPP PRINTED ROLLS
        </div></Link>


        <Link href={'/Product/JUTE-BAGS'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        JUTE BAGS
        </div></Link>


        <Link href={'/Product/PAPERBAGS'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        PAPER BAGS
        </div></Link>

        <Link href={'/Product/JUMBO-BAGS'}><div className={`${active ? 'bg-secondary-100' : 'bg-primary-100'} w-auto p-2 hover:bg-secondary-100 text-white font-semibold flex gap-2 transition-all`}>
            <AiFillShopping className='mt-[2px]'/>
        JUMBO BAGS/ FIBCS/ BIG BAGS
        </div></Link>

        
        

        

       
    </div>
  )
}

export default SideMenu