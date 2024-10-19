import React from 'react';

const Followers = () => {
  return (
    <div>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Followers</h1>
        <p className="text-gray-600">People who are following you</p>
      </header>
      
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Followers</h2>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-2">
            <p className="text-gray-800 font-semibold">Charlie Adams</p>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <p className="text-gray-800 font-semibold">Dana White</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Followers;
