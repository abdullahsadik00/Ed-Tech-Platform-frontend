import React from 'react';

const Tag = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`tag px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-primary-400 text-white'
          : 'bg-gray-100 text-text-light hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default Tag;
