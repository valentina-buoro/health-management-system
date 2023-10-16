// Sidebar.tsx

import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-gray-800 h-full w-64 fixed top-0 left-0 overflow-y-auto">
      {/* Sidebar content goes here */}
      <div className="p-4 text-white">
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
          {/* Add more items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
