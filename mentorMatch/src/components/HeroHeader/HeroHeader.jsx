import React from 'react';

const HeroHeader = () => {
  return (
    <header className="bg-primary text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Connecting mentors and mentees for success</h1>
        <p className="mb-8">Find your perfect mentor match today and grow your network.</p>
        <button className="bg-accent text-white py-2 px-4 rounded">Get Started</button>
      </div>
    </header>
  );
};

export default HeroHeader;
