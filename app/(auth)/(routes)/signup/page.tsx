"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
//import ReactModal from "react-modal";

import Image from "next/image";
import User from "../../../../public/user.svg";
import Email from "../../../../public/email.svg";
import Password from "../../../../public/password.svg";
import Pharmacist from "../../../../public/pharmacist.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignupProps } from "../../../types";

import useSignup from "../../../_hooks/useSignup";

const Index = () => {
  const router = useRouter();
  const initialState: SignupProps = {
    email: "",
    username: "",
    password: "",
    isAdmin: true,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async () => {
    setIsLoading(true);
    const URL = "https://pharmacy-inventory-system-1vnk.onrender.com";
    try {
      const response = await axios.post(`${URL}/api/user/register`, values);
      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      } else {
        throw new Error("Error posting data to API");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error.response.data.message,
        icon: "error",
      });
      console.error("Error sending form data:", error);
      setError(error.message || "An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit } = useSignup(
    initialState,
    handleSubmitForm
  );

  return (
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen lg:w-2/5 bg-gradient-to-t from-[#04619C] from-0% to-[#2C8FA0] to-100%">
        <div className="flex flex-col justify-between items-center h-1/2">
          <Image src={Pharmacist} alt="Pharmacist" width={400} height={400} />
          <h1 className="text-white text-3xl font-bold">IPharm</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-6 mx-auto lg:w-3/5">
        <div className="p-4">
          <h4 className="text-center text-2xl font-bold">
            Hello &#128075;, Welcome to IPharma
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
          className="bg-[#04619C] py-4 text-white rounded-full lg:w-[440px] w-[320px]  mt-10"
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
