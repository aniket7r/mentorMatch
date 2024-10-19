import React from 'react';

const ActiveConnections = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Active Connections</h2>
        <ul className="space-y-4">
          <li className="text-gray-600">Mentee: Jane Smith</li>
          <li className="text-gray-600">Mentee: Robert Brown</li>
          <li className="text-gray-600">Mentee: Emily Davis</li>
        </ul>
      </div>
    </section>
  );
};

export default ActiveConnections;
