// components/dashboard/Navbar.tsx
'use client';
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="relative w-72">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
        />
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <Bell className="w-5 h-5 text-gray-700" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <User className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </header>
  );
}