import React, { useState } from 'react';
import logo from './../assets/images/valamnew.png';
import mainImg from './../assets/images/yellowcar1.jpg';
import MenuIcon from './../assets/images/MenuIcon1.png';

import { Link } from 'react-router-dom';
import './HomeHeader.css';

function HomeHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="homeheadercontainer">
      {/* Header Section */}
      <header className="home-header">
        <div className="header-content">
          <div className="circular-logo">
            <img src={logo} alt="Logo" className="logo"/>
          </div>

          <div className="top-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <img src={MenuIcon} alt="Menu" className="menuicon" />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="mobile-menu">
          {/* <div className="close-button" onClick={toggleMenu}>
            [x]
          </div> */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>
       )}

    </div>
  );
}

export default HomeHeader;
