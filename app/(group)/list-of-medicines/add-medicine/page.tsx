"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "../../../../components/ui/button";
import { MedicineProps } from "../../../types";
import useSignup from "../../../_hooks/useSignup";



const Page = () => {
  const initialState: MedicineProps = {
    productName: "",
    category: "",
    description: "",
    price: 0,
    quantity: 0,
    sideEffect: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async () => {
    const URL = "https://pharmacy-inventory-system-1vnk.onrender.com";
    setIsLoading(true);
    try {
      const response = await axios.post(`${URL}/api/product/create`, values);
      console.log("API response:", response);

      if (response.data.success === true) {
        values.productName = "";
        values.category = "";
        values.description = "";
        values.sideEffect = "";
        values.price = "";
        values.quantity = "";
        console.log("Success");
      } else {
        throw new Error("Error posting data to API");
      }
    } catch (error: any) {
      setError(error);
      console.error("Error sending form data :", error);
    } finally {
      setIsLoading(false);
    }
    console.log(values);
  };

  const { values, handleChange, handleSubmit } = useSignup(
    initialState,
    handleSubmitForm
  );

  return (
    <div>
      <form className="flex-1 bg-[#EDF1F5] h-screen  px-8 ">
        <div className=" flex justify-between items-center py-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Add New Medicine
            </h2>
            <p>*All fields are mandatory, except mentioned as (optional).</p>
          </div>
        </div>
        <div className="flex items-center gap-[26px] mb-[15px]">
          <div>
            <label
              className="text-sm font-normal text-[#1D242E]"
              htmlFor="productName"
            >
              Medicine Name
            </label>
            <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
              <input
                id="productName"
                name="productName"
                onChange={handleChange}
                value={values.productName}
                className="bg-inherit w-11/12 border-none outline-none"
              />
            </div>
          </div>
          <div>
            <label
              className="text-sm font-normal text-[#1D242E]"
              htmlFor="email"
            >
              Medicine Cost
            </label>
            <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
              <input
                id="price"
                name="price"
                onChange={handleChange}
                value={values.price}
                className="bg-inherit w-11/12 border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[26px] mb-[15px]">
          <div>
            <label
              className="text-sm font-normal text-[#1D242E]"
              htmlFor="email"
            >
              Medicine Group
            </label>
            <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
              <input
                id="category"
                name="category"
                onChange={handleChange}
                value={values.category}
                className="bg-inherit w-11/12 border-none outline-none"
              />
            </div>
          </div>
          <div>
            <label
              className="text-sm font-normal text-[#1D242E]"
              htmlFor="email"
            >
              Medicine Quantity
            </label>
            <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
              <input
                id="quantity"
                name="quantity"
                onChange={handleChange}
                value={values.quantity}
                className="bg-inherit w-11/12 border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mb-[15px]">
          <label className="text-sm font-normal text-[#1D242E]" htmlFor="email">
            How to use
          </label>
          <div className="flex justify-between p-4 w-[905px] rounded-sm bg-[#E3EBF3]">
            <textarea
              id = "description"
              name="description"
              onChange={handleChange}
              value={values.description}
              className="bg-inherit w-11/12 border-none outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-normal text-[#1D242E]" htmlFor="email">
            Side Effects
          </label>
          <div className="flex justify-between p-4 w-[905px] rounded-sm bg-[#E3EBF3]">
            <textarea
            id = "sideEffects"
              name="sideEffects"
              onChange={handleChange}
              value={values.sideEffects}
              className="bg-inherit w-11/12 border-none outline-none"
            />
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          className="bg-[#F0483E] flex items-center justify-center mt-10"
        >
          Save Details
        </Button>
      </form>
    </div>
  );
};

export default Page;
