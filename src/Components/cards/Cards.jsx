import React, { useState } from 'react'
// import ProductLists from "../../Components/productList/Product"

import { FaHeart } from "react-icons/fa6";
import WishList from '../WishList';


const Cards = ({ image, name, price, id, onSale, newArrival, oldPrice, product, addToCard,wishListClicked, wishListItems}) => {

    // const [likedItem, setLikedItem] = useState([])

    // const toggleLike = (id) => {

    //     if (likedItem.includes(id)) {
    //         setLikedItem(likedItem.filter(item => item !== id))
    //     } else {
    //         setLikedItem([...likedItem, id])
    //     }
    // };

    
    const handleClickOnHeart = ()=>{
        // toggleLike(id)
        wishListClicked(product)
    };


    return (
        <>

            <div className='bg-zinc-300 rounded-2xl'>
                {/* HEART & SALE */}
                <div className='flex justify-between items-center p-5'>
                    {/* {This is for Heart_Toggle_with_red and it is collected in the toggleLike_Varible}---{but the same work that code line ispresent in below} */}
                    {/* <button onClick={handleClickOnHeart }  className={`text-2xl cursor-pointer ${likedItem.includes(id) ? "text-red-500" : "text-zinc-500"} hover:scale-125 duration-150`}> <FaHeart /></button> */}
                    <button onClick={handleClickOnHeart }  className={`text-2xl cursor-pointer ${wishListItems.some((item)=>item.id === product.id) ? "text-red-500" : "text-zinc-500"} hover:scale-125 duration-150`}> <FaHeart /></button>
                    <div className=''>
                        {(onSale || newArrival) && (<span className={`text-white rounded-2xl font-medium py-1 px-3 ${onSale ? "bg-red-500" : "bg-green-600"}`}>{onSale ? "40%" : "New"}</span>)}
                    </div>
                </div>

                {/* IMAGE */}
                <div className='text-center'>
                    <img src={image} alt="image" className='h-[30vh] w-full object-cover' />
                    {/* CONTENT_PART */}
                    <h3 className=' pt-3 text-xl font-bold tracking-tight'>
                        {name}
                    </h3>

                        {
                            onSale && (
                                <span className={` text-zinc-500 font-bold pt-2 px-3 line-through text-[20px]`}>${oldPrice.toFixed(2)}</span>)
                        }
                        <span className={` text-red-500 font-bold text-[22px] pt-2 `}>${price.toFixed(2)}</span>

                    
                    <div className='px-10 py-4 '> <button onClick={()=>addToCard(product)} className='bg-green-600 text-[17px] font-medium text-center py-2 px-5 rounded-2xl text-white hover:scale-y-110 hover:bg-green-700 duration-200'>Add to Cardd</button> </div>
                </div>

            </div>
        </>

    )
}


export default Cards;





