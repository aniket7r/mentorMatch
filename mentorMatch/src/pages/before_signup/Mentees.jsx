import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import MenteeProfiles from '../../components/before_signup/specific/Mentees/MenteeProfiles';
import HowItWorks from '../../components/before_signup/specific/Mentees/HowItWorks';
import Testimonials from '../../components/before_signup/specific/Mentees/Testimonials';
import MenteeCTA from '../../components/before_signup/specific/Mentees/MenteeCTA';
import Footer from '../../components/before_signup/common/Footer/Footer';

const Mentees = () => {
  return (
    <div>
      <Navbar />
      <MenteeProfiles />
      <HowItWorks />
      <Testimonials />
      <MenteeCTA />
      <Footer />
    </div>
  );
}

export default Mentees;
