import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MentorConversationsList from '../../components/MentorConversationsList/MentorConversationsList';
import Chatbox from '../../components/Chatbox/Chatbox';

const mentors = [
  // Sample data
  { name: 'Mentor 1', image: 'https://via.placeholder.com/40' },
  { name: 'Mentor 2', image: 'https://via.placeholder.com/40' },
  // Add more mentors as needed
];

const MentorConversations = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <>
      <Navbar />
      <div className="flex">
        <MentorConversationsList mentors={mentors} onSelectMentor={setSelectedMentor} />
        <div className="w-2/3">
          {selectedMentor ? (
            <Chatbox selectedUser={selectedMentor} />
          ) : (
            <div className="p-4">
              <h2 className="text-xl font-bold">Select a Mentor to Start a Conversation</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorConversations;
