import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {/* 1st Part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Company</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>About Us</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Careers</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Blogs</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Gift Cards</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Magazine</p>
                </div>
                {/* 2nd Part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Support</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Contact</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Legal Notice</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Privacy Policy</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Terms & Conditions</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Sitemap</p>
                </div>
                {/* 3nd Part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Other Services</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Car hire</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Activity Finder</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Tour List</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Flight Finder</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-600'>Travel Agents</p>
                </div>
                {/* 4th Part */}
                <div>
                    <h1 className='text-lg font-bold'>Contact Us</h1>
                    <div className='mt-6'>
                        <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                        <h1 className='text-base font-bold text-blue-950 mt-1'>+919025 000 111</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-sm text-gray-600'>Our Email</h1>
                        <h1 className='text-base font-bold text-blue-950 mt-1'>letsgo@example.com</h1>
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
                <p className='text-center md:text-left'>Copyright© {new Date().getFullYear()} Let&apos;s Go. All rights reserved.</p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    <span>Social : </span>
                    <Link href='#' className='text-gray-500 hover:text-gray-800'><FaFacebook /></Link>
                    <Link href='#' className='text-gray-500 hover:text-gray-800'><FaTwitter /></Link>
                    <Link href='#' className='text-gray-500 hover:text-gray-800'><FaWhatsapp /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer