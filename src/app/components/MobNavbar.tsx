import React from 'react'
import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMenuOutline } from 'react-icons/io5'

const MobNavbar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]'>
        <div className='flex justify-between items-center text-[28px] py-4'>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <IoMenuOutline/>
            </button>
            <div className='relative p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <HiOutlineShoppingBag/>
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
            </div>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <AiOutlineHome/>
            </button>
            <div className='relative p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <FiHeart/>
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
            </div>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <AiOutlineAppstore/>
            </button>
        </div>
    </div>
  )
}

export default MobNavbar