import React from 'react';

const ConnectionList = ({ connections }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map((connection, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md text-center">
              <img src={connection.img} alt={connection.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{connection.name}</h3>
              <p className="text-gray-600">{connection.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionList;
