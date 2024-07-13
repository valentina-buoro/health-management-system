"use client"

import React from 'react'
import useAuthStore from '../../stores/authStore';
import axios from 'axios';
import { useRouter } from "next/navigation";
const LogoutButton = () => {

    const history = useRouter();
    const handleLogout = async () => {
        localStorage.clear();
        history.push('/');
      };
  return (
    <div className='flex flex-col justify-end mt-10'>
      <button onClick={handleLogout} className="text-white">Logout</button>
    </div>
  )
}

export default LogoutButton