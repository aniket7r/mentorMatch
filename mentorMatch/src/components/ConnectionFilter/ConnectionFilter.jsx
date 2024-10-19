import React from 'react';

const ConnectionFilter = ({ setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 py-4 bg-primary text-white">
      <button onClick={() => setFilter('mentors')} className="px-4 py-2 bg-accent rounded">Mentors</button>
      <button onClick={() => setFilter('mentees')} className="px-4 py-2 bg-accent rounded">Mentees</button>
      <button onClick={() => setFilter('followers')} className="px-4 py-2 bg-accent rounded">Followers</button>
      <button onClick={() => setFilter('following')} className="px-4 py-2 bg-accent rounded">Following</button>
    </div>
  );
};

export default ConnectionFilter;
