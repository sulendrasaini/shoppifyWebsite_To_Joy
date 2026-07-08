import React, { useState } from 'react'

import productLists from "../Components/productList/Product.js"
import Cards from './cards/Cards.jsx'





const Product = ({searchItem, setSearchItem, handleScroll, addToCard, wishListClicked, wishListItems}) => {

    const [activeTab, setActiveTab] = useState("All")

    const categories = ["All", "Men", "Women", "Kids", "New Arrival", "Offer"]

    // TAb_Toggling
    const renderTabs = categories.map((tab) => {
        
        return (
            <button onFocus={handleScroll} key={tab} onClick={() =>{ setActiveTab(tab), setSearchItem("")}} className={`text-lg cursor-pointer px-8 py-2 rounded-full font-serif font-bold tracking-tight shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:scale-110 ${activeTab === tab ? "bg-green-600 text-white " : "bg-zinc-300 "} `}>
                {tab}

            </button>
        )
    });


    //   PRODUCT-LIST_RENDERING

    // {METHOD_1---This is old and best way to manage tabs}
    // const filterItems = activeTab === "All" ? productLists : productLists.filter((item) =>{ return((item.category === activeTab))})
    // const filterItems = activeTab === "All" ? productLists : activeTab === "New Arrival" ? productLists.filter((item) => item.newArrival) : activeTab === "Offer" ? productLists.filter((item) => item.onSale) : productLists.filter((item) => item.category === activeTab)

    //{METHOD_2----This is not Indrusty level code}
            // [short]
    // const filterItems = productLists.filter((item) =>activeTab === "All"  ?  productLists : activeTab === item.category )
            // [Long]
//     const filterItems = productLists.filter((item) =>
//         (activeTab === "All") ||
//          (activeTab === "New Arrival" && item.newArrival) ||
//          (activeTab === "Offer" && item.onSale) ||
//          (activeTab === item.category)
    
// )

//{METHOD_3--- if condition}
   let filterItems;

    if(activeTab === "All"){
        filterItems = productLists;}
    else if(activeTab === "New Arrival"){
        filterItems = productLists.filter((item)=>item.newArrival)
    }else if(activeTab ==="Offer"){
        filterItems = productLists.filter((item)=>item.onSale)
    }else{
        filterItems = productLists.filter((item)=>item.category === activeTab)
    };
     
    const searching = searchItem.toLowerCase();
    filterItems = filterItems.filter((item)=>item.name.toLowerCase().includes(searching));

    const renderProductLists = filterItems.map((product) => {
        return (
            // CARD 
            <div key={product.id}>
                <Cards id={product.id} image={product.image} name={product.name} price={product.price} onSale={product.onSale} newArrival={product.newArrival} oldPrice={product.oldPrice} addToCard={addToCard} product={product} wishListClicked={wishListClicked} wishListItems={wishListItems}/>
            </div>
        )
    })

    return (
        <section id='product-section' className='max-w-[1300px] px-10 m-auto py-15'>

            {/* Tabs */}
            <div className='flex gap-5 justify-center '>
                {renderTabs}
            </div>

            {/* Product Listing */}
            <div className=' grid grid-cols-4 gap-10 py-10 ' >
               {filterItems.length === 0 ? <p className='text-center col-span-4 text-3xl font-semibold py-10'>Product not found!</p>: renderProductLists}
            </div>

        </section>
    )
}

export default Product;

