import React from 'react';

const EditProfile = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Skills</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Interests</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <button className="bg-accent text-white py-2 px-4 rounded">Save Changes</button>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
