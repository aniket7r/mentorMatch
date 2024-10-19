import React from 'react';
import Navbar from '../../components/landing/Navbar.jsx';
import About from '../../components/landing/About';
import Footer from '../../components/landing/Footer';
import '../../styles/landing/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <About />
            <Footer />
        </div>
    );
};

export default LandingPage;
