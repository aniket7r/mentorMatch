import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileSection = () => {
    const [Name, setName] = useState('');

    useEffect(() => {
        console.log('Fetching profile data...');
        const token = localStorage.getItem('jwt');
        axios.get('http://localhost:4000/api/v1/profile', {
            headers: {
                'Authorization': token
            }
        })
            .then((response) => {
                setName(response.data.firstName + " " + response.data.lastName);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className="p-5 bg-white-100 overflow-hidden">
            <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
            <p className="text-lg">{Name}</p>
            {/* Add more profile details as needed */}
        </div>
    );
};

export default ProfileSection;
