import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-6">Sign up for our newsletter to get the latest news and updates.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-400 py-2 px-4 mb-4 w-full max-w-sm mx-auto"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;
