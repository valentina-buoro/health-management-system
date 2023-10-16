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
import Image from "next/image";

const CardRow: React.FC = () => {
  const cards = [
    { title: "Card 1", content: "Content for Card 1", button: "view detailed report" },
    { title: "Card 2", content: "Content for Card 2", button: "view detailed report"  },
    { title: "Card 3", content: "Content for Card 3", button: "visit inventory"  },
    { title: "Card 4", content: "Content for Card 4", button: "resolve now"  },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-end">
        
        {cards.map((card, index) => (
          <Card key={index} className="w-[212px] " >
            
              <CardHeader className="items-center">
                <Image src ='' alt='hii'/>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="">
                {card.content}
              </CardContent>
              <CardFooter className="w-full h-[27px] p-0 bg-red-800">
              <Button className="w-full h-full rounded-none">
                  {card.button}
                </Button>
              </CardFooter>
          
          </Card>
        ))}
        
      </div>
      <div className="flex flex-wrap justify-center">
        <CardGrid />
      </div>
    </>
  );
};

export default CardRow;
