"use client"
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-4 sm:py-6'>
        <div className='container flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <div className="font-bold text-3xl sm:text-4xl text-center text-black">
                Shoopy
            </div>
            <div className="w-full sm:w-[300px] md:w-[70%] relative">
                <input 
                    className='border-gray-200 border p-2 px-4 rounded-lg w-full focus:outline-none focus:border-accent transition-colors' 
                    type='text' 
                    placeholder='Enter any product'
                />
                <button className="absolute right-0 top-0 mr-4 mt-3 text-gray-400 hover:text-accent transition-colors">
                    <BsSearch className="size-5" />
                </button>
            </div>
            <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
                <button className='hover:text-accent transition-colors'>
                    <BiUser/>
                </button>
                <div className='relative'>
                    <button className='hover:text-accent transition-colors'>
                        <FiHeart/>
                    </button>
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[19px] h-[19px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
                </div>
                <div className='relative'>
                    <button className='hover:text-accent transition-colors'>
                        <HiOutlineShoppingBag/>
                    </button>
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[19px] h-[19px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain