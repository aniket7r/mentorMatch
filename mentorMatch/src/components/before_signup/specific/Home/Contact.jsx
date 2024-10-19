import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-xl mb-4">Email: info@example.com</p>
            <p className="text-xl mb-4">Phone: (123) 456-7890</p>
            {/* <p className="text-xl mb-4">Address: 123 Main Street, Mumbai, India</p> */}
          </div>
          <div className="w-full md:w-1/2 p-4">
            {/* <div className="w-full h-64 bg-gray-200"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
