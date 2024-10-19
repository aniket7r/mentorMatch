import React, { useState } from 'react';

function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Handle sending the message
      console.log('Message sent:', message); // Replace with real message sending logic
      setMessage('');
    } else {
      alert('Please enter a message.');
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-300">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400 transition-colors duration-200"
      />
      <button
        onClick={handleSendMessage}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
