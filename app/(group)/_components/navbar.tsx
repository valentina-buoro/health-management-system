"use client"
import React, { useState,useEffect } from 'react'

const Navbar = () => {
  const d = new Date();
  let date = d.toLocaleDateString();
  let actualTime = d.toLocaleTimeString()

  
  const [greeting, setGreeting] = useState('')
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setGreeting(getGreeting());
  }, [time]);

  const getGreeting = () => {
    const currentHour = time.getHours();
    let greeting = '';
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    

    return `${greeting}`;
  };


  
  return (
    <div className='flex-1 bg-[#F7FAFD]  px-8 pt-[30px]'>
     <div className='flex justify-between'>
     <div>
        <input/>
      </div>
      <div>
        <p>
         {greeting}
        </p>
        <div>
          <span>{date} </span>
          <span>{actualTime} </span>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar