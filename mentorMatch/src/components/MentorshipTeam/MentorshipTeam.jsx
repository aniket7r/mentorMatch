import React from 'react';

const MentorshipTeam = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Mentorship Team</h2>
        <div className="flex justify-around">
          <div className="w-1/3 text-center">
            <img src="path/to/team-member1.jpg" alt="Team Member 1" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Team Member 1</h3>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="w-1/3 text-center">
            <img src="path/to/team-member2.jpg" alt="Team Member 2" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Team Member 2</h3>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="w-1/3 text-center">
            <img src="path/to/team-member3.jpg" alt="Team Member 3" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Team Member 3</h3>
            <p className="text-gray-600">Role</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipTeam;
