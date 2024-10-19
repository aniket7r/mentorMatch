// /components/ProfileTab/ProfileTab.jsx
import React, { useState } from 'react';

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState('Portfolio');

  return (
    <div className="flex space-x-4 mt-6 border-b-2 border-gray-200">
      {['Portfolio', 'Experience', 'Education', 'Skills'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 px-4 ${
            activeTab === tab ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-600'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTab;
