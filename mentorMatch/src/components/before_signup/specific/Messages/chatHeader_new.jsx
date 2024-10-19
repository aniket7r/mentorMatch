import React from 'react';
import { PhoneIcon, VideoCameraIcon, InformationCircleIcon } from '@heroicons/react/outline';

function ChatHeader({ chatId }) {
  const chat = { name: 'Cian', profilePicture: '/images/cian.jpg', lastActive: '5w ago' }; // Replace with real data as needed

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <img
          src={chat.profilePicture}
          alt={chat.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{chat.name}</p>
          <p className="text-xs text-gray-500">{chat.lastActive}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <PhoneIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200" />
        <VideoCameraIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200" />
        <InformationCircleIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200" />
      </div>
    </div>
  );
}

export default ChatHeader;
