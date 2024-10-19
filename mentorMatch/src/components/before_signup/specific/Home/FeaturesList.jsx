import React from 'react';

const FeaturesList = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Empowering mentorship and networking platform for you</h2>
        <p className="text-xl mb-6">Discover the features that make our platform unique.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Advanced Mentor Matching</h3>
              <p className="text-gray-700">Find the perfect mentor with our advanced matching algorithm.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Powerful Networking Features</h3>
              <p className="text-gray-700">Connect with professionals and expand your network.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Seamless Communication</h3>
              <p className="text-gray-700">Communicate effortlessly with mentors and mentees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesList;
