import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Carousel = () => {
    return (
        <>
            <div className="carousel-container carousel-container-left">
                <FaChevronLeft onClick={()=>{console.log('first')}} className='chevron' />
            </div>

            <div className="carousel-container carousel-container-right">
                <FaChevronRight className='chevron' />
            </div>
        </>

    )
}

export default Carousel