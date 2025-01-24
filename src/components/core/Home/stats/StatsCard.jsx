import React from 'react';

const StatsCard = ({ value, label }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-primary rounded-2xl blur-xl group-hover:bg-primary-50 transition-colors duration-200">
        <div className="relative p-6 text-center space-y-2">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
            {value}
          </h3>
          <p className="text-gray-500 font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
