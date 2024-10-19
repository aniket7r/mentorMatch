import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import NotificationTabs from '../../components/NotificationTabs/NotificationTabs';
import NotificationList from '../../components/NotificationList/NotificationList';
import Testimonials from '../../components/Testimonials/Testimonials';
import Tips from '../../components/Tips/Tips';
import CTA from '../../components/CTA/CTA';

const Notifications = () => {
  const mentorshipNotifications = [
    { title: 'Mentorship Request', message: 'John Doe has requested mentorship.' },
    { title: 'New Mentee', message: 'You have a new mentee: Jane Smith.' }
  ];

  const followNotifications = [
    { title: 'New Follower', message: 'Robert Brown is now following you.' },
    { title: 'Follower Update', message: 'Emily Davis liked your recent post.' }
  ];

  const postNotifications = [
    { title: 'New Post', message: 'Alice Johnson published a new blog post.' },
    { title: 'Comment on Your Post', message: 'Chris Lee commented on your post.' }
  ];

  const [activeTab, setActiveTab] = useState('mentorship');
  const notifications = activeTab === 'mentorship' ? mentorshipNotifications : activeTab === 'follow' ? followNotifications : postNotifications;

  return (
    <>
      <Navbar />
      <header className="bg-primary text-white text-center py-16">
        <h1 className="text-3xl font-bold">Your Notifications</h1>
        <p className="text-gray-200">Stay Connected and Inspired</p>
      </header>
      <NotificationTabs setActiveTab={setActiveTab} />
      <NotificationList notifications={notifications} />
      <Testimonials />
      <Tips />
      <CTA />
      <Footer />
    </>
  );
};

export default Notifications;
