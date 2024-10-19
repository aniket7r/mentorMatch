import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MentorList from '../../components/MentorList/MentorList';
import MenteeList from '../../components/MenteeList/MenteeList';
import ChatArea from '../../components/ChatArea/ChatArea';
import MessageInput from '../../components/MessageInput/MessageInput';

const Messages = () => {
  const mentors = [
    { name: 'Jane Smith', role: 'Senior Developer', img: 'path/to/mentor1.jpg' },
    { name: 'Robert Brown', role: 'Project Manager', img: 'path/to/mentor2.jpg' },
    { name: 'Emily Davis', role: 'UI/UX Designer', img: 'path/to/mentor3.jpg' }
  ];

  const mentees = [
    { name: 'John Doe', role: 'Junior Developer', img: 'path/to/mentee1.jpg' },
    { name: 'Alice Johnson', role: 'Intern', img: 'path/to/mentee2.jpg' },
    { name: 'Chris Lee', role: 'Junior Designer', img: 'path/to/mentee3.jpg' }
  ];

  const [activeChat, setActiveChat] = useState(mentors[0]);

  return (
    <>
      <Navbar />
      <header className="bg-primary text-white text-center py-16">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-gray-200">Communicate with your mentors and mentees</p>
      </header>
      <div className="flex">
        <MentorList mentors={mentors} setActiveChat={setActiveChat} />
        <MenteeList mentees={mentees} setActiveChat={setActiveChat} />
        <div className="w-1/2">
          <ChatArea activeChat={activeChat} />
          <MessageInput />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Messages;
