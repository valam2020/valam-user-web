// src/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './assets/images/valamnew.png';
import profile from './assets/images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSuitcase, faCreditCard, faInfoCircle, faCog, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
        <ul className="headermenu-list">
  <li className="headermenu-list-item">
    <Link to="/userHome">
      <FontAwesomeIcon icon={faHome} color="white" />
      <span className="menu-item-name">Home</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/profile">
      <FontAwesomeIcon icon={faUser} color="white" />
      <span className="menu-item-name">Edit Profile</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/YourTrips">
      <FontAwesomeIcon icon={faSuitcase} color="white" />
      <span className="menu-item-name">Your Trips</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/Payments">
      <FontAwesomeIcon icon={faCreditCard} color="white" />
      <span className="menu-item-name">Payments</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/AboutUs">
      <FontAwesomeIcon icon={faInfoCircle} color="white" />
      <span className="menu-item-name">About Us</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/settings">
      <FontAwesomeIcon icon={faCog} color="white" />
      <span className="menu-item-name">Settings</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/Help">
      <FontAwesomeIcon icon={faQuestionCircle} color="white" />
      <span className="menu-item-name">Help</span>
    </Link>
  </li>
  <li className="headermenu-list-item">
    <Link to="/logout">
      <FontAwesomeIcon icon={faSignOutAlt} color="white" />
      <span className="menu-item-name">Logout</span>
    </Link>
  </li>
</ul>
        

      </div>
    </header>
  );
};

export default Header;