import React from 'react';

const ProfileHeader = () => {
  return (
    <header className="bg-primary text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <p className="text-lg mt-4">Personalized greeting and summary of the user's profile</p>
      </div>
    </header>
  );
}

export default ProfileHeader;
