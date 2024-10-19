
// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/before_signup/common/Navbar/Navbar';
// import MessagesHeader from '../../components/before_signup/specific/Messages/MessagesHeader';
// import ConversationsList from '../../components/before_signup/specific/Messages/ConversationsList';
// import ChatInterface from '../../components/before_signup/specific/Messages/ChatInterface';

// const dummyConversations = [
//   { id: 1, name: 'Mentee 1', lastMessage: 'Hello there', messages: [{ id: 1, text: 'Hello there', isSender: false, time: '14:31' }] },
//   { id: 2, name: 'Mentee 2', lastMessage: 'How can I help?', messages: [{ id: 2, text: 'How can I help?', isSender: false, time: '14:32' }] },
//   // Add more dummy conversations as needed
// ];

// const MenteeConversations = () => {
//   const [selectedConversation, setSelectedConversation] = useState(dummyConversations[0]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//         <Navbar />
//         {/* <MessagesHeader activeTab="mentors" /> */}
//       <div className={`flex flex-1 overflow-hidden ${isMobile ? 'flex-col' : 'flex-row'}`}>
//         <aside className="w-full md:w-1/3 lg:w-1/4 bg-white md:border-r border-gray-300 overflow-y-auto md:border-b-0 border-b">
//           <ConversationsList
//             conversations={dummyConversations}
//             onSelectConversation={setSelectedConversation}
//           />
//         </aside>
//         <main className="flex-1 bg-white overflow-y-auto">
//           <ChatInterface conversation={selectedConversation} />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MenteeConversations;








import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MessagesHeader from '../../components/before_signup/specific/Messages/MessagesHeader';
import ConversationsList from '../../components/before_signup/specific/Messages/ConversationsList';
import ChatInterface from '../../components/before_signup/specific/Messages/ChatInterface';

const dummyConversations = [
  { id: 1, name: 'Mentee 1', lastMessage: 'Hello there', messages: [{ id: 1, text: 'Hello there', isSender: false, time: '14:31' }] },
  { id: 2, name: 'Mentee 2', lastMessage: 'How can I help?', messages: [{ id: 2, text: 'How can I help?', isSender: false, time: '14:32' }] },
  // Add more dummy conversations as needed
];

const MentorConversations = () => {
  const [selectedConversation, setSelectedConversation] = useState(dummyConversations[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <MessagesHeader activeTab="mentees" />
      <div className={`flex flex-1 overflow-hidden ${isMobile ? 'flex-col' : 'flex-row'}`}>
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-white md:border-r border-gray-300 overflow-y-auto md:border-b-0 border-b">
          <ConversationsList
            conversations={dummyConversations}
            onSelectConversation={setSelectedConversation}
          />
        </aside>
        <main className="flex-1 bg-white overflow-y-auto">
          <ChatInterface conversation={selectedConversation} />
        </main>
      </div>
    </div>
  );
}

export default MentorConversations;
