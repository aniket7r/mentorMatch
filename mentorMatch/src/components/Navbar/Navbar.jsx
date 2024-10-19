import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">HTM</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/user" className="hover:text-accent">Home</Link>
          <Link to="/user/profile" className="hover:text-accent">My Profile</Link>
          <Link to="/user/mentor-matching" className="hover:text-accent">Mentor Matching</Link>
          <Link to="/user/network" className="hover:text-accent">My Networks</Link>
          <Link to="/user/messages" className="hover:text-accent">Messages</Link>
          <Link to="/user/notification" className="hover:text-accent">Notifications</Link>
        </div>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/user" className="block hover:text-accent">Home</Link>
          <Link to="/user/profile" className="block hover:text-accent">My Profile</Link>
          <Link to="/user/mentor-matching" className="block hover:text-accent">Mentor Matching</Link>
          <Link to="/user/network" className="block hover:text-accent">My Networks</Link>
          <Link to="/user/messages" className="block hover:text-accent">Messages</Link>
          <Link to="/user/notification" className="block hover:text-accent">Notifications</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;