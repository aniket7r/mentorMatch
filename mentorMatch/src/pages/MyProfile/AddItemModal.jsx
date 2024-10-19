// /pages/Profile.jsx
import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileSection from './ProfileSection';
import EditProfileModal from './EditProfileModal';
import AddItemModal from './AddItemModal';
import ProfileTab from './ProfileTab';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Aniket K.',
    bio: 'Full Stack Web Developer, Python, Digital Marketing',
    location: 'India',
    joinedDate: 'Joined on May 1, 2023',
    profilePicture: 'path_to_profile_picture',
  });
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    setShowEditProfile(false);
  };

  return (
    <div className="container mx-auto p-4">
      <ProfileHeader user={user} />
      <ProfileTab />
      <ProfileSection title="Portfolio">
        {/* Portfolio content goes here */}
      </ProfileSection>
      <ProfileSection title="Experience">
        {/* Experience content goes here */}
        <button
          onClick={() => setShowAddItem(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          + Add Experience
        </button>
      </ProfileSection>
      {/* Other sections... */}
      {showEditProfile && (
        <EditProfileModal
          user={user}
          onSave={handleSaveProfile}
          onClose={() => setShowEditProfile(false)}
        />
      )}
      {showAddItem && (
        <AddItemModal
          title="Add Experience"
          onSave={(itemData) => {
            /* Handle save */
          }}
          onClose={() => setShowAddItem(false)}
        />
      )}
    </div>
  );
};

export default Profile;
