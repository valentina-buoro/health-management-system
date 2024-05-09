// Sidebar.tsx
"use server"
import React from "react";
import Link from "next/link";
import Logo from "./logo";
import SidebarRoutes from "./sidebarRoutes";


const Sidebar = () => {

  
  return (
    <nav className=" hidden md:flex flex-col bg-[#344e41;] h-full w-56 fixed top-0 left-0 overflow-y-auto shadow-sm">
      <div className="p-6">
        <Logo />
        <h1 className="text-2xl font-semibold text-white py-2">Pharmacy</h1>
      </div>
      <div className="flex flex-col w-full">
<SidebarRoutes/>
      </div>
      <button className="text-white">Logout</button>
      {/* Sidebar content goes here */}
      {/*<div className="p-4 text-white">
        <h1 className="text-2xl font-semibold">My Sidebar</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <Link href="/dashboard" className="text-blue-300 hover:text-blue-500">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link href="/inventory" className="text-blue-300 hover:text-blue-500">Inventory</Link>
          </li>
          <li className="mb-2">
            <Link href="/reports" className="text-blue-300 hover:text-blue-500">Reports</Link>
          </li>
         
        </ul>
  </div>*/}
    </nav>
  );
};

export default Sidebar;
