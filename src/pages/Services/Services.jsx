import React from 'react';
import './Services.css';
import { FaLaptopCode, FaHeadset, FaArrowsAlt  } from 'react-icons/fa';
import { MdElectricBolt } from "react-icons/md";
import { GrEmergency } from "react-icons/gr";
import { SiSpringsecurity } from "react-icons/si";




const Services = () => {
  const services = [
    
    {
      icon: <MdElectricBolt />,
      title: 'Residential Electrician Services',
      description: 'Our team install, maintain, inspect and repair wiring and electrical systems and components.',
      features: ['Wiring/Re-Wiring', 'Inspections', 'Lightning Installation', 'Elecrical Panel Services','Outlet and Switch Installation'],
    },
    {
      icon: <GrEmergency />,
      title: 'Emergency Services',
      description: 'We handle urgent repairs like electrical shocks, power outages, or faulty wiring.',
      features: ['24/7 response for power outages', 'Fixing fire marshal violations (e.g., emergency lighting)', 'Home Safety Inspection', 'Appliance Installation', 'Surge Protection'],
    },
    {
      icon: <SiSpringsecurity />,
      title: 'Security Systems Services',
      description: 'We protect sensitive data, secure networks and keep systems safe from hackers.',
      features: ['Installation/Wiring for CCTV cameras', 'Installing motion sensors and Security lighting', 'DVR Installing and maintanance'],
    },
    {
      icon: <FaArrowsAlt />,
      title: 'Additional Services',
      description: 'Our team Electricians install, maintain, and repair electrical power, communications, lighting, and control systems in homes, businesses, and factories.',
      features: ['Consultation and Design', 'Training and Certification', 'Emergrncy Services', 'Custom Projects'],
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'We create responsive, modern websites tailored to your business needs, ensuring optimal performance and user experience across all devices.',
      features: ['Custom Design', 'SEO Optimization', 'E-commerce Solutions', 'Maintenance'],
    },
    {
      icon: <FaHeadset />,
      title: 'Technical Support',
      description: 'Offering 24/7 technical support to ensure your systems run smoothly, with quick resolution to any issues.',
      features: ['24/7 Availability', 'Ticket System', 'Remote Assistance', 'On-site Support'],
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay">
          <h1>Services</h1>
          <p>Explore our comprehensive range of solutions designed to elevate your business</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="overview-container">
          <h2>What We Offer</h2>
          <p className="overview-text">
            At CyberWatt Solutions, we provide top-tier services to help your business thrive in the digital age. 
            From web and mobile development to design and support, our expert team is here to deliver results.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="detailed-services">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="learn-more-btn">Contact Us</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss how our services can benefit your business.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Services;