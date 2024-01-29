import React from 'react';
import './servicesection.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faCar,  faMoneyBill, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const ServiceSection = () => {
    const services = [
        {
          title: '24/7 Availability',
          description: 'Our cab services are available 24/7 to meet your transportation needs.',
          icon: faClock,
        },
        
        {
          title: 'Comfortable Rides & Experienced Drivers',
          description: 'Enjoy comfortable rides with clean and well-maintained vehicles.Ride with our professional and experienced drivers for a safe journey.',
          icon: faCar,
        },
        {
            title: 'Affordable Pricing',
            description: 'We offer competitive and transparent pricing to make your rides affordable.',
            icon: faMoneyBill,
          },
          {
            title: 'Safety Measures',
            description: 'Your safety is our priority. Thorough vehicle inspections and adherence to safety standards.',
            icon: faShieldAlt,
          },
      ];

  return (
    <div className="mainservice-section">
         <div className="mainservice-section1">

         <h2 className="serviceheader">Welcome to Our Cab Services</h2>
      <p className="servicepara">Explore our reliable and convenient cab services.</p>

         </div>
        
    
    <div className="service-section">
        
      {services.map((service, index) => (
        <div key={index} className="service-container">
             <FontAwesomeIcon icon={service.icon} size="2x" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServiceSection;
