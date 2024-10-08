"use client"
import React , {useState} from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import Email from "../../../../public/email.svg";
import Password from "../../../../public/password.svg";
import Pharmacist from "../../../../public/pharmacist.png";
import Link from "next/link";
import { LoginProps } from "../../../types";
import useSignup from '../../../_hooks/useSignup'
import useAuthStore from "../../../stores/authStore"
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const initialState: LoginProps = {
    email: "",
    password: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async () => {
    const URL = "https://pharmacy-inventory-system-1vnk.onrender.com"
   
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${URL}/api/user/login`,values
        
      );

      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
    
        token(response.data.token);
        login(response.data);
        //user(response.data);
        
        router.push("/dashboard");
      } else {
        throw new Error("Error posting data to API");
      }
    } catch (error: any) {
      setError(error);
      Swal.fire({
        title: "Oops",
        text: error.response.data.message,
        icon: "error",
      });
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
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen lg:w-2/5 bg-gradient-to-t from-[#04619C] from-0% to-[#2C8FA0] to-100%">
        <div className="flex flex-col justify-between items-center h-1/2">
          
          <Image src={Pharmacist} alt="Pharmacist" width = {400} height = {400} />
          <h1 className="text-white text-3xl font-bold">IPharm</h1>
        </div>
        </div>
      <div className="flex flex-col items-center justify-center h-screen gap-6 mx-auto lg:w-3/5">
        <div className="p-4">
        <h4 className="text-center text-2xl font-bold">
          Hello there &#128075;
        </h4>
        <p className="text-center" >Welcome back</p>
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
          <button
            className="bg-[#04619C] py-4 text-white rounded-full lg:w-[440px] w-[320px]  mt-10"
            type="submit"
            onClick={handleSubmit}
          >
            {isLoading ? "...Submitting" : "Login"}
          </button>
          
  
          <Link href='/signup'>
            don&apos;t have an account?   <a className="text-blue-500">Signup</a>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Index;