import React from 'react';
import SearchBar from './SearchBar';
import NotificationBell from './NotificationBell';
import UserGreeting from './UserGreeting';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b h-16 flex items-center">
      <div className="px-6 py-4 flex items-center justify-between w-full">
        <div className="flex items-center space-x-6 flex-1">
          <UserGreeting />
          <SearchBar />
        </div>

        <div className="flex items-center ">
          <NotificationBell />
          <ThemeToggle />

          {/* User Profile Button */}
          <button className="flex items-center space-x-2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-background shadow-sm"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
