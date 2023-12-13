// TopSection.js

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopSection.css';
import logo from '../../assets/images/valamnew.png';
import profile from '../../assets/images/avatar.png';
import GoogleMapReact from 'google-map-react';
import loadjs from 'loadjs';

const TopSection = ({  }) => {
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
    <div className="Dashboard1">
      <div className="top-section1">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo1" />
        </div>
        <div className="menu1">
          <ul className="menuUL1">
            <li className="menuList1">
              <Link to="/user/home">Home</Link>
            </li>
            <li className="menuList1">
              <Link to="/user/trips">YourTrips</Link>
            </li>
            <li className="menuList1">
              <Link to="/user/payments">Payments</Link>
            </li>
            <li className="menuList1">
              <Link to="/user/aboutUS">About Us</Link>
            </li>
            <li className="menuList1">
              <Link to="/user/settings">Settings</Link>
            </li>
            <li className="menuList1">
              <Link to="/user/help">Help</Link>
            </li>
          </ul>
        </div>

        <div className="profile-icon1">
          <img
            src={profile}
            alt="Profile"
            className="profile-image1"
            onClick={handleProfileIconClick}
          />
        </div>
        {isDropdownOpen && (
          <div className="profile-dropdown1" ref={dropdownRef}>
            <ul>
              <li>
                <Link to="/user/editprofile">Profile</Link>
              </li>
              <li>
                <Link to="/user/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      
    </div>
  );
};



export default TopSection;
