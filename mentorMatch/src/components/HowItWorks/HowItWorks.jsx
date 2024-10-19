import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-secondary text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex justify-around">
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p className="text-gray-600">Create your profile and set your preferences.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p className="text-gray-600">Get matched with mentors and mentees based on your preferences.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p className="text-gray-600">Start your mentorship journey and grow your network.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
