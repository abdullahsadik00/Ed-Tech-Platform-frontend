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
const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map(({ href, label }) => (
        <a
          href={href}
          key={href}
          className="px-4 py-2 text-primary-foreground hover:text-primary transition-colors duration-200"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
