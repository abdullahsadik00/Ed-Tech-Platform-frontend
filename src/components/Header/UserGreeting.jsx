import React from 'react';

const UserGreeting = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <h2 className="font-bold text-xl text-gray-900">
      {getGreeting()}, <span className="text-indigo-600">Sadik</span>
    </h2>
  );
};

export default UserGreeting;
