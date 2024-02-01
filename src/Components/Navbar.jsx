import React from 'react'
import whatsapp from '../assets/images/whatsapp.png'
import nig from '../assets/images/nigeria.png'

const Navbar = () => {
    return (
        <div className='bg-[#F7F6F4] px-6 py-4'>
            <nav className='mx-auto lg:px-20 flex items-center justify-between'>
                <div className='hidden lg:flex items-center space-x-10'>
                    <a href="#" className='text-xs font-bold text-darkGray'>Cost Calculator</a>
                    <a href="#" className='text-xs font-bold text-darkGray'>Discover Store</a>
                    <a href="#" className='text-xs font-bold text-darkGray'>Track Orders</a>

                </div>

                <div className='flex items-center justify-between w-full lg:w-1/2'>
                    <a href="#" className='flex text-xs font-bold text-darkGray'><span className='hidden lg:flex'>Need help? Call:</span> <span className='text-[#1DA1F2]'>+2348091084333</span></a>
                    <a href="#" className='text-xs font-bold text-darkGray'>
                        <img src={whatsapp} className='h-12 w-12' alt="" />
                    </a>
                    <a href="#" className='flex items-center space-x-3 border px-4 py-2 rounded-full  text-xs font-medium    text-darkGray'>
                        <img src={nig} className='h-5 w-5' alt="" />
                        <span>Nigeria</span>
                    </a>

                </div>

            </nav>

        </div>
    )
}

export default Navbar