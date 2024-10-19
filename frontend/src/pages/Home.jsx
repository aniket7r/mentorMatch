//LandingPage_PS is the landing page for after signin/signup

import React from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';
import PostsSection from '../components/PostsSection';
import MatchesSection from '../components/MatchesSection';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const HomePage = () => {
    return (
        
        <div className="flex flex-col h-screen bg-gray-100">
            <Navbar />
            <div className="flex  flex-auto gap-4 overflow-hidden p-4">
            
                <div className="hidden md:block w-1/5 p-0">
                <Card>
                    <ProfileSection />
                </Card>
                </div>
                
                <div className="w-full md:w-3/5 bg-white overflow-y-auto">
                    <PostsSection />
                </div>
                <div className="hidden md:block w-1/5 bg-white p-0 overflow-y-auto">
                    <MatchesSection />
                </div>
            </div>
        </div>
    );
};

export default HomePage;


