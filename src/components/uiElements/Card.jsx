import React from 'react';

const Card = ({ children, className = '' }) => (
  <div
    className={`p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all ${className}`}
  >
    {children}
  </div>
);

export default Card;
