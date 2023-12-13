import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './RideBooked.css';

const RideBooked = () => {
  const location = useLocation();
   const { driverDetails, rideData, commontoken, driverId ,fromLatitude,fromLongitude,toLatitude,toLongitude} = location.state;
  const [isRideBooked, setIsRideBooked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a delay and then set isRideBooked to true
    const timer = setTimeout(() => {
      setIsRideBooked(true);
    }, 1000); // Adjust the delay as needed

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Navigate to the driver page after displaying the RideBooked component for a few seconds
    const navigationTimer = setTimeout(() => {
      navigate('/driver',{state:{ driverDetails,
        rideData,
        commontoken,
        driverId,
        fromLatitude,
        fromLongitude,
        toLatitude,
        toLongitude}});
    }, 2500); 

    return () => clearTimeout(navigationTimer);
  }, [isRideBooked]);

  return (
    <div className="BodyRide">
      <div className={`ride-booking-status ${isRideBooked ? 'booked' : ''}`}>
        {isRideBooked && (
          <div className="circleWaves"></div>
        )}
        <span className="spanRide">✔</span>
        <p className="paraRide">
          Your ride booked successfully!
        </p>
      </div>
    </div>
  );
};

export default RideBooked;
