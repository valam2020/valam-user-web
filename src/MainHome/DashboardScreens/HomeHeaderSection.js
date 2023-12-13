// src/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeHeaderSection.css';
import logo from '../../assets/images/valamnew.png';
import profile from '../../assets/images/avatar.png';


const HomeHeaderSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleProfileIconClick = () => {
      setDropdownOpen(!isDropdownOpen);
    };
   
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

  return (
    <header className="header">
       <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>


      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>


      <div className={`menu ${isMenuOpen ? 'open1' : ''}`}>
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/yourTrips">YourTrips</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/payments">Payments</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/Settings">Settings</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/help">Help</Link>
          </li>


        </ul>

        </div>

       




      <div className={`menu-modal ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-modal" onClick={toggleMenu}>
          X
        </div>
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="menu-list-item">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
      </div>

     

        

     
    
    </header>
  );
};

export default HomeHeaderSection;
