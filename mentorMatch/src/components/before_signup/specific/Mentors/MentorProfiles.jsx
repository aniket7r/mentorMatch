import React from 'react';
import userImage1 from "../../../../assets/image/pexels-olly-3769021.jpg"
import userImage2 from "../../../../assets/image/pexels-olly-3783725.jpg"


const MentorProfiles = () => {
  const mentors = [
    {
      name: 'Amy Jones',
      position: 'Senior Developer',
      image: userImage1,
      description: 'Amy has over 10 years of experience in software development and specializes in backend technologies.',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      image: userImage2,
      description: 'Jane is a seasoned product manager with a knack for bringing innovative products to market.',
    },
    // Add more mentor profiles as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">You are Mentor as well Mentee</h2>
        <div className="flex flex-wrap justify-center">
          {mentors.map((mentor, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded shadow">
                <img src={mentor.image} alt={mentor.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">{mentor.name}</h3>
                <p className="text-gray-700 mb-2">{mentor.position}</p>
                <p className="text-gray-600">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorProfiles;
