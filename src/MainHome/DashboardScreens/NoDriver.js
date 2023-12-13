import React from 'react';
import './NoDriver.css';

function NoDriver() {
  return (
    <div className="no-driver-container">
        <span role="img" aria-label="Sad Emoji" className="emoji">
        😞
      </span>
      <p className="text">No driver available at your location</p>
      
      <button className="ok-button">OK</button>
    </div>
  );
}

export default NoDriver;
