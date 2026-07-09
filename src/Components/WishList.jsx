import React from 'react'
import image from "../assets/image/leather-jacket.png"
import { MdDeleteForever } from "react-icons/md";
import { FaAngellist } from "react-icons/fa6";


const WishList = ({ activePannel, closePannel, wishListItems, addToCard, deleteWishListItem,handlePannel }) => {


   const handleAddToItem_Button = (item) => {
    addToCard(item);
    deleteWishListItem(item);
};
    return (

        <section onClick={()=>closePannel()} className={`bg-black/50 fixed inset-0 transform-opacity ${activePannel === "wishlist" ? "opacity-100 visible" : "opacity-0 invisible"} `}>
        <div onClick={(e)=>e.stopPropagation()} className={`bg-zinc-100 fixed top-0 right-0 bottom-0 left-auto z-40 w-[350px]  border-2 border-green-200 transform ${activePannel === "wishlist" ? "translate-x-0" : "translate-x-full"} duration-500`}>

            {/* {HEADING} */}
            <h2 className='text-3xl font-bold text-zinc-800 text-center py-10 px-5 flex justify-center gap-4 items-center'>Your Wish Lists <div><FaAngellist /></div></h2>

            {/* {CART_DETAILS} */}
            <div className='flex items-center justify-between bg-white px-4 py-2 border-1 border-zinc-300 flex-col gap-3'>

                {/* {CART_IMAGE & TEXT} */}
                {
                    wishListItems.length === 0 ? <p className='text-2xl text-zinc-600 font-medium '>Your Wish List is Empty !</p> : wishListItems?.map((item, index) => {
                        return (

                            <div key={item.id} className={`flex border-b-2 w-full justify-between ${index%2 === 0 ? "bg-blue-100" : "bg-white"} `} >
                                <div className='flex items-center gap-2'>
                                    <div className='h-[9vh] w-[4vw]'>
                                        <img src={item.image} alt="image" className='w-full h-full object-contain ' />
                                    </div>
                                    <div className=''>
                                        <h4 className='text-[14px] font-bold'>{item.name}</h4>
                                        <span className='text-[15px] font-bold text-red-500 pr-5'>${item.price}</span>
                                        <span>{item.addDate}</span>
                                    </div>
                                </div>
                                {/* {DELETE_BUTTON & QUANTITIES_INCREASER} */}
                                <div className=' text-center  flex flex-col gap-2'>
                                    <button onClick={() => deleteWishListItem(item)} className='text-xl p-1 w-8 self-center flex justify-center bg-red-500 rounded-full text-taupe-200 border border-red-600'>
                                        <MdDeleteForever />
                                    </button>
                                    <button onClick={()=>handleAddToItem_Button(item)} className='text-[12px] tracking-tighter text-white font-medium bg-green-600 py-1 px-3 rounded-lg active:bg-blue-900 cursor-pointer'>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })

                }

                {/* {ORDER_BUTTON} */}
                <div className='absolute bottom-0 flex gap-3 justify-between items-center w-[18vw] pb-5'>
                    <button onClick={() => closePannel("wishlist")} className='bg-blue-700 text-[15px] px-6 py-2 rounded-2xl text-white flex-1 font-semibold cursor-pointer hover:scale-110 active:bg-blue-400'>Close</button>
                    <button onClick={()=>handlePannel("card")} className={`tracking-tighter text-[14px]  bg-blue-700 px-6 py-2 rounded-2xl text-white flex-1 font-semibold cursor-pointer hover:scale-110 active:bg-blue-400`}>Check Out</button>
                </div>

            </div>




        </div>
        </section>
    )
}

export default WishList;