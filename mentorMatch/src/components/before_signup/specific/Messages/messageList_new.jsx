import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg) => (
        <div key={msg.id} className={`mb-4 ${msg.sender === 'You' ? 'text-right' : ''}`}>
          <p className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            {msg.text}
          </p>
          <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
