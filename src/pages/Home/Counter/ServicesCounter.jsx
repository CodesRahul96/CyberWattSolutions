import React, { useState, useEffect, useRef } from "react";
import "./ServicesCounter.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { RiCupFill } from "react-icons/ri";

const ServicesCounter = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    projects: 0,
    partners: 0,
    meetings: 0,
  });

  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Counter animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = Object.keys(counts).map((key) => {
        const target = {
          customers: 5000,
          projects: 300,
          meetings: 250,
          partners: 50,
        }[key];

        return setInterval(() => {
          setCounts((prev) => ({
            ...prev,
            [key]: Math.min(prev[key] + Math.ceil(target / 50), target),
          }));
        }, 50);
      });

      return () => timers.forEach(clearInterval);
    }
  }, [isVisible]);

  return (
    <section className="services-counter" ref={counterRef}>
      <div className="counter-container">
        <div className="counter-item">
          <IoPersonSharp className="counter-icon" />
          <h3>{counts.partners.toLocaleString()}+</h3>
          <p>Trusted Partners</p>
        </div>

        <div className="counter-item">
          <RiCupFill className="counter-icon" />
          <h3>{counts.meetings.toLocaleString()}+</h3>
          <p>Meetings</p>
        </div>

        <div className="counter-item">
          <FaCheck className="counter-icon" />
          <h3>{counts.projects.toLocaleString()}+</h3>
          <p>Completed Projects</p>
        </div>

        <div className="counter-item">
          <FaFaceSmile className="counter-icon" />
          <h3>{counts.customers.toLocaleString()}+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCounter;
