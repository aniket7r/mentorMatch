import React from 'react';
import '../../styles/landing/Footer.css';
import facebookIcon from '../../assets/landing/icons/facebook.svg';
import twitterIcon from '../../assets/landing/icons/twitter.svg';
import instagramIcon from '../../assets/landing/icons/instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
            <div className="footer__details">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <p>Contact us: info@yourcompany.com</p>
            </div>
        </footer>
    );
};

export default Footer;
