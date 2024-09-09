"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import LongCard from "../../_components/cards/longCard";
import { useRouter } from "next/router";


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { useParams } from "next/navigation";

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
];



const Page = () => {
  const params = useParams<{ productName: string }>();
  console.log(params, "params");
  const {productName} = useParams()

  const [data, setData]  =  useState([])
  const router = useRouter();
  

  useEffect(()=>{
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const URL = "https://pharmacy-inventory-system-1vnk.onrender.com"
      const response = await axios.get(`${URL}/api/product/${productName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(response, 'response');
      setData(response.data.products);
      console.log(data);
    };
    fetchData();
  },
  
  [data, params, productName] )
  return (
    <div>
      <section className="flex-1 flex-wrap  pt-[35px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] ">
          {cards2.map((card) => (
            <LongCard key={card.id} card={card} />
          ))}
        </div>
      </section>
      <section className="flex-1 flex-wrap  pt-[35px] ">
        <div className="grid grid-cols-1 gap-[26px] ">
          <Card>
            <CardHeader>
              <CardTitle>{data}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Take this medication by mouth with or without food as directed
                by your doctor, usually once daily.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Side Effects</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Dizziness, lightheadedness, drowsiness, nausea, vomiting,
                tiredness, excess saliva/drooling, blurred vision, weight gain,
                constipation, headache, and trouble sleeping may occur. If any
                of these effects persist or worsen, consult your doctor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Page;
