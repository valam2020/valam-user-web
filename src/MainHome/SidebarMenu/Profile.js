// Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css';
import profileImage from '../../assets/images/avatar.png'; // replace with your image path
import Header from '../../Header'

const Profile = () => {
   const [isEditing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
   const [middleName, setMiddleName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');

  const [userDetails, setUserDetails] = useState({
    user_id: null,
    user_firstName: '',
    user_lastName: '',
    user_middleName: '',
    user_phoneNum: '',
    user_email: '',
    user_fullName: '',
    user_token: '',
    user_common_token: '',
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = () => {
    // Implement save logic here
    setEditing(false);
  };

  const fetchUserData = () => {
    try {
      const storedUserData = localStorage.getItem('user_details');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        console.log('Parsed user data from localStorage:', userData);

        setUserDetails({
          user_id: userData.user_id || null,
          user_firstName: userData.user_firstName || '',
          user_lastName: userData.user_lastName || '',
          user_middleName: userData.user_middleName || '',
          user_phoneNum: userData.user_phoneNum || '',
          user_email: userData.user_email || '',
          user_fullName: userData.user_fullName || '',
          user_token: userData.user_token || '',
          user_common_token: userData.user_common_token || '',
        });
        
        console.log('userDetails set in state:', userDetails);
      }
    } catch (error) {
      console.error('Error fetching user data from localStorage:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Header/>
    <div className={`profile-container ${isEditing ? 'editing' : ''}`}>
      <div className="profile-box">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-imagedp" />
        </div>
        {!isEditing && (
          <div className="profile-details">
            <h2>{`${userDetails.user_firstName} ${userDetails.user_middleName  ? userDetails.user_middleName + ' ' : ''}${userDetails.user_lastName}`}</h2>
            <p className="email">Email: {userDetails.user_email}</p>
            <p className="phone">Phone: {userDetails.user_phoneNum}</p>
          </div>
        )}
        <div className={`editable-fields ${isEditing ? 'editing' : ''}`}>
          <div className="profile-field">
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="profile-field">
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="profile-field">
            <label>Middle Name:</label>
            <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="profile-field">
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <div className="buttons">
          {isEditing ? (
            <>
              <button className="save-button" onClick={handleSaveClick}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
