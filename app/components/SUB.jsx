import React from 'react'
import Link from 'next/link';
const SUB = () => {
  const data = [
    { id: 1, name: "PP WOVEN BAGS", url: "/Product/PPWOVEN" },
    { id: 2, name: "PP NON WOVEN BAGS", url: "/Product/PPNONWOVEN" },
    { id: 3, name: "BOPP BAGS", url: "/Product/BOPPS-BAGS" },
    { id: 4, name: "PP LAMINATED SHEETS", url: "/Product/LAMINATEDSHEETS" },
    { id: 5, name: " OPP PRINTED ROLLS", url: "/Product/OPP-ROLLS" },
    { id: 6, name: "PAPER LAMINATED BAGS", url: "/Product/PAPERBAGS" },
    



  ];

  return (
    <div>
        {data.map((data, id) => {
              return (
                <Link href={data.url}><div key={data.id} className='w-64 h-auto p-4 bg-primary-100 hover:bg-secondary-100'>{data.name}</div></Link>
              )
            })}
    </div>
  )
}

export default SUB