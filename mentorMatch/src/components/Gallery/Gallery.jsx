import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
        <div className="flex justify-around">
          <div className="w-1/3">
            <img src="path/to/image1.jpg" alt="Success Story 1" className="w-full rounded mb-4" />
            <p className="text-gray-600">Testimonial 1</p>
          </div>
          <div className="w-1/3">
            <img src="path/to/image2.jpg" alt="Success Story 2" className="w-full rounded mb-4" />
            <p className="text-gray-600">Testimonial 2</p>
          </div>
          <div className="w-1/3">
            <img src="path/to/image3.jpg" alt="Success Story 3" className="w-full rounded mb-4" />
            <p className="text-gray-600">Testimonial 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
