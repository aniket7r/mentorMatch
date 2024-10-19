import React from 'react';

const Messages = () => {
  const messages = [
    {
      name: 'Emily Clark',
      content: 'Hi, I would like to connect with you regarding a project opportunity.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Michael Brown',
      content: 'Can we schedule a meeting to discuss your career transition?',
      image: 'https://via.placeholder.com/150',
    },
    // Add more messages as needed
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Messages</h2>
        <div className="flex flex-wrap justify-center">
          {messages.map((message, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow">
                <img src={message.image} alt={message.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <p className="text-gray-700 mb-2">"{message.content}"</p>
                <p className="text-gray-600 font-bold">{message.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Messages;
