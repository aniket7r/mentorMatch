import React from 'react';

const MenteeList = ({ mentees, setActiveChat }) => {
  return (
    <div className="w-1/4 border-r p-4">
      <h2 className="text-xl font-bold mb-4">Mentees</h2>
      <ul>
        {mentees.map((mentee, index) => (
          <li key={index} className="mb-2">
            <button onClick={() => setActiveChat(mentee)} className="text-left w-full">
              <div className="flex items-center">
                <img src={mentee.img} alt={mentee.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <h3 className="font-bold">{mentee.name}</h3>
                  <p className="text-gray-600">{mentee.role}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenteeList;
