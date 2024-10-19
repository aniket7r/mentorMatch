import React from 'react';

const MatchingGuide = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide</h2>
        <p className="text-gray-600">Follow these steps to get the most out of our mentor matching tool:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li className="text-gray-600">Complete your profile with accurate information.</li>
          <li className="text-gray-600">Specify your preferences and goals.</li>
          <li className="text-gray-600">Review the potential matches provided.</li>
          <li className="text-gray-600">Initiate a connection with your preferred mentor or mentee.</li>
        </ol>
      </div>
    </section>
  );
};

export default MatchingGuide;
