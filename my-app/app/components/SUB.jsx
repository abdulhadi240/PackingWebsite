import React from 'react'
import Link from 'next/link';
const SUB = () => {
    const data = [
        { id: 1, name: "PP WOVEN BAGS AND FABRICS", url: "/Product/PPWOVEN" },
        { id: 2, name: "PP NON WOVEN BAGS", url: "/Product/PPNONWOVEN" },
        { id: 3, name: "BOPP BAGS", url: "/Product/BOPPS-BAGS" },
        { id: 4, name: "JUTE BAGS", url: "/Product/JUTE-BAGS" },
        { id: 4, name: "COTTON BAGS", url: "/Product/COTTON-BAGS" },
        { id: 4, name: "CEMENT & BLOCK BOTTOM BAGS", url: "/Product/CEMENT-BAGS" },
        { id: 4, name: "JUMBO /FIBCS / BIG BAGS", url: "/Product/JUMBO-BAGS" },
        
    
    
    
      ];

  return (
    <div>
        {data.map((data, id) => {
              return (
                <Link href={data.url}><div key={data.id} className='w-64 h-auto p-4 bg-[#98ca3e] hover:bg-[#3364af]'>{data.name}</div></Link>
              )
            })}
    </div>
  )
}

export default SUB