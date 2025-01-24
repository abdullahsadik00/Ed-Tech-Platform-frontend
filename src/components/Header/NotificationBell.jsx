import React from 'react';
import { Bell } from 'lucide-react';

const NotificationBell = () => {
  const [hasNotifications] = React.useState(true);

  return (
    <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
      <Bell className="w-5 h-5 text-gray-600" />
      {hasNotifications && (
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </button>
  );
};

export default NotificationBell;
