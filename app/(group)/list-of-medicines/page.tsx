"use client"

import { useEffect, useState } from "react"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "../../../components/ui/button"
import Link from "next/link"
import axios from "axios"

/*async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/medicines/medicine', {headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzAwOTUzMDQ3LCJuYmYiOjE3MDA5NTMwNDcsImp0aSI6IjNiOTFkZDE5LWVlMWMtNGRlNS1hMzQwLTY0NmZiZDcyZDZjNiIsImV4cCI6MTcwMDk1Mzk0NywidHlwZSI6ImFjY2VzcyIsImZyZXNoIjpmYWxzZX0.NBEzVwvHpLjycJFJp7eL5CLhGKiJTICj_gtdOkGqzbI',
      'Content-Type': 'application/json'
    }} );
    const data = await response.json();
    console.log(data);
  };
  fetchData();
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}*/

export default function Page() {

  const [data, setData]  =  useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const URL = "https://pharmacy-inventory-system-1vnk.onrender.com"
      const token = localStorage.getItem("access_token")
      const response = await axios.get(`${URL}/api/product/all`, {headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }} );
      
      const data = await response.data.json();
      setData(data.data);
      console.log(data);
    };
    fetchData();
  },[] )
  
 
  return (
    <div className="container mx-auto ">
      <div className="flex-1 space-y-4 bg-[#EDF1F5]  p-8 ">
        <div className=" flex justify-between items-center space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              List of Medicines
            </h2>
            <p>
            List of Medicines available for sales
            </p>
          </div>
          <Button className="bg-[#F0483E] flex items-center justify-center"  >
            <Link href='list-of-medicines/add-medicine'> <span>  + </span>
           <span>Add New Item</span></Link>
          
          </Button>
        </div>
        </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

