import React from 'react'
import BannerImage from "../assets/image/Banner.jpg"

const Banner = () => {
    return (
        <section className='max-w-[1300px] px-10 m-auto mt-[19vh]'>
            <div className='relative h-[60vh]'>
                <img src={BannerImage} alt="image" className='w-full h-full object-cover object-top   ' />
            </div>
            <div className='absolute top-60'>
                <h1 className='text-7xl font-bold text-red-700 uppercase tracking-tight '>BIG BILLEAN SALE!</h1>
                <h3 className=' text-xl py-4'>Up to 80% OFF Limited Time Offere Only!</h3>
                <h2 className='text-6xl font-bold text-zinc-800 py-5 flex gap-2'>
                    <span className='bg-zinc-800 text-white p-2'>03</span>:
                    <span className='bg-zinc-800 text-white p-2'>15</span>:
                    <span className='bg-zinc-800 text-white p-2'>42</span>
                   
                </h2>
            </div>
        </section>

    )
}

export default Banner