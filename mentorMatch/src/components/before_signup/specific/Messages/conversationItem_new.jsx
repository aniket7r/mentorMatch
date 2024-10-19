import React from 'react';

function ConversationItem({ conversation, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-200 ${
        isSelected ? 'bg-gray-200' : ''
      }`}
    >
      <img
        src={conversation.profilePicture}
        alt={conversation.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-3">
        <p className="text-sm font-semibold">{conversation.name}</p>
        <p className="text-xs text-gray-500">
          {conversation.lastMessage}
        </p>
        <p className="text-xs text-gray-400">
          {conversation.lastMessageTime}
        </p>
      </div>
    </div>
  );
}

export default ConversationItem;
