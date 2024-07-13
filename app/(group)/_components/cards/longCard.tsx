import React from "react";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
//mport { LucideIcon } from 'lucide-react';
import { ChevronsRight } from "lucide-react";

interface CardProps {
  card: {
    title: string;
    content: string;
    button: string;
    id: number;
  };
}
const LongCard = ({ card }: CardProps) => {
  return (
    <Card key={card.id} className="bg-[#FFF] min-w-[260px] border-[1px] border-[#2C8FA0]">
      <CardHeader className="items-center flex-row justify-between h-[47px] border-b-[1px] border-b-[#2C8FA0]">
        <CardTitle>{card.title}</CardTitle>
        <Button className=" rounded-none" variant="ghost">
          {card.button}
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="h-[93px] flex justify-between py-[20px]">
        <div>
          <p className="text-[#1D242E] text-[20px] text-left leading-[22px] font-bold ">293</p>
          <p className=" text-[#1D242E] text-left text-[14px] leading-[22px] font-medium">total number of storage</p>
        </div>
        <div>
          <p className="text-[#1D242E] text-[20px] text-left leading-[22px] font-bold ">293</p>
          <p className=" text-[#1D242E] text-left text-[14px] leading-[22px] font-medium">total number of storage</p>
        </div>
        
        
      </CardContent>
    </Card>
  );
};

export default LongCard;
