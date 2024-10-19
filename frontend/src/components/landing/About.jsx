import React from 'react';
import '../../styles/landing/About.css';
import background from '../../assets/landing/background.jpg';

const About = () => {
    return (
        <section className="about" style={{ backgroundImage: `url(${background})` }}>
            <div className="about__content">
                <h1>Welcome to Our Platform</h1>
                <p>
                    We connect professionals from all over the world. Join us to network, share ideas, and grow your career.
                </p>
                <button className="about__button">Learn More</button>
            </div>
        </section>
    );
};

export default About;
