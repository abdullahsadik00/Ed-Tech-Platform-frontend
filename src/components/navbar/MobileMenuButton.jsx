import React from 'react';
import { Menu } from 'lucide-react';

const MobileMenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200
    "
      aria-label="Toggle Mobile Menu"
    >
      <Menu className="w-6 h-6 text-gray-600" />
    </button>
  );
};

export default MobileMenuButton;
