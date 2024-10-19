import React from 'react';

const ChatInterface = ({ conversation }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2 bg-gray-100 border-b border-gray-300">
        <p className="text-lg font-semibold">{conversation.name}</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {conversation.messages.map((msg) => (
          <div key={msg.id} className={`mb-4 ${msg.isSender ? 'text-right' : ''}`}>
            <p className={`inline-block px-4 py-2 rounded-lg ${msg.isSender ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </p>
            <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400 transition-colors duration-200"
        />
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;
