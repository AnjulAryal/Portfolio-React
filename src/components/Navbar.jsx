import React from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    function handleMenuButton() {
        setOpen(!open);
    }
    return (
        <nav className='relative flex justify-between items-center p-4 px-8 bg-black bg-gradient-to-r from-slate-900 to-gray-800 font-anta sm:p-4 sm:px-24'>
            {/* logo */}
            <div className="text-3xl text-white font-anta cursor-pointer flex items-center gap-1 hover:text-4xl transition-all duration-1000 ease-in-out shadow-lg hover:shadow-cyan-500/2 hover:text-lg0">
                An <span className='text-cyan-400  text-4xl'>Z</span>ooL
            </div>
            {/* menu button */}
            <button className='z-20 absolute top-6 right-6'>
                {
                    open?<FaTimes className='text-white text-3xl sm:hidden' onClick={handleMenuButton} size={20}/>:<IoMdMenu className='text-white text-4xl sm:hidden' onClick={handleMenuButton} size={0}/>
                }
            </button>
            <ul className={`text-white absolute top-0 right-0 h-screen  bg-black bg-gradient-to-r from-slate-900 to-gray-800 p-12 gap-20 flex flex-col sm:flex-row sm:h-auto sm:static sm:bg-transparent ${open?"flex":"hidden"} sm:flex sm:gap-5  sm:p-0 text-sm sm:bg-none` }>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-1000 ease-in-out hover:text-lg'>Home</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>About</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Services</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Portfolio</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Contact</li>
            </ul>
        </nav>  
    )
}
export default Navbar
