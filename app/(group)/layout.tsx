// App.tsx

import React from "react";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className=" h-screen bg-[#f8f7ff]">
      
      <Sidebar />
      <main className=" md:pl-56 bg-[#f8f7ff]">
        {/* Main content goes here */}
       {children}
        {/* Add your main content */}
      </main>
    </div>
  );
}
