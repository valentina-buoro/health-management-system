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
      <main className="flex-grow p-4">
        {/* Main content goes here */}
        {children}
        {/* Add your main content */}
      </main>
    </div>
  );
}
