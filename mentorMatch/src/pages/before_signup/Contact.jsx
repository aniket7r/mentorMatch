import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import ContactHeader from '../../components/before_signup/specific/Contact/ContactHeader';
import ContactInfo from '../../components/before_signup/specific/Contact/ContactInfo';
import ContactForm from '../../components/before_signup/specific/Contact/ContactForm';
import LocationMap from '../../components/before_signup/specific/Contact/LocationMap';
import FAQ from '../../components/before_signup/specific/Profile/FAQ';
import Footer from '../../components/before_signup/common/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Contact;
