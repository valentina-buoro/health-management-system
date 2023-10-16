"use client";
// CardRow.tsx

import React from "react";
//import Card from '../../../components/card/card';
import CardGrid from "../../../components/card/longCard/longCard";

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

const CardRow: React.FC = () => {
  const cards = [
    {
      title: "Card 1",
      content: "Content for Card 1",
      button: "view detailed report",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
      button: "view detailed report",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
      button: "visit inventory",
    },
    { title: "Card 4", content: "Content for Card 4", button: "resolve now" },
  ];
  const cards2 = [
    {
      title: "Card 1",
      content: "Content for Card 1",
      button: "view detailed report",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
      button: "view detailed report",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
      button: "visit inventory",
    },
    { title: "Card 4", content: "Content for Card 4", button: "resolve now" },
  ];

  return (
    <>
      <div className=" w-4/5 ">
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
            <Card key={index} className="w-[212px] ">
              <CardHeader className="items-center">
                <Image src="" alt="hii" />
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="">{card.content}</CardContent>
              <CardFooter className="w-full h-[27px] p-0 bg-red-800">
                <Button className="w-full h-full rounded-none">
                  {card.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex-1 flex-wrap  pt-[35px] ">
          <div  className="grid grid-cols-2 gap-[26px] ">
          {cards2.map((card, index) => (
            <Card key={index} >
              <CardTitle>{card.title}</CardTitle>
              <CardHeader className="items-center">
                <Button className="w-full h-full rounded-none">
                  {card.button}
                </Button>
              </CardHeader>
              <CardContent className="">{card.content}</CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRow;
