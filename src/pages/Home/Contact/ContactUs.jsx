// ContactUs.js
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
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

    // Replace these with your EmailJS credentials
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

  // Map configuration
  // const mapContainerStyle = {
  //   width: "100%",
  //   height: "300px",
  //   borderRadius: "10px",
  // };

  // Replace with your actual coordinates
  // const center = {
  //   lat: 40.7128, // Example: New York City coordinates
  //   lng: -74.006,
  // };

  return (
    <section className="contact-us">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          {/* Contact Information and Map */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <span className="info-label">Address</span>
                <p>
                  Korlewadi
                  <br />
                  Pune, Maharashtra
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
                <p>cuberwattsolutions@gmail.com</p>
              </div>
            </div>

            {/* <div className="map-container">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div> */}

            <div className="map-container">
              {/* Embedded Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11386.081397958806!2d73.85528718012304!3d18.50080374363642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740818936677!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                title="CyberWattSolutions"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit}>
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
      </div>
    </section>
  );
};

export default ContactUs;
