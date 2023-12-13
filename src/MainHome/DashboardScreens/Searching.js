import React, { useRef, useEffect, useState, useCallback } from 'react';
import './Search.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { NEAREST_DRIVER, RIDEREQUEST_SAVE_ALL, RIDE_BY_ID, DRIVER_ID } from '../../config/apis/endpoint';
import { BASE_URL } from './../../config/env/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Searching() {
  const location = useLocation();
  const { fromLatitude, fromLongitude, toLatitude,toLongitude, RideIdValue } = location.state;
  const [searching, setSeaching] = useState(true);
  const [requesting, setRequesting] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerNearestDriver = useRef();
  const timerGetRideDetails = useRef();
  const timeOut = useRef();
  const navigate = useNavigate();
  const [isVisibleModal, setIsVisibleModal] = useState(false);


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
  
const[commontoken, setCommontoken]=useState(null);
  const [driverDetails, setDriverDetails] = useState(null);
  const [rideData, setRideData] = useState(null);
  const [dropLat, setDropLat] = useState(null);
  const [dropLng, setDropLng] = useState(null);
  const [pickLat, setPickLat] = useState(null);
  const [pickLng, setPickLng] = useState(null);
  const [driverId, setDriverId] = useState(null);
  const [toLatitudee, setToLatitudee] = useState(null);
  const [toLongitudee, setToLongitudee] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [noDriver, setNoDriver] = useState(false);
  const [viewmodal, setViewmodal] = useState(true);
  let getDriverDetailsInterval;
  const startGetDriverDetailsTimer = () => {
    getDriverDetailsInterval = setInterval(() => {
      handleGetRideDetails();
    }, 10000);
  };

  const handleBackArrowClick = () => {
    const shouldCancelRide = window.confirm('Do you want to cancel the requested ride?');
    if (shouldCancelRide) {
      // Perform the cancellation logic here
      // For example, navigate to the previous page
      navigate(-1);
    }
  };

  const handleRideRequest = useCallback((_rideDetails) => {
    let url = BASE_URL + RIDEREQUEST_SAVE_ALL;
    let rideArr = [];
    let date = new Date();

    _rideDetails?.forEach((item) => {
      if (item && item?.dispatcher?.id) {
        let rideData = {
          dispatcherId: item?.dispatcher?.id,
          rideDate: date?.toISOString(),
          ride_id: RideIdValue,
          stsId: 1,
        };
        rideArr.push(rideData);
      }
    });

    console.log('Saving all ride request with dispatcher details', rideArr, url);
    console.log('Checking common token', userDetails.user_common_token);

    axios
      .post(url, rideArr, {
        headers: {
          common_token: userDetails.user_common_token, // Make sure common_token is defined
        },
      })
      .then((response) => {
        if (response && response?.status === 200) {
          console.log('Ride request sent to dispatcher API response...>>>>', response);
          
          setSeaching(false);
          // setRequesting(true);
          startGetDriverDetailsTimer();
        } else {
          setLoading(false);
          toast.error('Something went wrong');
        }
      })
      .catch((error) => {
        console.log('Ride request to dispatcher API error...>>>>', error?.response?.data);

        setLoading(false);
        if (error.response?.status === 500) {
          toast.error('Something went wrong');
        }
      });
  }, [userDetails.user_common_token]);

  const handleGetNearestDriver = useCallback(() => {
    setLoading(true);
    let url = BASE_URL + NEAREST_DRIVER;
    let data = {
      comfort_level: 'Compact',
      latitude: fromLatitude,
      longitude: fromLongitude,
    };

    console.log('Nearest driver API request', data, url, userDetails.user_common_token);

    axios
      .post(url, data, {
        headers: {
          common_token: userDetails.user_common_token,
        },
      })
      .then((response) => {
        console.log('Nearest driver API response...>>>>', response?.data);
        if (response && response?.data?.length > 0) {
          setSeaching(true);
        
         clearInterval(timerNearestDriver.current);
         handleRideRequest(response.data);
        } else {
          setSeaching(true);
         
         showModal();
         
        }
      })
      .catch((error) => {
        console.log('Nearest driver API error...>>>>', error?.response?.data);

        setLoading(false);
        if (error.response?.status === 500) {
          toast.error('Something went wrong');
        }
      });
  }, [userDetails.user_common_token, fromLatitude, fromLongitude, handleRideRequest]);

  const showModal = () => {
    const time_out = setTimeout(() => {
      console.log("Entered in show modal");
      
       setNoDriver(true);
    
     }, 60 * 1000);
    return () => clearTimeout(time_out);
  };
  
  const getDriverDetails = () => {
    if (driverId) {
      const url = `${BASE_URL}${DRIVER_ID}${driverId}`;
      let lat = 0;
      let lng = 0;
      console.log('Fetching Driver Details for getDriverDetails...>>>>', url);
      axios
        .get(url, {
          headers: {
            token: userDetails.user_token,
          },
        })
        .then((response) => {
          console.log('Driver details API response...>>>>', response?.data);

          if (response && response.status === 200) {
            if (!!response?.data?.current_lat && !!response?.data?.current_lng) {
              setToLatitudee(response?.data?.current_lat);
              setToLongitudee(response?.data?.current_lng);
            }
          }
        })
        .catch((error) => {
          console.log('Driver details API', error.response);
        });
    }
  };
//Commenting below code for state is not updating before navigate to driverdetail page
  // const handleGetRideDetails = () => {
  //   console.log('Inside handleGetRideDetails');
  //   const { rideId } = RideIdValue;
  //   console.log("Ride id value",RideIdValue);

  //   const url = `${BASE_URL}${RIDE_BY_ID}${RideIdValue}`;
  //   console.log("URL for get driver details after accept at dispatcher side",url);
  //   setLoading(true);

  //   axios
  //     .get(url, {
  //       headers: {
  //         common_token: userDetails.user_common_token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log('Ride details with driver details API response...>>>>', response, response?.data);

  //       if (response && response.status === 200) {
  //         console.log('Ride details with driver details API if case...>>>>', response?.data);

  //         setDriverDetails(response.data.driver);
  //         setRideData(response.data);
  //         setDropLat(response?.data?.dropLat);
  //         setDropLng(response?.data?.dropLng);
  //         setPickLat(response?.data?.pickupLat);
  //         setPickLng(response?.data?.pickupLng);

  //         if (response?.data?.driver?.id) {
  //           console.log('Ride response details with driver details API if if  1case...>>>>', response?.data);

  //           setDriverId(response?.data?.driver?.id);
  //           driverId && getDriverDetails();
  //           clearInterval(getDriverDetailsInterval);
           
  //            clearTimeout(timeOut.current);
  //           // clearInterval(timerGetRideDetails.current);
  //           console.log("Checking passing values",response.data.driver,response.data)

           
  //           navigate('/driver', {
  //             state: {
  //               driverDetails,
  //               rideData
  //             },
  //           });

  //         }

  //       } else {
  //         console.log('Ride details with driver details API else case...>>>>', response?.data);

  //         setLoading(false);
  //         clearInterval(timerGetRideDetails.current);
  //         clearTimeout(timeOut.current);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Ride details with driver details API error...>>>>', error, error?.response?.data);

  //       setLoading(false);
  //     });
  // };

  //Check below code works or not for above issue:

  const handleGetRideDetails = () => {
    console.log('Inside handleGetRideDetails');
    const { rideId } = RideIdValue;
    console.log("Ride id value", RideIdValue);
  
    const url = `${BASE_URL}${RIDE_BY_ID}${RideIdValue}`;
    console.log("URL for get driver details after accept at dispatcher side", url);
    setLoading(true);
    setCommontoken(userDetails.user_common_token);
  
    
  
    axios
      .get(url, {
        headers: {
          common_token: userDetails.user_common_token,
        },
      })
      .then((response) => {
        console.log('Ride details with driver details API response...>>>>', response, response?.data);
  
        if (response && response.status === 200) {
          console.log('Ride details with driver details API if case...>>>>', response?.data);
  
          setDriverDetails(response.data.driver);
          setRideData(response.data);
          setDropLat(response?.data?.dropLat);
          setDropLng(response?.data?.dropLng);
          setPickLat(response?.data?.pickupLat);
          setPickLng(response?.data?.pickupLng);
  
          if (response?.data?.driver?.id) {
            console.log('Ride response details with driver details API if if  1case...>>>>', response?.data);
  
            setDriverId(response?.data?.driver?.id);
            driverId && getDriverDetails();
            clearInterval(getDriverDetailsInterval);
  
            clearTimeout(timeOut.current);
            // clearInterval(timerGetRideDetails.current);
            console.log("Checking passing values", response.data.driver, response.data);
  
            // Set dataLoaded to true once state updates are completed
            setDataLoaded(true);
          }
        } else {
          console.log('Ride details with driver details API else case...>>>>', response?.data);
  
          setLoading(false);
          clearInterval(timerGetRideDetails.current);
          clearTimeout(timeOut.current);
        }
      })
      .catch((error) => {
        console.log('Ride details with driver details API error...>>>>', error, error?.response?.data);
  
        setLoading(false);
      });
  };

 
  
  // Use useEffect to navigate when dataLoaded is true
  useEffect(() => {
    if (dataLoaded) {
      navigate('/booked', {
        state: {
          driverDetails,
          rideData,
          commontoken,
          driverId,
          fromLatitude,
          fromLongitude,
          toLatitude,
          toLongitude
         
         
        },
      });
    }
  }, [dataLoaded, driverDetails, rideData]);
  

  useEffect(() => {
    timerNearestDriver.current = setInterval(() => {
      handleGetNearestDriver();
    }, 10000);
    return () => clearInterval(timerNearestDriver.current);
  }, [handleGetNearestDriver]);

  useEffect(() => {
    const backArrow = document.querySelector('.back-arrow'); // Assuming there's a class for the back arrow
    if (backArrow) {
      backArrow.addEventListener('click', handleBackArrowClick);
    }

    return () => {
      // Remove the event listener when the component is unmounted
      if (backArrow) {
        backArrow.removeEventListener('click', handleBackArrowClick);
      }
    };
  }, []);

  // useEffect(() => {
  //   timerGetRideDetails.current = setInterval(() => {
  //     handleGetRideDetails();
  //   }, 10000);
  //   return () => clearInterval(timerGetRideDetails.current);
  // }, [handleGetRideDetails]);

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

        console.log('UserDetails set in state:', userDetails);
      }
    } catch (error) {
      console.error('Error fetching user data from localStorage:', error);
    }
  };
  const handleOkClick = () => {
    
    navigate('/userHome'); // Navigate to the home page
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div >
      <div className="search-container">
      {searching ? (
        <text className="text">Searching for Nearest Driver</text>
      ) : (
        <text className="text">Request sent, Waiting for accept</text>
      )}

      <div className="waves-container">
        <span className="wave"></span>
        <span className="wave"></span>
        <span className="wave"></span>
        <span className="wave"></span>
      </div>
      <div className="car-icon">🚕</div>
    </div>

    {/* {isVisibleModal ? (
        <text className="text">CHECKING NO DRIVER</text>
      ) : ""} */}

{noDriver && (
  <div className="no-driver-overlay">
    <div className="no-driver-modal">
      <p className="text">No drivers available in your location 😞</p>
      <button onClick={() => handleOkClick()}>Ok</button>
    </div>
  </div>
)}
    </div>



   
  );
}

export default Searching;
