import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import MessagesHeader from '../../components/before_signup/specific/Messages/MessagesHeader';
import MentorConversations from './MentorConversations';
import Footer from '../../components/before_signup/common/Footer/Footer';

const Messages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar />
      <MessagesHeader activeTab="mentors" /> */}
      <MentorConversations />
      <Footer />
    </div>
  );
}

export default Messages;
