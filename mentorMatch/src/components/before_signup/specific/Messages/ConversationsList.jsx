import React from 'react';

const ConversationsList = ({ conversations, onSelectConversation }) => {
  return (
    <div>
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelectConversation(conv)}
          className="flex items-center px-4 py-3 cursor-pointer transition-colors duration-300 hover:bg-gray-200"
        >
          <div className="ml-3">
            <p className="text-sm font-semibold">{conv.name}</p>
            <p className="text-xs text-gray-500">{conv.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConversationsList;
