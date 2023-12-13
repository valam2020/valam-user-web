import React, { useEffect, useState } from 'react';
//import backgroundImage from './background-image.jpg'; // Replace with your image path
import backgroundImage from './../../assets/images/backgroundImg.jpg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './payment.css';
import Header from "../../Header"
const PaymentPage = ({  }) => {
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
    const { distance,username,paymentTotal,commontoken,driverDetails, rideData,driverId} = location.state;
   const handlePayClick = () => {
   
    setIsPaid(true);
    navigate('/feedback',
      {
      state: {
        commontoken,
        driverDetails,
        rideData,
        driverId
      },
    });
   };

 

  return (
   <div>
    <Header/>
    <div className="container"
      // style={{
      //   // backgroundImage: `url(${backgroundImage})`,
      //   // backgroundSize: 'cover',
      //   // backgroundPosition: 'center',
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'flex-end',
      //     alignItems: 'center',
      // }}
    >
      <div className="payment-container"
        // style={{
        // //   backgroundColor: 'rgba(255, 255, 255, 0.9)',
        //   width: '20%',
        //   height: '40%',
        //   padding: '20px',
        //   borderRadius: '10px',
        //   textAlign: 'center',
        //   margin:'20px',
        //   backgroundColor:'#fff',
        //   boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'
        // }}
      >
        {/* <h2>{`Hey ${(ridedata && ridedata?.user?.firstName) || ''}`}</h2>
        <p>
          {`Your ride is completed, the distance is ${
            (ridedata && ridedata?.distance) || ''
          }, kindly pay the amount $${(ridedata && ridedata?.paymentTotal) || ''}`}
        </p> */}

<h2>Hey {username}</h2>
        <p>
          Your ride is completed, the distance is {distance}, kindly pay the amount ${paymentTotal}
        </p>

        {!isPaid ? (
          <button
            onClick={handlePayClick}
            style={{
              padding: '10px',
              fontSize: '16px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Pay with Cash <span role="img" aria-label="money">💵</span>
          </button>
        ) : (
          <div style={{ marginTop: '20px', fontSize: '20px', color: 'green' }}>
            Paid <span role="img" aria-label="tick">✅</span>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default PaymentPage;
