import React from 'react';
import NotificationItem from '../NotificationItems/NotificationItems.jsx';

const NotificationList = ({ notifications }) => {
  if (notifications.length === 0) {
    return <p>No notifications available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Most Recent</h2>
      {notifications.slice(0, 1).map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
      <h2 className="text-xl font-bold mt-6 mb-2">Earlier</h2>
      {notifications.slice(1).map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
