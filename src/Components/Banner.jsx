import React, { useEffect, useState } from 'react'
import BannerImage from "../assets/image/Banner.jpg"

const Banner = () => {

      const initialTime = 5 * 60 * 60;

      const[timeLeft, setTimeLeft] = useState(()=>{
        const storedTime = localStorage.getItem("remainingTime")
        return storedTime && parseInt(storedTime, 10) > 0 ? parseInt(storedTime, 10) : initialTime;
      });


      const formatTime = (time)=>{

        useEffect(()=>{

            if(timeLeft <= 0 ) return;
          
            const timer = setInterval(()=>{
             
                setTimeLeft(prev=>{
            if(prev <= 1){
                clearInterval(timer);
               localStorage.setItem("remainingTime", 0)
                return 0;

            }

                    const remainingTime = prev - 1
                    localStorage.setItem("remainingTime", remainingTime)
                    return remainingTime;
                })

            }, 1000)

            return ()=> clearInterval(timer)

        },[timeLeft])
        
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return{
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(seconds).padStart(2, "0")
        }
      };

     const{hours, minutes, seconds} = formatTime(timeLeft);

    return (
        <section className='max-w-[1100px] px-10 m-auto mt-[5vh]'>
            <div className='relative h-[60vh]'>
                <img src={BannerImage} alt="image" className='w-full h-full object-cover object-top   ' />
            </div>
            <div className='absolute top-60'>
                <h1 className='text-7xl font-bold text-red-700 uppercase tracking-tight '>BIG BILLEAN SALE!</h1>
                <h3 className=' text-xl py-4'>Up to 80% OFF Limited Time Offere Only!</h3>
                <h2 className='text-6xl font-bold text-zinc-800 py-5 flex gap-2'>
                    <span className='bg-zinc-800 text-white p-2'>{hours}</span>:
                    <span className='bg-zinc-800 text-white p-2'>{minutes}</span>:
                    <span className='bg-zinc-800 text-white p-2'>{seconds}</span>
                   
                </h2>
            </div>
        </section>

    )
}

export default Banner