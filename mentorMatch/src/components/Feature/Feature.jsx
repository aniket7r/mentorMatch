import React from 'react';

const Feature = ({ title, description, image }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="bg-accent text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="w-1/2">
          <img src={image} alt={title} className="w-full rounded" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
