import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MatchesSection = () => {
    const [matches, setMatches] = useState({});
    const [userId, setUserId] = useState('');

    useEffect(() => {
        console.log('Fetching profile data...');
        const token = localStorage.getItem('jwt');
        axios.get('http://localhost:4000/api/v1/match', {
            headers: {
                'Authorization': token
            }
        })
            .then((response) => {
                setMatches(response.data.matches);
                setUserId(response.data.userId);
                console.log("response data: ", response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }, []);

    const sendNotification = (receiverId, type) => {
        const token = localStorage.getItem('jwt');
        axios.post('http://localhost:4000/api/v1/network/notification-manager', {
            sender: userId,
            receiver: receiverId,
            type: type,
            status: 'unseen'
        }, {
            headers: {
                'Authorization': token
            }
        })
        .then((response) => {
            console.log('Notification sent successfully:', response.data);
        })
        .catch((error) => {
            console.error('There was an error sending the notification!', error);
        });
    };

    return (
        <div className="p-5 bg-white-100 h-full overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Matches</h2>
            {
                Object.entries(matches).map(([matchedUserId, details]) => {
                    if (userId === matchedUserId) return null; // Skip if userId matches matchedUserId
                    return (
                        <Card>
                        <div key={matchedUserId} className="mb-3 p-3 border border-gray-300 rounded-lg bg-gray-100">
                            <p className="text-lg">UserId: {matchedUserId}</p>
                            <p className="text-lg">Score: {details.score}</p>
                            <div className="flex gap-2 mt-2">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={() => sendNotification(matchedUserId, 'mentorship')}
                                >
                                    Mentor Request
                                </button>
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                    onClick={() => sendNotification(matchedUserId, 'follows')}
                                >
                                    Follow Request
                                </button>
                            </div>
                        </div>
                        </Card>
                    );
                })
            }
        </div>
    );
};

export default MatchesSection;
