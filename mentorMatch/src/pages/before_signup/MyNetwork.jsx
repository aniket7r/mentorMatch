import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import NetworkOverview from '../../components/before_signup/specific/Network/NetworkOverview';
import ConnectionRequests from '../../components/before_signup/specific/Network/ConnectionRequests';
import Messages from '../../components/before_signup/specific/Network/Messages';
import NetworkCTA from '../../components/before_signup/specific/Network/NetworkCTA';
import Footer from '../../components/before_signup/common/Footer/Footer';

const MyNetwork = () => {
  return (
    <div>
      <Navbar />
      <NetworkOverview />
      <ConnectionRequests />
      <Messages />
      <NetworkCTA />
      <Footer />
    </div>
  );
}

export default MyNetwork;
