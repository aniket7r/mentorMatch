import React from 'react';
import userImage3 from "../../../../assets/image/pexels-apunto-group-agencia-de-publicidad-53086916-7752844.jpg"
import userImage4 from "../../../../assets/image/pexels-gustavo-fring-3874032.jpg"
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alice Johnson',
      image: userImage3,
      testimonial: 'This platform helped me find a mentor who guided me through my career transition seamlessly.',
    },
    {
      name: 'Bob Williams',
      image: userImage4,
      testimonial: 'The mentorship I received was invaluable. It helped me grow both personally and professionally.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
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
