import React from 'react';

const navItems = [
  {
    href: '/home',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/dash',
    label: 'Dashboard',
  },
];

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return false;
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-in slide-in-from-top-0">
      <div className="space-y-1 p-4">
        {navItems.map(({ href, label }) => (
          <a
            href={href}
            className="block px-4 py-2 text-gray-500 hover:bg-gray-500 rounded-lg transition-colors duration-200"
          >
            {label}
          </a>
        ))}
        <div className="pt-4 mt-4 border-t">
          <a
            href="/login"
            className="block w-full px-4 py-2 text-center text-gray-600 hover:bg-primary-50 rounded-lg mb-2"
          ></a>
          <a
            href="/signup"
            className="block w-full px-4 py-2 text-center bg-primary text-white rounded-lg hover::bg-priamry-900 transition-all duration-200"
          >
            Sign up
          </a>
        </div>
      </div>
      MobileMenu
    </div>
  );
};

export default MobileMenu;
