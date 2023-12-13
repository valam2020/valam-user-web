// Logout.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'

const Logout = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage data
    localStorage.removeItem('user_details');

    navigate('/');
  };

  const handleCancel = () => {
    // Close the confirmation dialog without logging out
    setShowConfirmation(false);
    navigate('/userHome');
  };

  return (
    <div>
      {showConfirmation && (
        <div className="logout-overlay">
          <div className="logout-modal">
            <p>Are you sure you want to logout?</p>
            <div className="button-container">
              <button className="yesbutton" onClick={handleLogout}>Yes</button>
              <button className="nobutton" onClick={handleCancel}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
