import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex justify-around">
          <div className="w-1/3">
            <p className="text-gray-600 mb-4">"This platform has helped me find the perfect mentor!"</p>
            <h3 className="text-xl font-bold">User 1</h3>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600 mb-4">"I have grown my network significantly using HTM."</p>
            <h3 className="text-xl font-bold">User 2</h3>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600 mb-4">"The mentorship journey has been life-changing."</p>
            <h3 className="text-xl font-bold">User 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
