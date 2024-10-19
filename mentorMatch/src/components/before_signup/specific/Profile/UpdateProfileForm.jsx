import React from 'react';

const UpdateProfileForm = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Update Profile</h2>
        <form className="bg-gray-100 p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              id="bio"
              name="bio"
              rows="4"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </section>
  );
}

export default UpdateProfileForm;
