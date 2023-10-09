// Sidebar.tsx

import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-gray-800 h-full w-64 fixed top-0 left-0 overflow-y-auto">
      {/* Sidebar content goes here */}
      <div className="p-4 text-white">
        <h1 className="text-2xl font-semibold">My Sidebar</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="#" className="text-blue-300 hover:text-blue-500">Item 1</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-300 hover:text-blue-500">Item 2</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-300 hover:text-blue-500">Item 3</a>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
