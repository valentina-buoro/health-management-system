"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import Search from "../../../public/search.svg";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export type Payment = {
  id: string;
  productName: string;
  category: string;
  quantity: number;
  price: number;
  //description: string
  //sideEffect: string
  //status: "pending" | "processing" | "success" | "failed"
};

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },

  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Medicine Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("productName")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Available Quantity</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("quantity")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel >Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(row.getValue("productName"))
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
              <Link href={`/list-of-medicines/medicine-details/${row.getValue("_id")}`}>View Medicine Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];


const Page: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  axios.defaults.withCredentials = true;
  const URL = "https://pharmacy-inventory-system-1vnk.onrender.com";

  const [data, setData] = useState([]);
  const [customer, setCustomer] = React.useState("");
  const [customerData, setCustomerData] = React.useState(null);
  const [customerName, setCustomerName] = React.useState("");
  const [customerEmail, setCustomerEmail] = React.useState("");
  const [customerError, setCustomerError] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const [cartError, setCartError] = React.useState("");

  useEffect(
    () => {
      const fetchData = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${URL}/api/product/all`, {
           headers: {
              Authorization: `Bearer ${token}`,
            }
          });
          setData(response.data.products);
        } catch (error: any) {
          console.log(error);
        }
      };
      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChange = (e: any) => {
    setCustomer(e.target.value);
    console.log(e.target.value);
  };

  const getCustomer = async () => {
    try {
      setCustomerName("");
      setCustomerEmail("");
      const response = await axios.get(`${URL}/api/user/customer/${customer}`, {
        withCredentials: true,
      });
      console.log(response);
      setCustomerData(response.data);
      setCustomerName(response.data.username);
      setCustomerEmail(response.data.email);
      console.log(customerData);
    } catch (error: any) {
      console.log(error);
      setCustomerError(error.response.data.message);
    }
  };

  const addToCart = async () => {  
    try {
      setCart([]);
      setCartError("");
      const response = await axios.post(`${URL}/api/cart/add-to-cart/`, {
        email: customerEmail,
        productName: "vitamin c",
        quantity: 3,
      });
      console.log(customerEmail)
      console.log(response);
      setCart(response.data.cart.cartContents);
    } catch (error: any) {
      console.log(error);
      setCartError(error.response.data.message);
    }
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex">
      <div className="w-3/5 px-8">
        <div className="flex items-center py-4">
          <Input
            placeholder="Search Medicine..."
            value={
              (table.getColumn("productName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("productName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border ">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                    <div className="flex items-center h-full"><Button className="bg-[#F0483E] text-xs items-center flex w-[120px] justify-between px-4 mb-auto" onClick={addToCart}>
                      <span> + </span>
                      <span className="text-xs ">Add To Cart</span>
                    </Button></div>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between my-4 p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Search for anything here..."
            onChange={handleChange}
            value={customer}
          />
          <button className="" onClick={getCustomer}>
            <Image className="w-5" src={Search} alt={"div icon"} />
          </button>
        </div>
        <div>
          {customerData ? (
            <div>
              <div>{customerName}</div>
              <div>{customerEmail}</div>
            </div>
          ) : customerError ? (
            <div> {customerError}</div>
          ) : (
            <div> </div>
          )}
        </div>
        {
          cart.length > 0? (
            cart.map((item:any, index) => (
              <div key={index}>
                <div>{item.price}</div>
              </div>
            ))
          ): (
            <div> {cartError}</div>
          )
        }
      </div>
    </div>
  );
}

export default Page;
