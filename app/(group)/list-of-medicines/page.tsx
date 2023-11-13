/*import React from "react";

const page = () => {
  return <>
    <div className="flex flex-wrap justify-between bg-[#EDF1F5] pb-[30px]">
         
        </div>
  </>
};

export default page;*/

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "../../../components/ui/button"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
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
}

export default async function Page() {
  const data = await getData()

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
          <Button className="bg-[#F0483E] flex items-center justify-center">
           <span>  + </span>
           <span>Add New Item</span>
          </Button>
        </div>
        </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

