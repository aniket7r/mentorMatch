import React from 'react';

const NotificationList = () => {
  const notifications = [
    {
      title: 'New Connection Request',
      description: 'John Doe wants to connect with you.',
      time: '2 hours ago',
    },
    {
      title: 'New Message',
      description: 'You have a new message from Jane Smith.',
      time: '1 day ago',
    },
    // Add more notifications as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Notifications</h2>
        <div className="bg-gray-100 p-6 rounded shadow">
          {notifications.map((notification, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">{notification.title}</h3>
              <p className="text-gray-700 mb-2">{notification.description}</p>
              <span className="text-gray-500 text-sm">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NotificationList;
