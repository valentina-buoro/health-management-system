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

  interface CardProps{
    card:{
        title:string
        content:string
        icon:string
        button:string
        id:number
        borderColor:string  
        buttonBg:string
        
        //backgroundColor:string
    }
  }

const SmallCard = ({
    card
    
}:CardProps) => {
    
  return (

        <Card key={card.id} className= {`flex-col w-[125px] md:w-[212px]  rounded-xl border-b-[7px]  text-[#1D242E] ${card.borderColor} `}>
              <CardHeader className={`items-center `}>
                <Image src={card.icon} alt="hii"  />
                <CardTitle className=' text-[20px] text-center leading-[22px] font-bold '>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className={`text-center text-[14px] leading-[22px] font-medium `}>{card.content}</CardContent>
              
            </Card>
  )
}

export default SmallCard