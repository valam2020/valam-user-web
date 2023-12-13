import React, { useState } from 'react';
import logo from '../../assets/images/valamnew.png';
import mainImg from '../../assets/images/yellowcar1.jpg';
import MenuIcon from '../../assets/images/MenuIcon1.png';
import { Link } from 'react-router-dom';
import HomeHeader from '../HomeHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="home-container">
        <HomeHeader/>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="left-content">
          <h1 className="discoverheading">Discover Your Journey with Valam</h1>
          <p className="para">Valam is more than just a ride-sharing platform; it's a transformation of your daily commute into memorable journeys. With Valam, you'll experience:</p>
          <ul className="para">
            <li>Safe and Secure Rides</li>
            <li>Quick and Easy Booking</li>
            <li>Affordable Fares</li>
            <li>24/7 Customer Support</li>
            <li>Real-time Ride Tracking</li>
            <li>Go Anywhere, Anytime</li>
          </ul>
          
          <div className="cta">
            <button className="cta-button">Download App</button>
            {/* <Link to="/login">
              <button className="cta-button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="cta-button">Log In</button>
            </Link> */}
             <Link to="/login">
              <button className="cta-button1">Get Started   <FontAwesomeIcon icon={faAngleRight} /> </button>
            </Link>
          </div>
          </div>
       
        <div className="right-content">
          <img src={mainImg} alt="Right Image" />
        </div>
       
      </div>

      <div className="mobileImg">
          <img src={mainImg} alt="Right Image" />
        </div>

      {/* Call to Action */}
      <div className="services">
        {/* Your services content */}
      </div>

      <div className="about-us">
        {/* About Us content */}
      </div>

      <div className="contact-us">
        {/* Contact Us content */}
      </div>

      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
}

export default Home;
