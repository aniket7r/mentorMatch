// src/components/chat/ChatRoom.jsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Message from './Message';
console.log("before io");
const socket = io('http://localhost:4000', {
    auth: {
        token: localStorage.getItem('jwtToken'),
    }
});
console.log("after io");
console.log("socket", socket);
const ChatRoom = ({ chatId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Join the chat room
        socket.emit('joinRoom', { chatId });

        // Fetch existing messages
        fetch(`http://localhost:4000/api/v1/messages/${chatId}`, {
            headers: {
                'Authorization': localStorage.getItem('jwtToken')
            }
        })
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error('Error fetching messages:', error));

        // Listen for new messages
        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receiveMessage');
            socket.emit('leaveRoom', { chatId });
        };
    }, [chatId]);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                chatId,
                content: newMessage,
            };
            socket.emit('sendMessage', message);
            setNewMessage('');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="h-80 overflow-y-auto mb-4">
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    className="flex-1 border rounded-l-lg p-2"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="bg-blue-500 text-white px-4 rounded-r-lg"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
