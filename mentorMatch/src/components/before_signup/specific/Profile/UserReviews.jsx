import React from 'react';

const UserReviews = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">User Reviews and Endorsements</h2>
        <div className="bg-white p-6 rounded shadow-md">
          <p className="text-gray-700 italic">
            "John is an amazing mentor. His guidance helped me secure my first job as a developer!"
          </p>
          <p className="text-gray-700 mt-2 text-right">- Jane Smith</p>
        </div>
        {/* Add more user reviews as needed */}
      </div>
    </section>
  );
}

export default UserReviews;
