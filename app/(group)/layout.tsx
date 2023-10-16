// App.tsx

import React from "react";
import Sidebar from "../../components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <main className="flex-grow justify-end">
        {/* Main content goes here */}
       <div className="flex justify-end">
       {children}
       </div>
        {/* Add your main content */}
      </main>
    </div>
  );
}
