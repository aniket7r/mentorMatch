import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sara Johnson',
      image: 'https://via.placeholder.com/150',
      testimonial: 'I found the perfect mentor who helped me navigate my career change into tech.',
    },
    {
      name: 'David Lee',
      image: 'https://via.placeholder.com/150',
      testimonial: 'The mentorship program gave me the guidance I needed to advance my skills and career.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Mentees Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded shadow">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <p className="text-gray-700 mb-2">"{testimonial.testimonial}"</p>
                <p className="text-gray-600 font-bold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
