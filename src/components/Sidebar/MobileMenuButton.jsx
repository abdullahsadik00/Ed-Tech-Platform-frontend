import React from 'react';
import { Menu } from 'lucide-react';

const MobileMenuButton = ({ toggleMobileSidebar }) => {
  return (
    <button
      onClick={toggleMobileSidebar}
      className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
    >
      <Menu className="w-6 h-6 text-gray-700" />
    </button>
  );
};

export default MobileMenuButton;
