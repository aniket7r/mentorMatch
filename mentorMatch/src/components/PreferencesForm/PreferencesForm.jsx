import React from 'react';

const PreferencesForm = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Update Your Preferences</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Mentor Skills</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Industries</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Goals</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button className="bg-accent text-white py-2 px-4 rounded">Update Preferences</button>
        </form>
      </div>
    </section>
  );
};

export default PreferencesForm;
