import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Step 1: Sign Up</h3>
              <p className="text-gray-700">Create an account and fill out your profile to get started.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Step 2: Find a Mentor and become a Mentee</h3>
              <p className="text-gray-700">Browse through our list of mentors and mentees to find the perfect match for your needs.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-2">Step 3: Connect</h3>
              <p className="text-gray-700">Start connecting with your mentor through our platform and achieve your goals together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
