import React from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';
import PostsSection from '../components/PostsSection';
import NotificationsSection from '../components/NotificationsSection';
import MatchesSection from '../components/MatchesSection';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const NotificationPage = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Navbar />
            <div className="flex  flex-auto gap-4 overflow-hidden p-4">
                <div className="hidden md:block w-1/5 p-0"></div>
                
                <div className="w-full md:w-4/5 bg-white overflow-y-auto">
                    <NotificationsSection />
                </div>
                <div className="hidden md:block w-1/5 p-0"></div>
            </div>
        </div>
    );
};

export default NotificationPage;
