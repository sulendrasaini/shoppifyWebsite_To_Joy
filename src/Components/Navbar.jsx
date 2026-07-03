import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-999 w-full'>
      <nav
        className="
        max-w-[1300px]
        mx-auto
        mt-4
        px-10
        py-4
        rounded-full

        bg-white/60
        backdrop-blur-xl
        border
        border-white/30

        shadow-[0_20px_60px_rgba(0,0,0,0.3)]

        flex
        justify-between
        items-center

        transition-all
        duration-300
        "
      >

        {/* NAV-LOGO */}
        <div className='text-3xl font-bold p-5 '>
          <span>Sh</span>
          <span className='bg-gradient-to-b to-green-800 from-green-300 text-transparent bg-clip-text'>O</span>
          <span>pcy</span>
        </div>
        {/* NAV-MANU */}
        <ul className="flex p-5 justify-between items-center gap-15 text-zinc-00 text-lg font-semibold tracking-widest">


          <li>
            <a 
              href="#"
              className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full"
            >
              Process
            </a>
          </li>

          <li>
            <a
              href="#"
              className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-600 hover:after:w-full"
            >
              Contact
            </a>
          </li>

        </ul>
        {/*NAV-SEARCHING  */}
        <div className='flex gap-6 justify-between items-center '>
          <div className='shadow-sm  hover:shadow-lg px-5 border border-gray-300 hover:border-green-300  transition-all duration-300" rounded-full h-[60px]  flex justify-center items-center '>

            <div className='flex'>
              <div className='text-3xl cursor-pointer text-gray-600 hover:text-green-700 transition-all duration-300  text-center'>
                <IoSearchSharp />
              </div>
              <input type='search' placeholder='Searching Product ...' autoComplete='off' className='focus:outline-none px-4 pr-10' />
            </div>

          </div>

          <button className='text-[1.7rem] text-zinc-700 hover:text-red-600 relative '>
            <FaHeart />
            <span className='text-[14px] text-white bg-red-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold absolute bottom-[-5px] right-[16px] border-2'>2</span>
          </button>

          <button className='text-[1.7rem] text-zinc-700 hover:text-green-700 relative'>
            <IoBagHandleSharp />
            <span className='text-[14px] text-white bg-green-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold absolute bottom-[-5px] right-[16px] border-2'>5</span>
          </button>


        </div>




      </nav>
    </header>
  )
}

export default Navbar;