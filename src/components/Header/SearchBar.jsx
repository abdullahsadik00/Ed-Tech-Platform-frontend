import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative flex items-center flex-1">
      <Search className="absolute w-4 h-4 left-3 text-gray-400" />
      <input
        type="search"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full
          placeholder:text-gray-400
          transition-all duration-200
          focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100
          hover:border-gray-300"
      />
    </div>
  );
};

export default SearchBar;
