import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Product from './Product'
import BuyCart from './BuyCart'
import WishList from './WishList'
import OrderSummry from './OrderSummry'
import OrderPlace from './orderPlace/OrderPlace'



const Home = () => {

  
  //{SEARCH to the item by typing LATTER}
  const [searchItem, setSearchItem] = useState("");
  //{For WishList & BuyCart panel close and open }
  const [activePannel, setActivePannel] = useState(null)
  // {ADD item in the Add to Card Panel}
  const [card, setCard] = useState(()=>{
    const storeCard = localStorage.getItem("card");
    return storeCard ? JSON.parse(storeCard) : []
  })
  //{Wish_List that ADD the wishList_Item}
  const [wishListItems, setWishListItems] = useState(()=>{
    const storeWishList = localStorage.getItem("wishListItems");
    return storeWishList ? JSON.parse(storeWishList) : []
    })
  //{ORDER Summry State}
  const [OrderSummary, setOrderSummary] = useState(false)
  //Order_is_Placed state
  const [orderplaced, setOrderPlaced] = useState(false)




//***********{Local_Storage that is used to store card} */
  useEffect (()=>{
   
    localStorage.setItem('card', JSON.stringify(card));
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems));
  },[card,wishListItems])



  //========>{reached to the product INCETANTLY by focusing on SEARCH tab }
  const handleScroll = () => {
    const section = document.getElementById("product-section")

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  };

  //=======>{HANDLE_PANEL is for BUY_CART & WISHLIST TOGGLE PANNEL}
  const handlePannel = (tabName) => {
    setActivePannel(prev => (prev === tabName ? null : tabName))
  };

  //=======>{ADD_TO_CARD Function}
  const addToCard = (productItem) => {

    const alreadyAdded = card.find((item) => item.id === productItem.id);
    if (alreadyAdded) {
      alert("item already Added")
      return;
    }
    //This will Also workes and choose one in this Two
    // setCard(prev=>[
    //   ...prev,{...product, quantity:1}
    // ])
    setCard([...card, { ...productItem, quantity: 1 }])
  };


  const addToCardEmpty = () => {
    setCard([])
    setOrderSummary(false)
  };

  //=======>{DETELE Item from the BUY_CART by DELETE_BUTTON}
  const removeItem = (product) => {
    // console.log(product)
    setCard(card.filter((item) => item.id !== product.id));
  };

  //=======>INCREAMENT_$_DECREAMENT Quantity in Add_To_Card Panel
  const quantityIncreament = (id) => {
    // console.log(id)
    setCard(card.map((item) => {
      return (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    }))
  };
  const quantityDecreament = (id) => {
    // console.log(id)
    setCard(card.map((item) => {
      return (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    }))
  };

  //=====>{CALCULATION in BUY_CART of payment}
  const subTotal = card.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItemInBuyIcon = card.reduce((acc, item) => acc + item.quantity, 0)
  const wishListIcon_No = wishListItems.reduce((acc, item) => acc + item.quantity, 0)
  const shippingFee = totalItemInBuyIcon * 2;
  const grandTotal = shippingFee + subTotal;



  //==========>{item GO to WISH_LIST Function}

  const wishListClicked = (productItem) => {
    // console.log(product)

    const checkAlreadyAdded = wishListItems.find((item)=>item.id === productItem.id)

    if(checkAlreadyAdded){
      alert("Item Already Added")
      return;
    }
   const addDate = new Date().toLocaleDateString("en-GB");
    setWishListItems(prev => [
      ...prev, {...productItem, quantity:1, addDate}
    ])
  };
  // console.log(wishListItems)

    // {this is for some pranctice=>||}
    // const checkAlreadyAdded = wishListItems.some((item)=>item.id === productItem.id)

    // if(checkAlreadyAdded){
    //    setWishListItems(wishListItems.filter((item)=>item.id === productItem.id))

    //   }else setWishListItems( [
    //       ...wishListItems, {...productItem, quantity:1}
    //     ]);



  //=========> {WISH_LIST_ITEMS is delete}

  const deleteWishListItem = (productItem)=>{
            // console.log(productItem)
        setWishListItems(wishListItems.filter((item)=>item.id !== productItem.id));    
  };

  return (
    <div>
      <Navbar 
      handleScroll={handleScroll}
      setSearchItem={setSearchItem} 
      searchItem={searchItem}
      handlePannel={handlePannel} 
      activePannel={activePannel} 
      totalItemInBuyIcon={totalItemInBuyIcon} 
      wishListIcon_No={wishListIcon_No}
      />
      <Banner />

      <Product 
      searchItem={searchItem} 
      setSearchItem={setSearchItem} 
      handleScroll={handleScroll} 
      addToCard={addToCard} 
      wishListClicked={wishListClicked} 
      wishListItems={wishListItems}
      />

      <BuyCart 
      activePannel={activePannel} 
      closePannel={handlePannel} 
      card={card} 
      removeItem={removeItem} 
      quantityIncreament={quantityIncreament} 
      quantityDecreament={quantityDecreament} 
      subTotal={subTotal} shippingFee={shippingFee} 
      grandTotal={grandTotal} 
      closeOrderSummary={() => setOrderSummary(!OrderSummary)} 
      />

      <WishList 
      activePannel={activePannel} 
      closePannel={handlePannel} 
      wishListItems={wishListItems} 
      addToCard={addToCard}
      deleteWishListItem={deleteWishListItem}
      handlePannel={handlePannel}
     
      />

      {OrderSummary && 
      <OrderSummry 
      card={card} 
      subTotal={subTotal} 
      shippingFee={shippingFee} 
      grandTotal={grandTotal} 
      closeOrderSummary={() => setOrderSummary(!OrderSummary)} 
      addToCardEmpty={addToCardEmpty} 
      openOrderPlacePanel={() => setOrderPlaced(!orderplaced)} 
      />}

      {orderplaced && 
      <OrderPlace openOrderPlacePanel={() => setOrderPlaced(!orderplaced)} 
      />}
    </div>
  )
}

export default Home