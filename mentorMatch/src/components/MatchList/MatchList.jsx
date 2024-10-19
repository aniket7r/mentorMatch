// import React from 'react';

// const MatchList = () => {
//   const matches = [
//     { name: 'Jane Smith', matchPercentage: 90 },
//     { name: 'Robert Brown', matchPercentage: 85 },
//     { name: 'Emily Davis', matchPercentage: 80 }
//   ];

//   return (
//     <section className="py-12">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Potential Matches</h2>
//         <ul className="space-y-4">
//           {matches.map((match, index) => (
//             <li key={index} className="bg-white p-4 rounded shadow-md">
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold">{match.name}</h3>
//                   <p className="text-gray-600">Match Percentage: {match.matchPercentage}%</p>
//                 </div>
//                 <button className="bg-accent text-white py-2 px-4 rounded">View Profile</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default MatchList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [viewMode, setViewMode] = useState('tiles'); // State variable to track view mode

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://localhost:4000/api/v1/match', {
          headers: {
            'Authorization': token
          }
        });
        const data = response.data;
        const userId = data.userId;
        const matchesData = Object.entries(data.matches)
          .filter(([key]) => key !== userId)
          .map(([key, value]) => ({
            userId: key,
            score: value.score,
            matchedUser: value.matchedUser // Directly use the matchedUser object
          }));
        setMatches(matchesData);
      } catch (error) {
        console.error('Failed to fetch matches:', error);
      }
    };

    fetchMatches();
  }, []);

  const toggleViewMode = () => {
    setViewMode(viewMode === 'tiles' ? 'list' : 'tiles');
  };

  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Match List</h1>
          <button 
            onClick={toggleViewMode} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {viewMode === 'tiles' ? 'List View' : 'Tiles View'}
          </button>
        </div>
        <div className={viewMode === 'tiles' ? 'flex flex-wrap -mx-2' : 'space-y-4'}>
          {matches.map((match, index) => (
            <div 
              key={index} 
              className={viewMode === 'tiles' ? 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2' : 'w-full p-2'}
            >
              <div className="p-4 border rounded shadow-sm">
                <h2 className="text-xl font-semibold">
                  {match.matchedUser.firstName} {match.matchedUser.lastName}
                </h2>
                <p>Username: {match.matchedUser.username}</p>
                <p>Score: {match.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchList;
