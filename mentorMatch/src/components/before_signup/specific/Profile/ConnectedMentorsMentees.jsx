import React from 'react';

const ConnectedMentorsMentees = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Connected Mentors and Mentees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold">Jane Smith</h3>
            <p className="text-gray-700">Mentee - Junior Developer</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold">Michael Johnson</h3>
            <p className="text-gray-700">Mentor - Senior Developer</p>
          </div>
          {/* Add more connected mentors and mentees as needed */}
        </div>
      </div>
    </section>
  );
}

export default ConnectedMentorsMentees;
