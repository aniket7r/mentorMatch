import React from 'react';

const NetworkOverview = () => {
  const connections = [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      image: 'https://via.placeholder.com/150',
    },
    // Add more connections as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Network</h2>
        <div className="flex flex-wrap justify-center">
          {connections.map((connection, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded shadow">
                <img src={connection.image} alt={connection.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">{connection.name}</h3>
                <p className="text-gray-700 mb-2">{connection.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetworkOverview;
