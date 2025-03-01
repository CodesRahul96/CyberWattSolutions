// ServicesSection.js
import React from "react";
import "./Services.css";
import {
  FaChargingStation ,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const Services = () => {
  const services = [
   
    {
      icon: <FaChargingStation  />,
      title: "Electrical",
      description: "Building high-quality mobile apps for iOS and Android.",
    },
    {
      icon: <MdOutlineSecurity />,
      title: "Security Systems",
      description: "Designing intuitive and beautiful user interfaces.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web/Mobile Development",
      description:
        "Creating responsive and modern websites and high-quality Mobile Apps for android/ios tailored to your needs.",
    },
    {
      icon: <FaHeadset />,
      title: "Technical Support",
      description: "Providing 24/7 support for your technical needs.",
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
