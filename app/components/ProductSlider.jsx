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
        <div className='cursor-grab lg:px-36 xl:px-64 bg-gray-50 p-16'>
            <h1 className='text-xl font-bold tracking-wide text-secondary-100 mb-5'>Related Products</h1>
            <Carousel
                responsive={responsive}
                ssr={true}
                swipeable={true}
                autoPlay
                infinite
                
            >
                <div>
                    <Productcard
                        image={'/PP-WOVEN.png'}
                        links={'/Product/PPWOVEN'}
                        buttonText={'PP WOVEN BAGS AND FABRICS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/non-woven.png'}
                        links={'/Product/PPNONWOVEN'}
                        buttonText={'PP NON-WOVEN BAGS'}
                        large={false} />
                </div>
                <div>
                    <Productcard
                        image={'/bopp1.png'}
                        links={'/Product/BOPPS-BAGS'}
                        buttonText={'BOPP BAGS'}
                        large={false}
                        small={true} />
                </div>
                {/* <div>
                    <Productcard
                        image={'/OPP.png'}
                        links={'/Product/OPP-ROLLS'}
                        buttonText={'OPP ROLLS '}
                        large={false} />
                </div> */}
                {/* <div>
                    <Productcard
                        image={'/laminate.jpg'}
                        links={'/Product/LAMINATEDSHEETS'}
                        buttonText={'LAMINATED SHEETS'}
                        large={false} />
                </div> */}
                <div>
                    <Productcard
                        image={'/Paper.png'}
                        links={'/Product/PAPERBAGS'}
                        buttonText={'PAPER BAGS'}
                        large={false} />
                </div>
                
            </Carousel>
        </div>
    )
}

export default ProductSlider




