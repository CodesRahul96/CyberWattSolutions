import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add EmailJS credentials
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", phone: "", message: "" });
        alert("Thank you for your message! We will get back to you soon.");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch today!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="contact-container">
          <div className="contact-wrapper">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Reach Out to Us</h2>
              <p className="info-intro">
                Have questions? Need assistance? Our team is here to help you
                every step of the way.
              </p>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <span className="info-label">Address</span>
                  <p>
                    Korlewadi
                    <br />
                    Pune, Maharashtra, 
                    <br />
                    India- 411011
                  </p>
                </div>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <span className="info-label">Phone</span>
                  <p>+91 (91724)(27382)</p>
                </div>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <span className="info-label">Email</span>
                  <p>cyberwattsolutions@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <h2>Find Us Here</h2>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11386.081397958806!2d73.85528718012304!3d18.50080374363642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740818936677!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
