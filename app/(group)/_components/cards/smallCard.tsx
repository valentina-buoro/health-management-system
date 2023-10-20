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
import { LucideIcon } from 'lucide-react';

  interface CardProps{
    card:{
        title:string
        content:string
        icon:string
        button:string
        id:number
        borderColor:string  
        buttonBg:string
    }
  }

const SmallCard = ({
    card
    
}:CardProps) => {
    
  return (

        <Card key={card.id} className= {`w-[212px] rounded-t-[4px] rounded-b-none text-[#1D242E] ${card.borderColor} `}>
              <CardHeader className="items-center">
                <Image src={card.icon} alt="hii"  />
                <CardTitle className=' text-[20px] text-center leading-[22px] font-bold '>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-[14px] leading-[22px] font-medium">{card.content}</CardContent>
              <CardFooter className="w-full h-[27px] p-0">
                <Button className={`w-full h-full rounded-none text-[#1D242E] ${card.buttonBg}`}>
                  {card.button}
                </Button>
              </CardFooter>
            </Card>
  )
}

export default SmallCard