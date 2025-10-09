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
        <nav className='fixed flex justify-between items-center p-4 px-8 bg-black bg-gradient-to-r from-slate-900 to-gray-800 font-anta sm:p-4 sm:px-24 top-0 w-full z-10 shadow-lg shadow-cyan-500/10 '>
            {/* logo */}
            <div className="text-3xl text-white font-anta cursor-pointer flex items-center gap-1 hover:text-4xl transition-all duration-1000 ease-in-out shadow-lg hover:shadow-cyan-500/2 hover:text-lg0">
                An <span className='text-cyan-400  text-4xl'>Z</span>ooL
            </div>
            {/* menu button */}
            <button className='z-20 absolute top-6 right-6'>
                {
                    open?<FaTimes className='text-white text-3xl lg:hidden' onClick={handleMenuButton} size={20}/>:<IoMdMenu className='text-white text-4xl lg:hidden' onClick={handleMenuButton} size={0}/>
                }
            </button>
            <ul className={`text-white absolute top-0 right-0 h-screen  bg-black bg-gradient-to-r from-slate-900 to-gray-800 p-12 gap-20 flex flex-col lg:flex-row lg:h-auto lg:static lg:bg-transparent ${open?"flex":"hidden"} lg:flex lg:gap-5  lg:p-0 text-sm lg:bg-none` }>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-1000 ease-in-out hover:text-lg'>Home</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>About</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Education</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Skills</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Projects</li>
                <li className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg'>Contact</li>
            </ul>
        </nav>  
    )
}
export default Navbar
