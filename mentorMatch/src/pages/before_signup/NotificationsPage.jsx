import React, { useState, useEffect } from 'react';
import NotificationList from '../../components/NotificationList/NotificationList';
// frontend_mm\src\components\NotificationList\NotificationList.jsx
// import Footer from '../common/Footer';
import Navbar from '../../components/Navbar/Navbar';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/notifications', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setNotifications(data.notifications || []);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Notifications</h1>
        <NotificationList notifications={notifications} />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default NotificationsPage;
