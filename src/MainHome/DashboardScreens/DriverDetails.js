import React, { useState, useEffect } from 'react';
import './DriverDetails.css';
import driverImage from './../../assets/images/driverimage.jpg';
import ridestart from './../../assets/images/ridestart.png';
import dropoff from './../../assets/images/dropoff.jpg';
import { FaPhone } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import {
  RIDE_STARTED, RIDE_COMPLETED
} from '../../config/apis/endpoint';
import {BASE_URL} from './../../config/env/config';
import axios from 'axios';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import Map from '../DashboardScreens/Map';

const DriverDetails = () => {
  const location = useLocation();
   const { driverDetails, rideData, commontoken, driverId ,fromLatitude,fromLongitude,toLatitude,toLongitude} = location.state;

  // const [showModal, setShowModal] = useState(false);
  // const [driverName, setDriverName] = useState('Sahithi Dande');
  // const [driverNumber, setDriverNumber] = useState('+916281934372');
  // const [carNumber, setCarNumber] = useState('SSKN@2209');
  // const [driverPic, setDriverPic] = useState('');
  // const [pickupAddress, setPickupAddress] = useState('Miyapure x road Metro station');
  // const [destinationAddress, setDestinationAddress] = useState('Gachibowli x road flyover police station');
  // const [paymentTotal, setPaymentTotal] = useState('200');
  // const [paymentType, setPaymentType] = useState('Cash');
  // const [otp, setOtp] = useState('1234');
  // const[username, setUsername]=useState('Babysrilekha dande');
  // const[distance,setDistance]=useState('20');
  // const[rideId, setRideId]=useState('1234');

  const [showModal, setShowModal] = useState(false);
  const [driverName, setDriverName] = useState(`${driverDetails.firstName} ${driverDetails.lastName}`);
  const [driverNumber, setDriverNumber] = useState(driverDetails.phNum);
  const [carNumber, setCarNumber] = useState(driverDetails.carNo);
  const [driverPic, setDriverPic] = useState(driverDetails.imageUrl);
  const [pickupAddress, setPickupAddress] = useState(rideData.fromAddress);
  const [destinationAddress, setDestinationAddress] = useState(rideData.toAddress);
  const [paymentTotal, setPaymentTotal] = useState(rideData.paymentTotal);
  const [paymentType, setPaymentType] = useState(rideData.paymentType);
  const [otp, setOtp] = useState(rideData.otp);
  const[username, setUsername]=useState(rideData.user.firstName);
  const[distance,setDistance]=useState(rideData.distance);
  const[rideId, setRideId]=useState(driverDetails.rideId);
  const [message,setMessage]=useState('');
  const[isrideStarted, setIsrideStarted]=useState(false);
  const[isrideEnded, setIsrideEnded]=useState(false);
  // const [showDetails, setShowDetails] = useState(false); 
  const navigate = useNavigate();
   let intervalRideCompleted;
  let intervalId;
  // const startGetDriverEnded = () => {
  //   intervalRideCompleted = setInterval(() => {
  //     handleGetRideCompleted();
  //   }, 20000);
  // };

 const handleGetRideCompleted = () => {
    console.log('inside handleGetRideCompleted');


    const url = `${BASE_URL}${RIDE_COMPLETED}`;
    const data = {
      rideId: rideData.rideId,
    };
    axios
      .post(url, data, {
        headers: {
          common_token: commontoken,
        },
      })
      .then((response) => {
        console.log('ride completed api response...>>>>', response?.data);

        if (response && response.status === 200) {
          if (response.data?.httpStatus === 200) {
            openModal('Your ride is ended');
            setIsrideStarted(false);
            setIsrideEnded(true);
            clearInterval(this.intervalRideCompleted);
          }
        }
      })
      .catch((error) => {
        console.log('ride completed api error...>>>>', error?.response?.data);

        if (error?.response) {
          if (
            error?.response?.data &&
            (error?.response?.data !== '' || !!error?.response?.data)
          ) {
            error?.response?.data &&
            toast.error(
              error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.response?.data ||
      'Something went wrong'
            );
          } else {
            toast.error('Something Went Wrong');
          }
        } else {
          toast.error('Something Went Wrong');
        }
      });
  };

  const handleGetRideStarted = () => {
    console.log('inside handleGetRideStarted');
    console.log("calling isridestarted api", rideId, commontoken)
    
    const url = `${BASE_URL}${RIDE_STARTED}`;
    const data = {
       rideId: rideData.rideId,
      // rideId:12155
    };
    axios
      .post(url, data, {
        headers: {
           common_token: commontoken,
          //common_token:"User-2023-11-28-8247",
        },
      })
      .then((response) => {
        console.log('ride started api response...>>>>', response?.data);

        if (response && response.status === 200) {
          if (response.data?.httpStatus === 200) {
            
            openModal('Your ride is started, Happy journey!');
            
            setIsrideStarted(true);

           
            clearInterval(intervalId);
            //startGetDriverEnded();
          }
        }
      })
      .catch((error) => {
        console.log('ride started api error...>>>>', error?.response?.data);

        if (error?.response) {
          if (
            error?.response?.data &&
            (error?.response?.data !== '' || !!error?.response?.data)
          ) {
            error?.response?.data &&
              toast.error(
                error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.response?.data ||
        'Something went wrong'
              );
              
          } else {
            toast.error('Something Went Wrong');
          }
        } else {
          toast.error('Something Went Wrong');
        }
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsrideStarted(false);
    setIsrideEnded(false);
    };

    const handleRideEndModal = () => {
      setShowModal(false);
      
      if (isrideEnded) {
        setIsrideEnded(false);
        console.log("passing these values to payment page",distance,username, paymentTotal, commontoken, driverDetails,rideData);
        navigate('/payment',  {
          state: {
            distance,
            username,
            paymentTotal,
            commontoken,
            driverDetails,
            rideData,
            driverId
          },
        });
      }
      
      };

  const openModal = (message) => {
    setMessage(message);
    setShowModal(true);
  };

  useEffect(() => {
     intervalId = setInterval(() => {
       handleGetRideStarted();
      
    if (isrideStarted) {
        clearInterval(intervalId);
      }
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isrideStarted]);

  useEffect(() => {
    const intervalRideCompleted = setInterval(() => {
       handleGetRideCompleted();
      
    if (isrideEnded) {
        clearInterval(intervalRideCompleted);
      }
    }, 20000);

    return () => {
      clearInterval(intervalRideCompleted);
    };
  }, [isrideEnded]);

 

  useEffect(() => {
    setDriverName(`${driverDetails.firstName} ${driverDetails.lastName}`);
    setDriverNumber(driverDetails.phNum);
    setCarNumber(driverDetails.carNo);
    setDriverPic(driverDetails.imageUrl);
    setPickupAddress(rideData.fromAddress);
    setDestinationAddress(rideData.toAddress);
    setPaymentTotal(rideData.paymentTotal);
    setPaymentType(rideData.paymentType);
    setOtp(rideData.otp);
    setUsername(rideData.user.firstName);
    setDistance(rideData.distance);
    setRideId(rideData.rideId);
    console.log("Ride id value",rideData.rideId, rideId)
  }, [driverDetails, rideData]);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
       <Header/>
       <div className="driverpagesection">
       <Map fromLatitude={fromLatitude} fromLongitude={fromLongitude} toLatitude={toLatitude} toLongitude={toLongitude}/>
       <div className="detail-section">
    {/* <div className={`detail-section ${showDetails ? 'show-details' : ''}`}> */}
    {/* <div
          className="up-arrow"
          onClick={() => setShowDetails(!showDetails)}
        >
          <FaArrowUp />
        </div> */}
     
      <div className="driver-container">
        <div className="topsec">
          <img src={driverImage} alt="Driver" className="avatar" />
          <div>
            <div className="driverInfo">
              <span className="heading">Driver Name: </span>
              <span className="sub-heading">{driverName}</span>
            </div>
            <div className="car-info">
              <span className="heading">Car Number:</span>
              <span className="sub-heading">{carNumber}</span>
            </div>
          </div>
        </div>

        <div className="trip-container">
          <p className="trip-heading">Your Trip Details:</p>
        </div>

        <div className="trip-sub-container">
          <div className="to-section">
            <span className="toheading"> To : </span>
            <span className="sub-heading to-text">{destinationAddress}</span>
          </div>
          <div className="from-section">
            <span className="heading">From : </span>
            <span className="sub-heading to-text">{pickupAddress}</span>
          </div>
        </div>

        <div className="top-container">
          <div className="otp-section">
            <span className="heading">Your OTP CODE for the ride is : </span>
            <span className="sub-heading">{otp}</span>
          </div>
          <p className="sub-heading2">Share this ride code with the driver once reached at your place.</p>
        </div>
      </div>

      <div className="trip-sub-container1">
        <div className="payment-section">
          <span className="heading">PAY :  </span>
          <span className="sub-heading to-text">{`$${paymentTotal}`}</span>
        </div>
      </div>

      <div className="button-container">
        <button
          className="call-button"
          onClick={() => {
            window.location.href = `tel:${driverNumber}`;
          }}
        >
          <span className="icon">
            <FaPhone color="#FFF" size={20} />
          </span>
          <span className="text1">Call</span>
        </button>

        <button className="text-button" onClick={toggleModal}>
          <span className="icon">
            <IoChatbubbleEllipsesOutline color="#FFF" size={20} />
          </span>
          <span className="text1">Text</span>
        </button>
      </div>
      {isrideStarted && (
        <div className="custom-dialog">
            <img src={ridestart} alt="Ride Start" className="ridestartimg"/>
          <p className="ridestartpara"> Your ride is started, Happy journey!😊</p>
          <button onClick={handleCloseModal}><b>OK</b></button>
        </div>
      )}

     {isrideEnded && (
        <div className="custom-dialog">
        <img src={dropoff} alt="Ride Start" className="rideendimg"/>
          <p className="ridestartpara">Your Ride is Ended 😊</p>
          <button onClick={handleRideEndModal}>OK</button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default DriverDetails;
