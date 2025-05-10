import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <nav className="border-b border-gray-200 hidden sm:block">
        <div className="container py-3">
            <div className='flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'>
                <div className='hidden lg:flex gap-2'>
                    <button className="header_top_icon_wrapper hover:scale-105 transition-transform">
                        <FaFacebook />
                    </button>
                    <button className="header_top_icon_wrapper hover:scale-105 transition-transform">
                        <FaXTwitter />
                    </button>
                    <button className="header_top_icon_wrapper hover:scale-105 transition-transform">
                        <FaLinkedinIn />
                    </button>
                </div>
                <div className='text-gray-500 text-[12px] sm:text-sm font-medium'>
                    <b className="text-accent">Free Shipping </b>on Orders Above 499
                </div>
                <div className="flex gap-4">
                    <select 
                        className="text-gray-500 text-[12px] sm:text-sm w-[80px] bg-transparent border border-gray-200 rounded-md p-1 focus:outline-none focus:border-accent" 
                        name="currency" 
                        id="currency"
                    >
                        <option value="USD">USD </option>
                        <option value="EUR">EUR </option>
                        <option value="INR">INR</option>
                    </select>
                    <select 
                        className="text-gray-500 text-[12px] sm:text-sm w-[80px] bg-transparent border border-gray-200 rounded-md p-1 focus:outline-none focus:border-accent" 
                        name="language" 
                        id="language"
                    >
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default HeaderTop