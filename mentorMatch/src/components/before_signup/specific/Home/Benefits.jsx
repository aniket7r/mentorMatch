import React from 'react';
import algoImage from '../../../../assets/image/create a svg of multiples peoples  ( nodes ) in a network structure where 4 are highlighted(w.png';

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Unlock Your Potential with Advanced Mentor Matching</h2>
        <p className="text-xl mb-6">Our platform provides the tools you need to succeed.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="w-full h-69 bg-gray-200">
            <img src={algoImage} alt="Hero Image" className="w-full h-full object-cover" />

            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Mentor Matching</h3>
              <p className="text-gray-700">Our advanced matching algorithm pairs you with the best mentor for your goals.</p>
            </div>
            <div className="bg-white p-6 rounded shadow mt-6">
              <h3 className="text-2xl font-bold mb-2">Networking</h3>
              <p className="text-gray-700">Expand your professional network and make valuable connections.</p>
            </div>
            <div className="bg-white p-6 rounded shadow mt-6">
              <h3 className="text-2xl font-bold mb-2">Mentorship Requests</h3>
              <p className="text-gray-700">Easily send and receive mentorship requests to connect with mentors.</p>
            </div>
            <div className="bg-white p-6 rounded shadow mt-6">
              <h3 className="text-2xl font-bold mb-2">Messaging</h3>
              <p className="text-gray-700">Seamlessly communicate with your mentor through our messaging system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
