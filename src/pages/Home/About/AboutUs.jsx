import React from "react";
import "./AboutUs.css";
import teamImage from "../../../assets/team/team1.jpg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h3 className="about-head-text">About CyberWatt</h3>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={teamImage} alt="Our Team" />
          </div>

          <div className="about-text">
            <p>
              We are a passionate team dedicated to delivering exceptional
              solutions to our clients. With years of experience in the
              industry, we strive to create innovative products and services
              that make a difference.
            </p>
            <p>
              Our mission is to empower businesses and individuals through
              cutting-edge technology and outstanding customer support. We value
              integrity, creativity, and excellence in everything we do.
            </p>
            <ul className="about-highlights">
              <li>10+ years of experience</li>
              <li>Team of 50+ skilled professionals</li>
              <li>100% customer satisfaction focus</li>
            </ul>

            <button className="about-button"><a href="/about">Learn More</a></button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
