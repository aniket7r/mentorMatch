import React from 'react';

const FAQ = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">How do I edit my profile?</h3>
            <p className="text-gray-600">You can edit your profile by clicking on the 'Edit Profile' button and updating your information.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How do I find a mentor?</h3>
            <p className="text-gray-600">Use the 'Mentor Matching' feature to find a mentor that matches your preferences and goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
