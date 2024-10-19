import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <div className="w-full h-64 bg-gray-200 rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019568658275!2d-122.41941508468185!3d37.774929179759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0fd61f%3A0x2a9bd28746b71dc2!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1537341685220"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
