import React from 'react';
import './HeroSection.css';
// You'll need to add your own person image
import personImage from '../../../assets/backgrounds/hero-person.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Description and Button */}
        <div className="hero-left">
          <h1><span className='head-text'>C</span>yber<span className='head-text'>W</span>att<span className='head-text'>S</span>olutions</h1>
          <h2>Best Electrical And IT Services with Perfect Repairs</h2>
          <p>
            Experience amazing services and join thousands of satisfied users.
            Experience the difference today!
          </p>
          <button className="hero-button">Contact Us</button>
        </div>

        {/* Middle Side - Person Image */}
        <div className="hero-middle">
          <img src={personImage} alt="Person" className="hero-image" />
        </div>

        {/* Right Side - Five Star Review */}
        <div className="hero-right">
          <div className="review-box">
            <h3>User Reviews</h3>
            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>"Best service ever!"</p>
            <span className="reviewer-name">- Happy Customer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;