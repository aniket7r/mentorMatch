import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-800">HTM</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-primary">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-primary">About Us</Link>
          <Link to="/mentorship" className="text-gray-800 hover:text-primary">Mentorship</Link>
          {/* <Link to="/mentees" className="text-gray-800 hover:text-primary">Mentees</Link> */}
          <Link to="/network" className="text-gray-800 hover:text-primary">Network</Link>
          {/* <Link to="/notifications" className="text-gray-800 hover:text-primary">Notifications</Link> */}
          {/* <Link to="/messages" className="text-gray-800 hover:text-primary">Messages</Link> */}
          <Link to="/contact" className="text-gray-800 hover:text-primary">Contact</Link>
          {/* <Link to="/profile" className="text-gray-800 hover:text-primary">My Profile</Link> */}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>About Us</Link>
            <Link to="/mentorship" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Mentorship</Link>
            {/* <Link to="/mentees" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Mentees</Link> */}
            <Link to="/network" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Network</Link>
            {/* <Link to="/notifications" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Notifications</Link> */}
            {/* <Link to="/profile" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>My Profile</Link> */}
            <Link to="/contact" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Contact</Link>
            {/* <Link to="/messages" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Messages</Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
