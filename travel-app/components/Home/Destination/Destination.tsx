import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
    return (
        <div className='pt-20 pb-20'>
            {/* Section Heading */}
            <SectionHeading heading='Exploring Popular Destination' subHeading='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            {/* Section Content */}
            <div className='mt-14 w-[80%] mx-auto'>
                {/* Slider */}
                <DestinationSlider />

            </div>
        </div>
    )
}

export default Destination