import React, { useState } from 'react';
import './contact.css'; // Import your CSS file for styling
import HomeHeader from '../HomeHeader';

const ContactUs = () => {
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
        <HomeHeader/>
    <div className="contact-us-container">
      <h2 className="h2name">Contact Us</h2>
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

export default ContactUs;
