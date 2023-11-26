"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Medicine ID",
  },
  {
    accessorKey: "medicine_name",
    header: "Medicine Name",
  },
  {
    accessorKey: "group.value",
    header: "Group Name",
  },
  {
    accessorKey: "quantity",
    header: "Stock in Qty",
  },
  {
    accessorKey: "",
    header: "Action",
  },
]
