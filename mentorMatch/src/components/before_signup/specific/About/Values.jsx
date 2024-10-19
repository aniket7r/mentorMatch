import React from 'react';

const Values = () => {
  return (
    <section className="py-20 bg-highlight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-xl mb-6 text-gray-800">
          We value integrity, collaboration, and continuous learning. Our platform is built on the principles of trust and mutual respect, aiming to create a supportive and inclusive environment for all users.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-700">We uphold the highest standards of integrity in all of our actions.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-700">We believe in the power of working together to achieve common goals.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-700">We are committed to lifelong learning and personal growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
