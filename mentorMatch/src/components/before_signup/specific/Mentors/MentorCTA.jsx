import React from 'react';

const MentorCTA = () => {
  return (
    <section className="py-20 bg-highlight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us as a Mentor and Mentee</h2>
        <p className="text-xl mb-6 text-gray-800">
          Share your knowledge and experience by becoming a mentor on our platform and find the guidance and support from other by becoming mentee. Help others achieve their goals and grow professionally.
        </p>
        <button className="bg-primary hover:bg-primary-dark text-Black font-bold py-2 px-4 rounded">
          Become a Mentor and Mentee
        </button>
      </div>
    </section>
  );
}

export default MentorCTA;
