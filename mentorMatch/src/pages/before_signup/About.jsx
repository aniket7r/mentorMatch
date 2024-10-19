import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import CompanyOverview from '../../components/before_signup/specific/About/CompanyOverview';
import Mission from '../../components/before_signup/specific/About/Mission';
import Values from '../../components/before_signup/specific/About/Values';
import Footer from '../../components/before_signup/common/Footer/Footer';
import Contact from '../../components/before_signup/specific/Home/Contact';

const About = () => {
  return (
    <div>
      <Navbar />
      <CompanyOverview />
      <Mission />
      <Values />
      <Contact/>
      <Footer />
    </div>
  );
}

export default About;
