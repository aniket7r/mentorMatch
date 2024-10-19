import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/before_signup/Home';
import About from './pages/before_signup/About';
import Mentors from './pages/before_signup/Mentors';
import Mentees from './pages/before_signup/Mentees';
// import MyNetwork from './pages/before_signup/MyNetwork';
import Notifications from './pages/before_signup/NotificationsPage';
import Profile from './pages/before_signup/Profile';
import Contact from './pages/before_signup/Contact';
import Messages from './pages/before_signup/Messages';
import MentorConversations from './pages/before_signup/MentorConversations';
import MenteeConversations from './pages/before_signup/MenteeConversations';
import Home from './pages/Home/Home';
import MyProfile from './pages/MyProfile/MyProfile';
import MentorMatching from './pages/MentorMatching/MentorMatching';
// import MyNetwork from './pages/before_signup/MyNetwork';
// import Messages from './pages/Messages/Messages';
import Mentorship from './pages/before_signup/Mentorship';
import SignupPage from './pages/signin_signup/SignupPage';
import LoginPage from './pages/signin_signup/LoginPage';
import MyNetwork from './pages/MyNetworks/MyNetworks';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mentorship" element={<Mentorship />} />
        {/* <Route path="/mentors" element={<Mentors />} /> */}
        {/* <Route path="/mentees" element={<Mentees />} /> */}
        <Route path="/network" element={<MyNetwork />} />
        <Route path="/user/notification" element={<Notifications />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user/messages" element={<Messages />} /> */}
        <Route path="/messages/mentors" element={<MentorConversations />} />
        <Route path="/messages/mentees" element={<MenteeConversations />} />
        // After signin Routes
        <Route path="/user" element={<Home />} />
        <Route path="/user/profile" element={<MyProfile />} />
        <Route path="/user/mentor-matching" element={<MentorMatching />} />
        <Route path="/user/network/*" element={<MyNetwork />} />
        <Route path="/user/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
