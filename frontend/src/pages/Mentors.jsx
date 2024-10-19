import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
const MentorshipSection = () => {
    const [mentorshipData, setMentorshipData] = useState(null);
    const [selectedTab, setSelectedTab] = useState('mentors');

    useEffect(() => {
        console.log('Fetching mentorship data...');
        const token = localStorage.getItem('jwt');
        axios.get('http://localhost:4000/api/v1/network/mentorship', {
            headers: {
                'Authorization': token
            }
        })
        .then((response) => {
            setMentorshipData(response.data);
            console.log("Mentorship data:", response.data);
        })
        .catch((error) => {
            console.error('There was an error fetching mentorship data!', error);
        });
    }, []);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
        <Navbar />
        <div className="p-5 bg-white h-full overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Mentorship Data</h2>
            <div className="flex justify-center mb-4">
                <button
                    className={`px-4 py-2 mx- ${selectedTab === 'mentors' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded`}
                    onClick={() => handleTabClick('mentors')}
                >
                    Mentors
                </button>
                <button
                    className={`px-4 py-2 mx-2 ${selectedTab === 'mentees' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded`}
                    onClick={() => handleTabClick('mentees')}
                >
                    Mentees
                </button>
            </div>
            {mentorshipData ? (
                selectedTab === 'mentors' ? (
                    mentorshipData.mentors.map((mentorId) => (
                        <div key={mentorId} className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-100 shadow">
                            <p><strong>Mentor ID:</strong> {mentorId}</p>
                        </div>
                    ))
                ) : (
                    mentorshipData.mentees.map((menteeId) => (
                        <div key={menteeId} className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-100 shadow">
                            <p><strong>Mentee ID:</strong> {menteeId}</p>
                        </div>
                    ))
                )
            ) : (
                <p>Loading mentorship data...</p>
            )}
        </div>
        </>
    );
};

export default MentorshipSection;
