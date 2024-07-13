"use client";
import React, { useState, useEffect } from "react";
import Morning from "../../../public/morningSun.svg";
import Afternoon from "../../../public/sunny.svg";
import Evening from "../../../public/moon.svg";
import Search from "../../../public/search.svg";
import Image from "next/image";

const Navbar = () => {
  const formatDateTime = (date: any) => {
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleDateString(undefined, dateOptions);
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions);
    return `${formattedDate}, ${formattedTime}`;
  };

  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(
    () => {
      const getGreeting = () => {
        const currentHour = time.getHours();
        //let greeting = '';
        if (currentHour >= 5 && currentHour < 12) {
          //greeting = 'Good morning';
          setGreeting("Good morning");
        } else if (currentHour >= 12 && currentHour < 18) {
          //greeting = 'Good afternoon';
          setGreeting("Good afternoon");
        } else {
          //greeting = 'Good evening';
          setGreeting("Good evening");
        }

        // return `${greeting}`;
      };
      getGreeting();

      //setGreeting(getGreeting());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [time]
  );

  return (
    <nav className="flex-1 bg-[#f8f7ff]  px-8 ">
      <div className="flex justify-between py-3 ">
        <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Search for anything here..."
          />
          <button className="">
            <Image className="w-5" src={Search} alt={"div icon"} />
          </button>
        </div>
        <div className="w-[160px] h-[40px]">
          <div className="flex">
            <Image
              className="w-5 mr-3"
              src={greeting === "Good evening" ? Evening : Afternoon}
              alt={"Image"}
            />
            <span className="font-medium text-[14px] text-[#1D242E]">
              {" "}
              {greeting}
            </span>
          </div>

          <div className="text-xs font-normal text-[#1D242E]">
            <span className="mr-3">{formatDateTime(currentDate)} </span>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
