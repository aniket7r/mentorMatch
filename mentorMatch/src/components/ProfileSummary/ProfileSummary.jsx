import React from 'react';

const ProfileSummary = () => {
  return (
    <section className="bg-primary text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <img src="path/to/profile-picture.jpg" alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-gray-600">Mentor | Software Engineer</p>
      </div>
    </section>
  );
};

export default ProfileSummary;
