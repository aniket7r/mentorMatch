import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const EditProfileModal = ({ isOpen, onClose, onSave }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [headline, setHeadline] = useState('');
  const [industry, setIndustry] = useState('');
  const [school, setSchool] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [links, setLinks] = useState('');

  const handleSave = () => {
    onSave({ firstName, lastName, pronouns, headline, industry, school, country, city, links });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Profile</h3>
          <button onClick={onClose} className="text-gray-500">
            <MdOutlineClose className="text-xl" />
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Pronouns</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              placeholder="He/Him, She/Her, They/Them, etc."
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Headline</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Full Stack Web Developer, Python, Digital Marketing"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Industry</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Industry"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">School</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="School"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Country</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">City</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Other Links</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
              placeholder="LinkedIn, Portfolio, etc."
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-pink-500 text-white px-4 py-2 rounded-md"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
