import React, { useContext, useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";


import { Link } from 'react-router-dom'
import { authContext } from "../Components/Context/auth_context"
import { LuLogOut } from 'react-icons/lu';
import userPhoto from "../assets/image/user_photo.jpg"

const Navbar = ({ handleScroll, setSearchItem, searchItem, handlePannel, activePannel, totalItemInBuyIcon, wishListIcon_No }) => {

  const [isScrolled, setIsScrolled] = useState(false)

  const { setCurrentUser, currentUser, users } = useContext(authContext)

  useEffect(() => {

    const handleScrolled = () => {
      // console.log(window.scrollY)
      setIsScrolled(window.scrollY > 20)

    }

    window.addEventListener("scroll", handleScrolled, { passive: true })
  }, []);


  return (
    <header className={`sticky top-0 z-30 w-full `}>
      <nav
        className={`
        max-w-[1000px]
        mx-auto
        mt-4
        
        rounded-full
        h-[14vh]

        bg-white/60
        backdrop-blur-3xl
        border
        border-white/30

        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        
        
        
        flex
        justify-between
        items-center
      ${isScrolled ? "scale-[0.80] py-2 " : "scale-100 py-4"}
        
        transition-all
        duration-300
        ease-out
        `}
      >

        {/* NAV-LOGO */}
        <div className='text-3xl font-bold pl-10 mb-2 '>
          <span>Sh</span>
          <span className='bg-linear-to-b to-green-800 from-green-300 text-transparent bg-clip-text'>O</span>
          <span>pcy</span>
        </div>
        {/* NAV-MANU */}
        <ul className="flex  justify-between items-center gap-5 text-zinc-00 text-lg font-semibold tracking-wide">


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
        <div className='flex  justify-between items-center '>
          <div className='shadow-sm  hover:shadow-lg px-4 border border-gray-300 hover:border-green-600  transition-all duration-300 ease-in-out" rounded-full h-[55px]  flex justify-center items-center '>

            <div className='flex'>
              <div className='text-2xl cursor-pointer text-gray-600 hover:text-green-700 transition-all duration-300  text-center'>
                <IoSearchSharp />
              </div>
              <input onChange={(e) => setSearchItem(e.target.value)} value={searchItem} type='search' placeholder='Searching Product ...' autoComplete='off' className='focus:outline-none px-4 ' onFocus={handleScroll} />
            </div>

          </div>

          <button onClick={() => handlePannel("wishlist")} className={`${activePannel === "wishlist" ? "text-red-600" : "text-zinc-700"} text-[1.7rem] px-2 cursor-pointer hover:scale-120 duration-300 relative `}>
            <FaHeart />
            {
              wishListIcon_No > 0 && <span className='text-[14px] text-white bg-red-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold absolute bottom-[-5px] right-[16px] border-2'>{wishListIcon_No}</span>
            }

          </button>

          <button onClick={() => handlePannel("card")} className={`${activePannel === "card" ? "text-green-600" : "text-zinc-700"} text-[1.8rem] cursor-pointer hover:scale-130 duration-300 relative`}>
            <IoBagHandleSharp />

            {/* <span className={`text-[14px] text-white  w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold absolute bottom-[-5px] right-[16px] border-2 ${totalItemInBagIcon === 0 ? " " : "bg-green-500"}`}>{totalItemInBagIcon === 0 ? "" : totalItemInBagIcon}</span> */}
            {
              totalItemInBuyIcon > 0 && <span className='text-[14px] text-white bg-green-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold absolute bottom-[-5px] right-[16px] border-2 p-1'>{totalItemInBuyIcon}</span>
            }
          </button>
        </div>




        <div className='flex gap-1 justify-center items-center  text-2xl pr-8'>
          {currentUser && users.map((item) => {
            return (
              <div className='flex flex-col justify-center items-center gap-1 '>
                <div className='h-10 w-10 rounded-full overflow-hidden border-1 border-red-700'>
                  <img src={userPhoto} alt="image" className='w-full h-full object-cover' />
                </div>
                <div className='text-red-800 text-[14px] text-center px-3 pb-2 uppercase'>Hi, {item.name}</div>
              </div>
            )
          })
          }

          {currentUser ? <div>
            <button onClick={() => setCurrentUser(null)}>
              <button className='font-bold text-3xl'>
                <LuLogOut />
              </button>

            </button>
          </div> :

            <Link to="/signin" className='text-green-600 font-bold text-xl  p-[6px] rounded-2x hover:scale-105  border-2 '>SignIn</Link>
          }

        </div>









      </nav>
    </header>
  )
}

export default Navbar;