import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import MentorProfiles from '../../components/before_signup/specific/Mentors/MentorProfiles';
import HowItWorks from '../../components/before_signup/specific/Mentors/HowItWorks';
import Testimonials from '../../components/before_signup/specific/Mentors/Testimonials';
import MentorCTA from '../../components/before_signup/specific/Mentors/MentorCTA';
import Footer from '../../components/before_signup/common/Footer/Footer';
import MatchingIntroduction from '../../components/MatchingIntroduction/MatchingIntroduction';

const Mentorship = () => {
  return (
    <div>
      <Navbar />
      <MatchingIntroduction />
      <MentorProfiles />
      <HowItWorks />
      <Testimonials />
      <MentorCTA />
      <Footer />
    </div>
  );
}

export default Mentorship;
