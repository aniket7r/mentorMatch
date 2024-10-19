import React from 'react';
import testimonialImage from "../../../../assets/image/pexels-thegiansepillo-1595943-5271121.jpg"
const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="w-full h-64 bg-gray-200 mb-4">
              <img src={testimonialImage} alt="testimonial" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl mb-4">"I was able to find the perfect mentor on this platform. The mentor matching feature is like no other!"</p>
            <p className="text-gray-700">- Jesika Fabelleon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
