import React from 'react';

const ContactInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Address</h3>
            <p className="text-gray-700">1234 Street Name, City, State, 12345</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-700">+1 (234) 567-8901</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-700">info@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
