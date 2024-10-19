import React from 'react';
import { FaCamera } from 'react-icons/fa';

const ProfileHeader = ({ onEditProfile, onUploadCoverPhoto, onUploadProfilePhoto }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="relative">
          <img
            src="profile-pic-url.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
          <button
            onClick={onUploadProfilePhoto}
            className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full"
          >
            <FaCamera className="text-gray-700" />
          </button>
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold">Aniket K.</h2>
          <p className="text-gray-500">@aniketkumar6256</p>
          <p className="text-sm text-gray-500">
            Full Stack Web Developer, Python, Digital Marketing
          </p>
        </div>
        <div className="flex space-x-2">
          <button onClick={onUploadCoverPhoto} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Upload Cover Photo
          </button>
          <button onClick={onEditProfile} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
