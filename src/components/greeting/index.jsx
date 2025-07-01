import React, { useEffect, useState } from 'react'

function Greeting() {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 2000);
    return () => clearInterval(timer);
  }, []);
   const formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
   }
   console.log(formatDate(dateTime));

   const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
   }
   console.log(formatTime(dateTime));
  return (
    <div className='flex  justify-between  mt-5 px-8 text-white '>
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wider'>Good morning ,naveen</h1>
        <p className='text-[#ababab] text-sm'>Give your best service for your customer</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#f5f5f5] text-3xl font-bold '>{formatTime(dateTime)}</h1>
        <p className='text-[#ababab]'>{formatDate(dateTime)}</p>
      </div>
    </div>
  )
}

export default Greeting;
