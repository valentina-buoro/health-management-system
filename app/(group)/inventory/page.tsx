"use client";

import React from "react";
import Dashboard from '../../../public/dashboard.svg'
import Revenue from '../../../public/revenueCard.svg'
import HealthBox from '../../../public/healthboxCard.svg'
import GreenShield from '../../../public/greenShield.svg'
import RedDanger from '../../../public/dangerShield.svg'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../components/ui/navigation-menu";

import Image from "next/image";
import SmallCard from "../_components/cards/smallCard";
import LongCard from "../_components/cards/longCard";


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
    <>
     
        <div className="flex-1 space-y-4 bg-[#EDF1F5]  p-8 pt-[30px]">
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

        <div className="flex flex-wrap justify-between bg-[#EDF1F5] pb-[30px]">
          {cards.map((card, index) => (
            <SmallCard key={card.id} card={card} />
          ))}
        </div>
        
     
    </>
  );
};

export default Inventory;
