"use client";

import React from "react";
import HealthBox from '../../../public/healthboxCard.svg'
import GreenShield from '../../../public/greenShield.svg'
import RedDanger from '../../../public/dangerShield.svg'

import { Button } from "../../../components/ui/button";

import SmallCard from "../_components/cards/smallCard";

const Inventory: React.FC = () => {
  const cards = [
    {
      id:1,
      title: "Card 3",
      content: "Content for Card 3",
      icon: HealthBox,
      button: "visit inventory",
      borderColor: 'border-[#03A9F5]',
      buttonBg: 'bg-[#03A9F5]'
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
    { 
      id:3,
      title: "Card 4", 
      content: "Content for Card 4", 
      icon:RedDanger, button: "resolve now" , 
      borderColor: 'border-[#F0483E]', 
      buttonBg:'bg-[#F0483E]'},
  ];
 
  return (
    <div className="h-screen bg-[#EDF1F5]">
     
        <div className="flex-1 space-y-4  p-8 pt-[30px]">
        <div className=" flex justify-between items-center space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Dashboard
            </h2>
            <p>
            A quick data overview of the inventory.
            </p>
          </div>
          <Button>
            Download Report
          </Button>
        </div>
        </div>

        <div className="flex flex-wrap  pb-[30px]">
          {cards.map((card, index) => (
            <SmallCard key={card.id} card={card} />
          ))}
        </div>
        
     
    </div>
  );
};

export default Inventory;
