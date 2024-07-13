// App.tsx

import React from "react";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className=" h-screen bg-white">
      
      <Sidebar />
      <main className=" md:pl-56 bg-white">
        {/* Main content goes here */}
       {children}
        {/* Add your main content */}
      </main>
    </div>
  );
}
