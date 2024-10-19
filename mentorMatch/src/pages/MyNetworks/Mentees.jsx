import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mentees = () => {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    const fetchMentorshipData = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Assuming a JWT token is stored in local storage
        const response = await axios.get('http://localhost:4000/api/v1/network/mentorship', {
          headers: { 'Authorization': token} // Ensure the token is included properly
        });

        const menteesData = response.data.mentees;
        setMentees(menteesData); // Set mentees data in state
      } catch (error) {
        console.error('Failed to fetch mentorship data:', error);
      }
    };

    fetchMentorshipData();
  }, []);

  return (
    <div>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Mentees</h1>
        <p className="text-gray-600">Overview and manage your mentees</p>
      </header>
      
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Mentees</h2>
        <ul className="space-y-4">
          {mentees.length > 0 ? mentees.map((mentee) => (
            <li key={mentee._id} className="border-b border-gray-200 pb-2">
              <p className="text-gray-800 font-semibold">{mentee.firstName} {mentee.lastName}</p>
              <span className="text-gray-600 text-sm">{mentee.username}</span>
            </li>
          )) : (
            <li>No mentees available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Mentees;
