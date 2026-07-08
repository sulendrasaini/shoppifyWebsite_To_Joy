import React from 'react'

const OrderPlace = ({openOrderPlacePanel}) => {
    return (
        <section className='bg-black/80 fixed inset-0 z-40 flex justify-center items-center'>
            <div className='bg-zinc-100 p-8 w-[500px] text-center rounded-lg border-2 border-zinc-400'>
                <h2 className='text-3xl text-green-600 font-bold pb-10'> Your Order is Placed !</h2>
                <h3 className='text-xl font-medium text-zinc-500'>Thanks for your Purchase !</h3>
                <button onClick={()=>openOrderPlacePanel()} className='text-lg text-white bg-red-500 px-6 py-3 rounded-xl font-bold mt-5 hover:scale-110 cursor-pointer border-1 '>Close</button>
            </div>
        </section>
    )
}

export default OrderPlace;