// App.tsx

import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className=" h-screen bg-[#f8f7ff]">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 "> 
        <Navbar/>
      </div>
      <Sidebar />
      <main className="mt-[72px] md:pl-56 bg-[#f8f7ff]">
        {/* Main content goes here */}
       {children}
        {/* Add your main content */}
      </main>
    </div>
  );
}
