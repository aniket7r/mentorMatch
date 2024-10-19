import React from 'react';

const MenteeCTA = () => {
  return (
    <section className="py-20 bg-highlight">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us as a Mentee</h2>
        <p className="text-xl mb-6 text-gray-800">
          Start your mentorship journey with us. Find the guidance and support you need to achieve your career goals.
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
          Become a Mentee
        </button>
      </div>
    </section>
  );
}

export default MenteeCTA;
