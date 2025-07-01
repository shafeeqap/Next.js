import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className='pt-16 pb-16'>
            {/* Section Heading */}
            <SectionHeading heading='Exciting Travel News for You' subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
                {/* News Card */}
                <div>
                    <NewsCard image='/images/n1.jpg' title='Top 10 place to visit in Australia' date='15 December 2024' />
                </div>
                <div>
                    <NewsCard image='/images/n2.jpg' title='Top 10 place to visit in Newyork' date='11 January 2023' />
                </div>
                <div>
                    <NewsCard image='/images/n3.jpg' title='Top 10 place to visit in China' date='22 Jun 2022' />
                </div>
                <div>
                    <NewsCard image='/images/n4.jpg' title='Top 10 place to visit in India' date='5 February 2025' />
                </div>
            </div>
        </div>
    )
}

export default News