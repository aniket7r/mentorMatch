import React from 'react';
import ConversationItem from './conversationItem_new';

const conversations = [
  { id: 1, name: 'Harsh Poddar', profilePicture: '/images/harsh.jpg', lastMessage: 'Sent an attachment', lastMessageTime: '3d ago' },
  { id: 2, name: 'Aman Raj', profilePicture: '/images/aman.jpg', lastMessage: 'Sent an attachment', lastMessageTime: '2w ago' },
  { id: 3, name: 'cosmorobo', profilePicture: '/images/cosmorobo.jpg', lastMessage: 'Sent an attachment', lastMessageTime: '3w ago' },
  { id: 4, name: 'Cian', profilePicture: '/images/cian.jpg', lastMessage: 'I want to connect with people like you...', lastMessageTime: '5w ago' },
];

function Sidebar({ selectedChat, setSelectedChat }) {
  return (
    <div className="w-full md:w-1/3 border-r border-gray-300 overflow-y-auto">
      <div className="px-4 py-2 bg-gray-100 border-b border-gray-300 font-bold">
        aniket_krishnaut
      </div>
      <div className="h-full">
        {conversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isSelected={selectedChat === conv.id}
            onClick={() => setSelectedChat(conv.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
