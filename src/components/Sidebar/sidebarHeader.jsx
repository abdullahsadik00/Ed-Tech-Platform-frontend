import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SidebarHeader = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b">
      <h1
        className={`font-bold text-xl text-gray-800 transition-opacity duration-200
        ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}
      `}
      >
        Dashboard
      </h1>
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 hidden md:block"
      >
        {isCollapsed ? (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
