"use client";
import React, { useState } from "react";
import axios from "axios";
//import ReactModal from "react-modal";

import Image from "next/image";
import User from "../../../../public/user.svg";
import Email from "../../../../public/email.svg";
import Password from "../../../../public/password.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignupProps } from "../../../types";

import useSignup from "../../../_hooks/useSignup";

const Index = () => {
  const initialState: SignupProps = {
    email: "",
    username: "",
    password: "",
    isAdmin: false,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);



  
  const handleSubmitForm = async () => {
    setIsLoading(true);
    const URL = "https://pharmacy-inventory-system-1vnk.onrender.com"
    try {
      const response = await axios.post(
        `${URL}/api/user/register`,
        ...values
      );
      console.log("API response:", response);
      if (response.data.success === true) {
        localStorage.setItem("access_token", response.data.token);
        setShow(true);
        values.email = "";
        values.username = "";
        values.password = "";
        values.isAdmin = false;
        console.log("Success");
        redirect("/dashboard");
      } else {
        console.log(response)
      }
    } catch (error: any) {
     
      console.error("Error sending form data :",);
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
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen lg:w-2/5 lg:bg-gradient-to-b from-[#3d348b] from-10% via-[#3d348b] via-30% to-[#7678ed] to-90%">
        <div className="flex justify-center items-center h-1/2">
          <h1 className="text-white text-3xl font-bold">WIBA TEAM 4</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-6 mx-auto lg:w-3/5">
        <div className="p-4">
          <h4 className="text-center text-2xl font-bold">
            Hello &#128075;, Welcome to WIBA TEAM 4
          </h4>
          <p className=" text-center ">Sign Up To Get Started</p>
        </div>
        <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter full name"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <button className="">
            <Image className="w-5" src={User} alt={"div icon"} />
          </button>
        </div>
        <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <button className="">
            <Image className="w-5" src={Email} alt={"div icon"} />
            </button>
        </div>
        <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button className="">
            <Image className="w-5" src={Password} alt={"div icon"} />
          </button>
        </div>
        
        {/*<div className="flex justify-between p-4 max-w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Confirm password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button className="">
            <Image className="w-5" src={Password} alt={"div icon"} />
          </button>
  </div>*/}
        <button
          className="bg-gradient-to-b from-[#3d348b] from-20% via-[#3d348b] via-30% to-[#7678ed] py-4 text-white rounded-full lg:w-[440px] w-[320px]  mt-10"
          type="submit"
          onClick={handleSubmit}
        >
          {isLoading ? "...Submitting" : "Create Account"}
        </button>

        <Link href="/">
          already have an account? <a className="text-blue-500">Login</a>
        </Link>
      </div>
      {/*show ? (
        <ReactModal
          isOpen={show}
          onRequestClose={() => setShow(false)}
          className=" w-[240px] lg:w-[350px] mx-auto flex text-center items-center flex-col  justify-between p-5 h-[240px] lg:h-[350px] gap-6  z-30 bg-white border  mt-10 "
        >
          <div className="w-full items-end text-right pr-3 hover:cursor-pointer">
            <span
              className="  lg:text-[24px] text-right"
              onClick={() => setShow(false)}
            >
              X
            </span>
          </div>
          <h3 className="font-medium lg:text-3xl">Success</h3>
          <span className=" text-[24px] lg:text-[80px]">&#128077;</span>

          <p>Check your email for verification link</p>
        </ReactModal>
      ) : null}*/}
    </div>
  );
};

export default Index;