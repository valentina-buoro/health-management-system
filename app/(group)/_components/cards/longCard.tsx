import React from 'react'
import { Button } from '../../../../components/ui/button';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../../../components/ui/card";
//mport { LucideIcon } from 'lucide-react';

  interface CardProps{
    card:{
        title:string
        content:string
        button:string
        id:number 
       
    }
  }
const LongCard = ({
    card
}:CardProps) => {
  return (
   
    <Card key={card.id} className='bg-[#FFF] min-w-[260px]' >
    <CardTitle>{card.title}</CardTitle>
    <CardHeader className="items-center">
      <Button className="w-full h-full rounded-none">
        {card.button}
      </Button>
    </CardHeader>
    <CardContent className="">{card.content}</CardContent>
  </Card>
  )
}

export default LongCard