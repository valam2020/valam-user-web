// src/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './assets/images/valamnew.png';
import profile from './assets/images/avatar.png';

const Header = () => {
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
    <header className="headerheader">
      <div className="headerlogo">
          <img src={logo} alt="Logo" className="headerlogo" />
        </div>
      <div className="headermenu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`headermenu ${isMenuOpen ? 'open1' : ''}`}>
        <ul className="headermenu-list">
          <li className="headermenu-list-item">
            <Link to="/userHome">Home</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/yourtrips">YourTrips</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/payments">Payments</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/aboutus">AboutUs</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </div>

      <div className="profile-icon" >
          <img src={profile} alt="Profile" className="profile-image"  onClick={handleProfileIconClick}/>
        </div>
        {isDropdownOpen && (
          <div className="profile-dropdown" ref={dropdownRef}>
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        )}


      <div className={`headermenu-modal ${isMenuOpen ? 'open' : ''}`}>
        {/* <div className="headerclosetop"> */}
        <div className="headerclose-modal" onClick={toggleMenu}>
          x
        </div>

        <div className="profiledisplay" >
            <img src={profile} alt="Profile" className="profiledisplayimage"  
            //onClick={handleProfileIconClick}
            />
            <h5 className="username">Sahithi Dande</h5>
        </div>
        {/* </div> */}
        
        {/* <ul className="headermenu-list">
        
          <li className="headermenu-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/editProfile">EditProfile</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li className="headermenu-list-item">
            <Link to="/logout">Logout</Link>
          </li>
        </ul> */}

<ul className="headermenu-list">
          <li className="headermenu-list-item">
            {/* Home Symbol */}
            <Link to="/userHome">Home</Link>
          </li>
          <li className="headermenu-list-item">
             {/* Edit Profile Symbol */}
            <Link to="/profile">Edit Profile</Link>
          </li>
          <li className="headermenu-list-item">
            {/* About Symbol */}
            <Link to="/about">YourTrips</Link>
          </li>
          <li className="headermenu-list-item">
            {/* Blog Symbol */}
            <Link to="/Payments">Payments</Link>
          </li>
          <li className="headermenu-list-item">
            {/* Contact Symbol */}
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li className="headermenu-list-item">
             {/* Privacy Policy Symbol */}
            <Link to="/settings">Settings</Link>
          </li>
          <li className="headermenu-list-item">
             {/* Terms and Conditions Symbol */}
            <Link to="/Help">Help</Link>
          </li>
          <li className="headermenu-list-item">
            {/* Logout Symbol */}
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
