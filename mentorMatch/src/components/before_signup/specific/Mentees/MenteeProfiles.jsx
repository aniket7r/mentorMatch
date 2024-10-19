import React from 'react';

const MenteeProfiles = () => {
  const mentees = [
    {
      name: 'Emily Clark',
      goal: 'Front-End Developer',
      image: 'https://via.placeholder.com/150',
      description: 'Emily is eager to learn and grow her skills in front-end development, focusing on modern frameworks.',
    },
    {
      name: 'Michael Brown',
      goal: 'Data Scientist',
      image: 'https://via.placeholder.com/150',
      description: 'Michael aims to transition into data science, with a strong interest in machine learning and analytics.',
    },
    // Add more mentee profiles as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mentees</h2>
        <div className="flex flex-wrap justify-center">
          {mentees.map((mentee, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded shadow">
                <img src={mentee.image} alt={mentee.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">{mentee.name}</h3>
                <p className="text-gray-700 mb-2">Aspiring {mentee.goal}</p>
                <p className="text-gray-600">{mentee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenteeProfiles;
