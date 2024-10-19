import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentorshipData = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Assuming a JWT token is stored in local storage
        const response = await axios.get('http://localhost:4000/api/v1/network/mentorship', {
          headers: { 'Authorization': token} // Ensure the token is included properly
        });

        const mentorsData = response.data.mentors;
        setMentors(mentorsData); // Set mentors data in state
      } catch (error) {
        console.error('Failed to fetch mentorship data:', error);
      }
    };

    fetchMentorshipData();
  }, []);

  return (
    <div>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Mentors</h1>
        <p className="text-gray-600">Find and connect with experienced mentors</p>
      </header>
      
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Mentors</h2>
        <ul className="space-y-4">
          {mentors.length > 0 ? mentors.map((mentor) => (
            <li key={mentor._id} className="border-b border-gray-200 pb-2">
              <p className="text-gray-800 font-semibold">{mentor.firstName} {mentor.lastName}</p>
              <span className="text-gray-600 text-sm">{mentor.username}</span>
            </li>
          )) : (
            <li>No mentors available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Mentors;
