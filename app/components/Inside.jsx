'use client'
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Inside = ({image,body,text, priority , slider}) => {
 
  return (
    <div>
    <div className='w-full h-auto  relative'>
      {slider ? (
         <div className="relative text-white text-[20px] w-full max-w-[1660px] ">
         <Carousel
             autoPlay={true}
             infiniteLoop={true}
             showThumbs={false}
             showIndicators={false}
             showStatus={false}
             
         >
             <div>
                 <img
                     src="/bg-1.jpg"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/bg-2.jpg"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/bg-3.jpg"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>

             {/* <div>
                 <img
                     src="/bopp1.jpg"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div> */}
         </Carousel>
     </div>
      ) : (
        <><Image priority={priority} src={image} height={400} width={1800} alt='img'/>
        <div className='sm:absolute top-0 md:left-[35%] lg:left-[40%]  '>
            {text}
        </div>
        </>

      )}
        
    </div>
    <div className='h-auto '>{body}</div>
    </div>
  )
}

export default Inside