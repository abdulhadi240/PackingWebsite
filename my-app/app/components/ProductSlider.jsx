'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Productcard from './Products/Productcard';



const ProductSlider = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='cursor-grab lg:px-36 bg-gray-50 p-16'>
            <h1 className='text-xl font-bold tracking-wide text-[#3364af] mb-5'>Related Products</h1>
            <Carousel
                responsive={responsive}
                ssr={true}
                swipeable={true}
                autoPlay
                infinite
                
            >
                <div>
                    <Productcard
                        image={'/n1.jpg'}
                        links={'/Product/PPWOVEN'}
                        buttonText={'PP WOVEN BAGS AND FABRICS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/n2.jpg'}
                        links={'/Product/PPNONWOVEN'}
                        buttonText={'PP NON-WOVEN BAGS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/n5.jpg'}
                        links={'/Product/BOPPS-BAGS'}
                        buttonText={'ORIENTED POLYPROPYLENE'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/n6.jpg'}
                        links={'/Product/COTTON-BAGS'}
                        buttonText={'COTTON BAGS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/n7.jpg'}
                        links={'/Product/JUTE-BAGS'}
                        buttonText={'JUTE BAGS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/n8.jpeg'}
                        links={'/Product/CEMENT-BAGS'}
                        buttonText={'CEMENT & BLOCK BOTTOM BAGS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/n9.jpg'}
                        links={'/Product/JUMBO-BAGS'}
                        buttonText={'JUMBO /FIBCS / BIG BAGS'}
                        large={false} />
                </div>
            </Carousel>
        </div>
    )
}

export default ProductSlider




