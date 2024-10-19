import React from 'react';

const UserTestimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="flex justify-around">
          <div className="w-1/3">
            <p className="text-gray-600 mb-4">"John has been an amazing mentor, helping me grow my skills."</p>
            <h3 className="text-xl font-bold">Mentee 1</h3>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600 mb-4">"John's guidance has been invaluable in my career."</p>
            <h3 className="text-xl font-bold">Mentee 2</h3>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600 mb-4">"I highly recommend John as a mentor."</p>
            <h3 className="text-xl font-bold">Mentee 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
