import React from 'react';

const ConnectionRequests = () => {
  const requests = [
    {
      name: 'Alice Johnson',
      role: 'UX Designer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bob Williams',
      role: 'Data Analyst',
      image: 'https://via.placeholder.com/150',
    },
    // Add more requests as needed
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Connection Requests</h2>
        <div className="flex flex-wrap justify-center">
          {requests.map((request, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow">
                <img src={request.image} alt={request.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">{request.name}</h3>
                <p className="text-gray-700 mb-2">{request.role}</p>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Accept</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConnectionRequests;
