
import React from 'react';
import './About.css'; // Import your CSS file for styling
import HomeHeader from '../HomeHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const goBack =()=> {
        navigate('/');
      }
  return (
    <div>
       <HomeHeader/>
       <h2 className='aboutUssec'>ABOUT US</h2>
    
    <div className="about-container">
      <section className="welcome-section">
        
        <h2>Welcome to Valam</h2>
        <p className="parasection">
          Where we are dedicated to revolutionizing transportation services with
          a focus on affordability and accessibility.
        </p>
        {/* ... other content ... */}
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p className="parasection">
          Provide reliable and convenient rides catering specifically to the
          needs of the middle-class population in the USA.
        </p>
        <p className="parasection">
          Unlike traditional ride-sharing services, we go the extra mile by
          accepting both cash and card payments, making transportation options
          more inclusive and accessible for all.
        </p>
      </section>

      <section className="payment-options-section">
        <h2>Payment Options</h2>
        <p className="parasection">
          We understand that not everyone has access to credit or debit cards,
          which can be a significant barrier to utilizing ride-sharing services, That's why we have 
made it our priority to bridge this gap and ensure that individuals from all walks 
of life can enjoy the benefits of convenient transportation.
        </p>
        <p className="parasection">
          By accepting cash payments, we aim to create a service that meets the
          needs of the middle-class community and provides them with an
          affordable means of travel.We highlight 
the use of cash while using our services in this century of cashless economy 
because almost close to one by fourth of the population in the United States 
don’t have a Bank account which means they don’t have a credit card for 
purchasing any product or service including the Taxi service.
        </p>
        {/* ... continue content ... */}
      </section>

      <section className="securitysection">
        <h2>Our Commitment to Your Safety and Satisfaction</h2>
        <p className="parasection">
        At Valam, we prioritize your comfort and convenience. With our user-friendly 
mobile application and website, booking a ride has never been easier. Whether 
you need a ride for your daily commute, to run errands, or explore the city, our 
reliable drivers are here to ensure you reach your destination safely and 
comfortably.
</p>
<p className="parasection">
Safety is of utmost importance to us. We carefully screen and select our drivers, 
conducting thorough background checks to provide you with peace of mind 
during your journey. Our vehicles are regularly inspected and maintained to 
ensure a safe and reliable travel experience.
</p>
<p className="parasection">
We take great pride in our commitment to exceptional customer service. Our 
dedicated support team is available 24/7 to assist you with any inquiries or 
concerns you may have. Your satisfaction is our top priority, and we strive to 
exceed your expectations in every interaction.
        </p>
        </section>

      <section className="join-us-section">
        <h2>Join Us</h2>
        <p className="parasection">
          Whether you prefer cash or card payment, [Ride-Sharing Company] is here
          to provide you with a reliable and convenient transportation solution
          that fits your lifestyle and budget.
        </p>
        <p className="parasection">
          Experience the difference with VALAM. Book your ride today and let us
          be your trusted partner in affordable and accessible transportation.
        </p>
      </section>

     
    </div>
    </div>
  );
};

export default About;