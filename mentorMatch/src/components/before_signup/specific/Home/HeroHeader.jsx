import React from 'react';
import heroImage from '../../../../assets/image/OIG3.jpeg';
import { Navigate, useNavigate } from 'react-router-dom';

const HeroHeader = () => {
  const navigate = useNavigate();
  const signup = () => {
    navigate('/signup')
  }
  const learnMore = () => {
    navigate('/login')
  }

  return (
    <header className="bg-primary py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Mentorship and Networking Platform</h1>
          <p className="text-xl mb-6">Empowering your mentorship journey with advanced mentor matching and networking features.</p>
          <button onClick={learnMore} className="bg-accent text-white px-6 py-2 rounded mr-4">Log In</button>
          <button onClick={signup} className="bg-secondary text-gray-700 px-6 py-2 rounded">Sign Up </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className="w-full h-64 bg-gray-200">
          <img src={heroImage} alt="Hero Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
