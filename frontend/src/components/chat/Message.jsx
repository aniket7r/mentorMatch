// src/components/chat/Message.jsx
import React from 'react';

const Message = ({ message }) => {
    const isOwnMessage = message.sender === localStorage.getItem('userId'); // Assume user ID is stored in localStorage

    return (
        <div className={`mb-2 ${isOwnMessage ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${isOwnMessage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.content}
            </div>
        </div>
    );
};

export default Message;
