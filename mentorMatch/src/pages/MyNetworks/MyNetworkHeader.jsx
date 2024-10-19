import React from 'react';
import { Link } from 'react-router-dom';

const MyNetworkHeader = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 sm:mb-0">My Network</div>
        <div className="flex space-x-4">
          <Link
            to="user/network/mentors"
            className={`py-2 px-4 ${activeTab === 'mentors' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
            onClick={() => setActiveTab('mentors')}
          >
            Mentors
          </Link>
          <Link
            to="user/network/mentees"
            className={`py-2 px-4 ${activeTab === 'mentees' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
            onClick={() => setActiveTab('mentees')}
          >
            Mentees
          </Link>
          <Link
            to="user/network/followers"
            className={`py-2 px-4 ${activeTab === 'followers' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
            onClick={() => setActiveTab('followers')}
          >
            Followers
          </Link>
          <Link
            to="user/network/following"
            className={`py-2 px-4 ${activeTab === 'following' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
            onClick={() => setActiveTab('following')}
          >
            Following
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MyNetworkHeader;
