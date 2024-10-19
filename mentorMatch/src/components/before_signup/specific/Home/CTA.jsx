import React from 'react';
import newsletterImage from "../../../../assets/image/pexels-cottonbro-4064848.jpg"
const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Informed with Our Newsletter</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="w-full h-64 bg-gray-200">
              <img src={newsletterImage} alt="newsletter" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Enter your email" />
            <button className="bg-accent text-white px-6 py-2 rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
