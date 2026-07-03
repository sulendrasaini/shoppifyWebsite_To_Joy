import React, { useState } from 'react'
import ProductList from "../Components/productList/Product.js"

import { FaHeart } from "react-icons/fa6";

const Product = () => {

    const [activeTab, setActiveTab] = useState("All")

    const categories = ["All", "Mens", "Womens", "Kids", "New Arrivals",]

    const renderTabs = categories.map((tab) => {
        return (

            <button key={tab} className={`text-lg cursor-pointer px-8 py-2 rounded-full font-serif font-bold tracking-tight shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:scale-110 ${activeTab === tab ? "bg-green-600 text-white ": "bg-zinc-300 " } `} onClick={() => setActiveTab(tab)} >
                {tab}
            </button>
        )
    });


    const renderProductLists = ProductList.map((product)=>{
        return(
            <div className='bg-red-300'>
                <div className='flex  justify-between items-center p-5'> 
                <FaHeart className='text-2xl' />
                <div className='bg-red-500 text-white rounded-2xl font-medium py-1 px-3'>Sale</div>
                </div>
                
                <div>
                    <img src={product.image} alt="image" />
                </div>
               <span className='self-center'>{product.name}</span>

               </div>
        )
    });

    return (
        <section className='max-w-[1300px] px-10 m-auto py-15'>

            {/* Tabs */}
            <div className='flex gap-5 justify-center '>
                {renderTabs}
            </div>

            {/* Product Listing */}
            <div className=' grid grid-cols-4 gap-10 py-10'>
                {renderProductLists}
            </div>

        </section>
    )
}

export default Product;

