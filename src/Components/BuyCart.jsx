import React from 'react'
// import image from "../assets/image/leather-jacket.png"
import { MdDeleteForever } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const BuyCart = ({ activePannel, closePannel, card ,removeItem , quantityIncreament, quantityDecreament, subTotal, shippingFee, grandTotal,  closeOrderSummary}) => {


  
    return (

        <div className={`bg-zinc-300 fixed top-0 right-0 bottom-0 left-auto z-40 w-[350px] border-2 border-green-200 transform ${activePannel === "card" ? "translate-x-0" : "translate-x-full"} duration-500`}>

            {/* {HEADING} */}
            <h2 className='text-3xl font-bold text-zinc-800 text-center py-5 flex items-center justify-center gap-5'> Your Cart <div className='text-3xl'> <MdShoppingCart /></div></h2>


            {/* {CART_DETAILS} */}
            <div className=' flex items-center bg-white px-5 py-2 border-y-1 border-blue-300 flex-col gap-3 overflow-y-auto'>

                {/* {CART_IMAGE & TEXT} */}
               {
                card.length === 0 ? <p className='text-2xl text-zinc-600 font-medium'>You Cart Is Empty ! </p>  :  card.map((item) => {
                    return (
                        <div key={item.id} className=' flex items-center justify-between border-b-1  w-full '>
                            <div className='flex gap-3 items-center'>
                                <div className='h-[9vh] w-[4vw]'>
                                    <img src={item.image} alt="image" className='w-full h-full object-contain ' />
                                </div>
                                <div className=''>
                                    <h4 className='text-[14px] font-bold'>{item.name}</h4>
                                    <div className='flex gap-3 '>
                                        {
                                            item.onSale && (
                                                <span className={` text-zinc-500 font-bold pt-2 line-through text-[14px]`}>${item.oldPrice.toFixed(2)}</span>)
                                        }
                                        <span className={` text-red-500 font-bold text-[14px] pt-2 `}>${item.price.toFixed(2)}</span>

                                    </div>

                                </div>

                            </div>



                            {/* {DELETE_BUTTON & QUANTITIES_INCREASER} */}
                            <div className=' text-center'>
                                <button onClick={()=>removeItem(item)} className='text-xl p-1 cursor-pointer hover:scale-110 active:bg-red-900 bg-red-500 rounded-full text-taupe-200 border border-red-600'>
                                    <MdDeleteForever />
                                </button>
                                <div className='flex flex-row items-center gap-1'>
                                    <button onClick={()=>quantityDecreament(item.id)} className='text-[18px] cursor-pointer text-green-600'><FaMinusCircle /></button>
                                    <p className='text-[15px]'>{item.quantity}</p>
                                    <button onClick={()=>quantityIncreament(item.id)} className='text-[18px] cursor-pointer text-green-600'><FaPlusCircle /></button>

                                </div>
                            </div>
                        </div>
                    )
                })
               }


            </div>

            {/* {PAYMENT_SUMMARY} */}
            <div className='px-5 absolute bottom-0 pb-5  w-full border-t-2 border-black flex justify-center items-center flex-col bg-zinc-300 '>
                <div className=" w-full mt-3 ">
                    <div className='flex justify-between text-zinc-800 py-1 text-[15px] font-medium '>
                        <div>Subtotal</div>
                        <div>${subTotal.toFixed(2)}</div>
                    </div>
                    <div className='flex justify-between text-zinc-800 py-1 text-[15px] font-medium '>
                        <div>Shipping & Handlings</div>
                        <div>${shippingFee.toFixed(2)}</div>
                    </div>
                    <div className="border-y border-zinc-400"></div>
                    <div className='flex justify-between text-blue-800 py-1 text-[15px] font-bold '>
                        <div>Order Total</div>
                        <div>${grandTotal.toFixed(2)}</div>
                    </div>
                </div>

                {/* {ORDER_BUTTON} */}
                <div className='flex gap-3 justify-between items-center text-center pt-5 w-[18vw]'>
                    <button onClick={() => closePannel("card")} className='bg-blue-700 text-[15px] px-6 py-2 rounded-2xl text-white flex-1 font-semibold cursor-pointer active:bg-blue-400'>Close</button>
                    <button onClick={()=>closeOrderSummary()} className={`tracking-tighter text-[14px] ${card.length===0 ? "bg-zinc-500 cursor-not-allowed" : "bg-blue-700 cursor-pointer" } px-6 py-2 rounded-2xl text-white flex-1 font-semibold  active:bg-blue-400`}>Check Out</button>
                </div>

            </div>


        </div>
    )
}

export default BuyCart;