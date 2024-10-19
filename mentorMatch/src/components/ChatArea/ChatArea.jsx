import React from 'react';

const ChatArea = ({ activeChat }) => {
  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-bold mb-4">Chat with {activeChat.name}</h2>
      <div className="bg-white p-4 rounded shadow-md h-96 overflow-y-scroll">
        {/* Chat messages will go here */}
      </div>
    </div>
  );
};

export default ChatArea;
