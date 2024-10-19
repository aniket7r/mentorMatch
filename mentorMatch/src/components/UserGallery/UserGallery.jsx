import React from 'react';

const UserGallery = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Gallery</h2>
        <div className="flex justify-around">
          <img src="path/to/photo1.jpg" alt="Gallery 1" className="w-1/3 rounded mb-4" />
          <img src="path/to/photo2.jpg" alt="Gallery 2" className="w-1/3 rounded mb-4" />
          <img src="path/to/photo3.jpg" alt="Gallery 3" className="w-1/3 rounded mb-4" />
        </div>
      </div>
    </section>
  );
};

export default UserGallery;
