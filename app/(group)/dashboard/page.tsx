"use client";

import React from "react";
import Revenue from "../../../public/revenueCard.svg";
import HealthBox from "../../../public/healthboxCard.svg";
import GreenShield from "../../../public/greenShield.svg";
import RedDanger from "../../../public/dangerShield.svg";

import { Button } from "../../../components/ui/button";
import Navbar from "../_components/navbar";

import SmallCard from "../_components/cards/smallCard";
import LongCard from "../_components/cards/longCard";

const CardRow: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Good",
      content: "Inventory Status",
      icon: GreenShield,
      button: "view detailed report",
      borderColor: "border-[#01A768]",
      buttonBg: "bg-[#01A768]",
      //backgroundColor:'bg-[#fff]'
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content for Card 2",
      icon: Revenue,
      button: "view detailed report",
      borderColor: "border-[#FED600]",
      buttonBg: "bg-[#FED600]",
      //backgroundColor:'bg-[#fff]'
    },
    {
      id: 3,
      title: "Card 3",
      content: "Content for Card 3",
      icon: HealthBox,
      button: "visit inventory",
      borderColor: "border-[#03A9F5]",
      buttonBg: "bg-[#03A9F5]",
      // backgroundColor:'bg-[#fff]'
    },
    {
      id: 4,
      title: "Card 4",
      content: "Content for Card 4",
      icon: RedDanger,
      button: "resolve now",
      borderColor: "border-[#F0483E]",
      buttonBg: "bg-[#F0483E]",
      //backgroundColor:'bg-[#fff]'
    },
  ];
  const cards2 = [
    {
      id: 1,
      title: "Card 1",
      content: "Content for Card 1",
      button: "view detailed report",
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content for Card 2",
      button: "view detailed report",
    },
    {
      id: 3,
      title: "Card 3",
      content: "Content for Card 3",
      button: "visit inventory",
    },
    {
      id: 4,
      title: "Card 4",
      content: "Content for Card 4",
      button: "resolve now",
    },
  ];

  return (
    <>
    <div className="h-[80px] fixed inset-y-0 w-full md:pr-56 z-50 "> 
        <Navbar/>
      </div>
      <div className="flex-1 space-y-4 bg-gradient-to-t from-[#04619C] from-0% to-[#2C8FA0] to-100% text-white  mt-20 px-8 pt-[30px] mb-8 ">
        <div className=" flex justify-between items-center space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p>A quick data overview of the inventory.</p>
          </div>
          <Button>Download Report</Button>
        </div>
      </div>

      <div className="flex justify-between  pb-[30px] overflow-x-scroll">
        {cards.map((card, index) => (
          <SmallCard key={card.id} card={card} />
        ))}
      </div>
      <div className="flex-1 flex-wrap  pt-[35px]   ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] ">
          {cards2.map((card) => (
            <LongCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardRow;
