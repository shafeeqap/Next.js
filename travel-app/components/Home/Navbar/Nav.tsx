"use client";

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBgColor, setNavBgColor] = useState(false)

    useEffect(() => {
        const navBgColorHandler = () => {
            if (window.scrollY >= 90) setNavBgColor(true)

            if (window.scrollY < 90) setNavBgColor(false)

        }
        window.addEventListener('scroll', navBgColorHandler)

        return () => window.removeEventListener('scroll', navBgColorHandler)
    }, [])

    return (
        <div className={`${navBgColor ? 'bg-cyan-700 shadow-md' : 'fixed'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                {/* Logo */}
                <div className='flex items-center space-x-2 cursor-pointer'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex flex-col items-center justify-center'>
                        <TbAirBalloon className='w-6 h-6 text-white' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Let&apos;s Go</h1>
                </div>
                {/* NavLilnks */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id}>
                                <p className='relative text-white text-base font-medium w-fit block after:block 
                                after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full 
                                after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 hover:after:origin-right'
                                >{link.label}</p>
                            </Link>
                        )
                    })}
                </div>
                {/* button */}
                <div className='flex items-center space-x-4'>
                    <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-900 transition-all duration-200 '>Book Now</button>
                </div>
                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div >
    )
}

export default Nav