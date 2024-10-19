import React from 'react';
import ChatHeader from './chatHeader_new';
import MessageInput from './messageInput_new';
import MessageList from './messageList_new';

const messageData = {
  4: [
    { id: 1, text: 'Hello there!', sender: 'Cian', time: '14:31' },
    { id: 2, text: 'I want to connect with people like you in my life', sender: 'You', time: '14:32' },
    { id: 3, text: 'That sounds great!', sender: 'Cian', time: '14:33' },
  ],
  // More messages for other conversations...
};

function ChatWindow({ selectedChat }) {
  if (selectedChat === null) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a conversation to start chatting
      </div>
    );
  }

  const messages = messageData[selectedChat] || [];

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader chatId={selectedChat} />
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
}

export default ChatWindow;
