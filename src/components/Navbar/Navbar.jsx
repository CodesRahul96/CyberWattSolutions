import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo/yellowlogo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  console.log(location);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;