import React from 'react'

const OrderSummry = ({ card, subTotal,shippingFee, grandTotal, closeOrderSummary,addToCardEmpty,openOrderPlacePanel }) => {

//     console.log({
//   card,
//   subTotal,
//   shippingFee,
//   grandTotal
// });

const closeOrderSummaryDailog = ()=>{
      addToCardEmpty ()
       closeOrderSummary()
       openOrderPlacePanel()
};
    return (
        <section onClick={()=>closeOrderSummary()} className={`bg-black/80 fixed inset-0 z-40 flex justify-center items-center`} >
            <div onClick={(e)=>e.stopPropagation()} className='bg-zinc-100 p-8 w-[600px] rounded-lg border-2 border-zinc-400'>
                <h2 className='text-4xl text-zinc-800  font-bold mb-5 text-center'>Order Summary</h2>

                <div className='flex justify-center flex-col items-cen pt-10 '>
                    <div className= 'pb-10 border-b-1 '>
                        {
                            card.map((item) => {
                                return(
                                <div key={item.id} className='flex justify-between px-10 text-1 font-medium'>
                                    <span className='text-zinc-800 py-2 '>{item.name}-(${item.price} *{item.quantity})</span>
                                    <span className='text-zinc-800 py-2'>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                                )})
                        }
                    </div>

                    <div className=' flex flex-col gap-y-5 mt-5'>

                        <div className='flex justify-between px-10'>
                            <span className='text-zinc-700 font-bold text-xl '>subTotal</span>
                            <span className='text-zinc-700 font-bold text-xl'>${subTotal.toFixed(2)}</span>
                        </div>


                        <div className='flex justify-between px-10 w-full'>
                            <span className='text-zinc-700 font-bold text-xl '>Shipping Handling Fee</span>
                            <span className='text-zinc-700 font-bold text-xl'>${shippingFee.toFixed(2)}</span>
                        </div>


                        <div className='flex justify-between px-10 py-1 w-full text-blue-500 border-y-1 '>
                            <span className=' font-bold text-xl'>Grand Total</span>
                            <span className=' font-bold text-xl'>${grandTotal.toFixed(2)}</span>
                        </div>

                    </div>

                      <div className=' flex  gap-5 pt-5'>
                        <button onClick={()=>closeOrderSummary()} className='flex-1 bg-green-700 text-xl text-white rounded-lg px-10 py-2 font-bold hover:bg-green-800 cursor-pointer'>Cancel</button>
                        <button onClick={closeOrderSummaryDailog} className='flex-1 text-xl bg-green-700 text-white rounded-lg px-8 py-2 font-bold hover:bg-green-800 cursor-pointer tracking-tighter'>Order Now</button>
                      
                      </div>



                </div>
            </div>
        </section>
    )
}

export default OrderSummry