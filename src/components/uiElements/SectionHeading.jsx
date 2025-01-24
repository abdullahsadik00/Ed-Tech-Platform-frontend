import React from 'react';

const SectionHeading = ({ title, subtitle, className = '' }) => (
  <div className={`text-center max-w-2xl mx-auto mb-16 ${className}`}>
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

export default SectionHeading;
