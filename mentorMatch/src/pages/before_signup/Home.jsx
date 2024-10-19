import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import HeroHeader from '../../components/before_signup/specific/Home/HeroHeader';
import FeaturesList from '../../components/before_signup/specific/Home/FeaturesList';
import Benefits from '../../components/before_signup/specific/Home/Benefits';
import Services from '../../components/before_signup/specific/Home/Services';
import CTA from '../../components/before_signup/specific/Home/CTA';
import Testimonials from '../../components/before_signup/common/Testimonials/Testimonials';
import Contact from '../../components/before_signup/specific/Home/Contact';
import Footer from '../../components/before_signup/common/Footer/Footer';

const LandingHome = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <FeaturesList />
      <Benefits />
      <Services />
      <CTA />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingHome;
