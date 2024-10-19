import React from 'react';

const MentorList = ({ mentors, setActiveChat }) => {
  return (
    <div className="w-1/4 border-r p-4">
      <h2 className="text-xl font-bold mb-4">Mentors</h2>
      <ul>
        {mentors.map((mentor, index) => (
          <li key={index} className="mb-2">
            <button onClick={() => setActiveChat(mentor)} className="text-left w-full">
              <div className="flex items-center">
                <img src={mentor.img} alt={mentor.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <h3 className="font-bold">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.role}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
