// AboutPage.js
import React from 'react';
import './About.css';
import { FaUsers, FaRocket, FaTrophy } from 'react-icons/fa';

// Placeholder images for team members
import teamMember1 from '../../assets/team/lokesh.png';
import teamMember2 from '../../assets/team/rahul.jpg';
import teamMember3 from '../../assets/team/team.png';

const About = () => {
  const teamMembers = [
    { name: 'Lokesh More', role: 'CEO', image: teamMember1 },
    { name: 'Rahul Misal', role: 'DEV', image: teamMember2 },
    { name: 'Pranit Igulkar', role: 'Lead Designer', image: teamMember3 },
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded' },
    { year: '2022', event: 'Expanded to county' },
    { year: '2023', event: 'Launched Major Product' },
    { year: '2025', event: 'Reached 5000+ Customers' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Discover our journey, values, and the team behind our success</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="about-overview">
        <div className="overview-container">
          <h2>Who We Are</h2>
          <div className="overview-content">
            <p>
              Founded in 2010, we are a dynamic company dedicated to delivering innovative solutions 
              that empower businesses and individuals worldwide. With a passion for technology and 
              a commitment to excellence, we've grown from a small startup to a global presence 
              serving over 5,000 customers across 5 countries.
            </p>
            <p>
              Our team of 50+ skilled professionals works tirelessly to create cutting-edge products 
              and provide exceptional services, ensuring 100% customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission">
            <FaRocket className="section-icon" />
            <h3>Our Mission</h3>
            <p>
              To empower our clients with innovative technology solutions that drive growth 
              and success in an ever-evolving digital world.
            </p>
          </div>
          <div className="vision">
            <FaTrophy className="section-icon" />
            <h3>Our Vision</h3>
            <p>
              To be a global leader in technological innovation, setting the standard for 
              excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.image} alt={member.name} className="team-image" />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones">
        <div className="milestones-container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;