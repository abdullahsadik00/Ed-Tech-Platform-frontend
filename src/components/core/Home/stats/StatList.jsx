import React from 'react';
import StatsCard from './StatsCard';

const stats = [
  { value: '500+', label: 'Courses Offered' },
  { value: '100,000+', label: 'Students Enrolled' },
  { value: '150+', label: 'Partner Institutions' },
  { value: '98%', label: 'User Satisfaction' },
];
const StatList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        <StatsCard key={index} {...stat} />;
      })}
    </div>
  );
};

export default StatList;
