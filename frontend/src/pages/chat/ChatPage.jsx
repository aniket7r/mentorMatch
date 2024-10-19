// src/components/chat/ChatPage.jsx
import React from 'react';
import ChatRoom from '../../components/chat/ChatRoom';
import Navbar from '../../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const ChatPage = () => {
    return (
        <>
        <Navbar />
        <Card variant="outlined">
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <div className="w-4/5 bg-white mt-4 ">
                <Card>
                <h1 className="text-3xl font-bold mt-8">Chat</h1>
                </Card>
                <div className=" bg-gray mt-2"></div>
                <Card variant="outlined">
                <div className="mt-4">
                    <ChatRoom chatId="testRoom" />
                </div>
                </Card>
            </div>
                
        </div>
        </Card>
        </>
    );
};

export default ChatPage;
