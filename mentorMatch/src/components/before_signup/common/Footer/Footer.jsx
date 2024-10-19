import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center mb-4">
          <a href="#" className="text-gray-700 mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-700 mx-2">Terms of Service</a>
          <a href="#" className="text-gray-700 mx-2">Contact Us</a>
        </div>
        <p className="text-gray-700">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
