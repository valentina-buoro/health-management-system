"use client";

import React from "react";
import Revenue from '../../../public/revenueCard.svg'
import GreenShield from '../../../public/greenShield.svg'

import SmallCard from "../_components/cards/smallCard";



const Reports: React.FC = () => {
  const cards = [
    {
      id:2,
      title: "Card 2",
      content: "Content for Card 2",
      icon: Revenue,
      button: "view detailed report",
      borderColor: 'border-[#FED600]',
      buttonBg:'bg-[#FED600]'
    },
    {
      id:2,
      title: "Good",
      content: "Inventory Status",
      icon: GreenShield,
      button: "view detailed report",
      borderColor:'border-[#01A768]',
      buttonBg:'bg-[#01A768]'
    },
  
  ];
 
  return (
    <>
     
        <div className="flex-1 space-y-4 bg-[#EDF1F5]  p-8 pt-[30px]">
        <div className=" flex justify-between items-center space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Reports
            </h2>
            <p>
            Overall reports related to the pharmacy
            </p>
          </div>
         
        </div>
        </div>

        <div className="flex flex-wrap  bg-[#EDF1F5] pb-[30px]">
          {cards.map((card, index) => (
            <SmallCard key={card.id} card={card} />
          ))}
        </div>
        
     
    </>
  );
};

export default Reports;
