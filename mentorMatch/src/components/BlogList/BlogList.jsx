import React from 'react';

const BlogList = () => {
  return (
    <section className="bg-primary text-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Stay Informed with Our Latest Blogs</h2>
        <div className="flex justify-around">
          <div className="w-1/3 bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Blog Title 1</h3>
            <p className="text-gray-600">Brief description of the blog post.</p>
            <button className="bg-accent text-white py-1 px-2 rounded mt-4">Read More</button>
          </div>
          <div className="w-1/3 bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Blog Title 2</h3>
            <p className="text-gray-600">Brief description of the blog post.</p>
            <button className="bg-accent text-white py-1 px-2 rounded mt-4">Read More</button>
          </div>
          <div className="w-1/3 bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Blog Title 3</h3>
            <p className="text-gray-600">Brief description of the blog post.</p>
            <button className="bg-accent text-white py-1 px-2 rounded mt-4">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
