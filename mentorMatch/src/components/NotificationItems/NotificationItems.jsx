import React from 'react';
import { format } from 'date-fns';

const NotificationItem = ({ notification }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      <div className="flex items-center">
        <span className="text-gray-600">{notification.message}</span>
      </div>
      <div className="text-right">
        <p className="text-gray-500 text-sm">
          {format(new Date(notification.createdAt), 'p, MMM d')}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
