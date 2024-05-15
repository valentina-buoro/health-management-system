"use client"

import React from 'react'
import useAuthStore from '../../stores/authStore';
import axios from 'axios';
import { useRouter } from "next/navigation";
const LogoutButton = () => {
    const URL = "https://pharmacy-inventory-system-1vnk.onrender.com"
    const history = useRouter();
    const handleLogout = async () => {
        /*localStorage.clear();
        useAuthStore.getState().logout();*/
        const response = await axios.get(`${URL}/api/user/logout`);
        console.log(response);
        if (response.data.success === true) {
          localStorage.clear();
          useAuthStore.getState().logout();
        } else {
          throw new Error("Error posting data to API");
        }
        history.push('/');
      };
  return (
    <div className='flex flex-col justify-end mt-10'>
      <button onClick={handleLogout} className="text-white">Logout</button>
    </div>
  )
}

export default LogoutButton