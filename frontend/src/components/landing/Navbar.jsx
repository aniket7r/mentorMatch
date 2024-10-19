import React from 'react';
import '../../styles/landing/Navbar.css';
import logo from '../../assets/landing/logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar__links">
                <a href="/signup">Join Us</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
