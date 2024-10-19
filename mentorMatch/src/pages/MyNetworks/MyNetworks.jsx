import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Mentors from './Mentors';
import Mentees from './Mentees';
import Followers from './Followers';
import Following from './Following';
import MyNetworkHeader from './MyNetworkHeader';

const MyNetwork = () => {
  const [activeTab, setActiveTab] = useState("mentors");
  // useEffect(() => {
  //   if (!activeTab) {
  //     setActiveTab('mentors');
  //   }
  // }, [activeTab]);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <MyNetworkHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="user/network/mentors" element={<Mentors />} />
          <Route path="user/network/mentees" element={<Mentees />} />
          <Route path="user/network/followers" element={<Followers />} />
          <Route path="user/network/following" element={<Following />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default MyNetwork;

