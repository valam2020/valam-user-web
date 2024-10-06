import React, { useState } from 'react';
import './Help.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Help = () => {
    const navigate = useNavigate();
    const goBack =()=> {
        navigate('/userHome');
      }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
         <div className="headerongo">
          <div 
          onClick={() => goBack()} 
          className="goBackContainerongo">
            {/* <FontAwesome name="angle-left" size={36} color={COLORS.WHITE} /> */}
            <FontAwesomeIcon icon={faAngleLeft} size={36} style={{ color: '#FFFFFF', fontSize: '36px' }}  />
          </div>
          <span className="aboutUssec">CONTACT US</span>
          
        </div>
    
    <div className="contact-us-container">
      
      
      <h1>Need Assistance?</h1>
      <p>We’re here to help! For any questions, please reach out through our Contact/help Page or email us at <a href={`mailto:valamnewjersey@gmail.com`}> valamnewjersey@gmail.com</a>.</p>
      <form onSubmit={handleSubmit} className="formcontact">
        <label htmlFor="name"  className="contactlabel">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contactinput"
          required
        />

        <label htmlFor="email" className="contactlabel">Email Address*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contactinput"
          required
        />

        <label htmlFor="phoneNumber" className="contactlabel">Mobile Number*</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="contactinput"
          required
        />

        <label htmlFor="comments" className="contactlabel">Comments*</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="contacttextarea"
          required
        ></textarea>

        <button type="submit" className="contactbutton">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Help;
