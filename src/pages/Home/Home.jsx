import React from 'react'
import "./Home.css"
import HeroSection from './HeroSection/HeroSection'
import ServicesCounter from './Counter/ServicesCounter';
import AboutUs from './About/AboutUs';
import Services from './Services/Services';
import ContactUs from './Contact/ContactUs';

const Home = () => {
  return (
    <div className='home-section'>
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactUs />
      <ServicesCounter />
    </div>
  )
}

export default Home