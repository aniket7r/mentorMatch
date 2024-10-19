import React from 'react';

const ProfileInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-700">Mentor | Developer | Entrepreneur</p>
          <p className="text-gray-500">San Francisco, CA</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
