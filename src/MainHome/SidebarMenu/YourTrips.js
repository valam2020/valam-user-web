import React, { useState , useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import './YourTrip.css';
import {BASE_URL} from '../../config/env/config';
import {RIDE_FETCH, RIDE_BY_ID} from '../../config/apis/endpoint';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Trips from './Trips';
import Header from '../../Header';


import axios from 'axios';

const YourTrips = () => {
    const [onrideData, setOnRideData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [rideIdValue, setRideIdValue] = useState();
    const[commontoken, setCommontoken]=useState(null);
  const [driverDetails, setDriverDetails] = useState([]);
  const [rideData, setRideData] = useState([]);
  const [toLatitude, setToLatitude] = useState(null);
  const [toLongitude, setToLongitude] = useState(null);
  const [fromLatitude, setFromLatitude] = useState(null);
  const [fromLongitude, setFromLongitude] = useState(null);
  const [driverId, setDriverId] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
 
  
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
      setShowDetails(!showDetails);
    };
  

    const hitServiceWhenRideIsWithDriver = useCallback(() => {
        console.log('inside hitServiceWhenRideIsWithDriver');
        const storedValue = localStorage.getItem('user_details');
       const user_details = JSON.parse(storedValue);
            if (user_details) {
                const date = new Date();
        let url = BASE_URL + RIDE_FETCH;
        const data = {
          // eslint-disable-next-line radix
          userId: parseInt(user_details?.user_id),
          pickupDate: date.toISOString().slice(0, 10),
          statusId: 15,
        };

        console.log('req body for status15...>>>>', data);
        axios
          .post(url, data, {
            headers: {
              'Content-Type': 'application/json',
              common_token: user_details?.user_common_token,
            },
          })
          .then((response) => {
            console.log('ride fetch api response with status15...>>>>', response);
            if (response && response?.status === 200) {
              if (response?.data?.length > 0) {
                setOnRideData(response?.data);
                setDriverDetails(response.data[0].driver);
                setRideData(response?.data[0]);
                setFromLatitude(response.data[0].pickupLat);
                setFromLongitude(response.data[0].pickupLng);
                setToLatitude(response.data[0].dropLat);
                setToLongitude(response.data[0].dropLng);
                setCommontoken(response.data[0].user.token);
                setDriverId(response.data[0].driver.id);

                console.log("Ongoing ride data", response.data[0].driver, response.data[0], response.data[0].pickupLat, response.data[0].pickupLng, response.data[0].dropLat, response.data[0].dropLng, response.data[0].user.token, response.data[0].driver.id)
              } else {
                setOnRideData([]);

              }
            } else {
            //   _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
            }
          })
          .catch((error) => {
            console.log('ride fetch api error...>>>>', error);
            if (error?.response) {
              if (
                error?.response?.data &&
                (error?.response?.data !== '' || !!error?.response?.data)
              ) {
                // error?.response?.data &&
                //   _showToast(
                //     error?.response?.data?.message
                //       ? error?.response?.data?.message
                //       : error?.response?.data?.error
                //       ? error?.response?.data?.error
                //       : error?.response?.data
                //       ? error?.response?.data
                //       : STRING.SOMETHING_WENT_WRONG,
                //     'error',
                //   );
              } else {
                // _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
              }
            } else {
            //   _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
            }
          })
          .finally(() => setLoading(false));
          
            }
        })

      ;

      const hitServiceForOngoingRideNotStarted = useCallback(() => {
        console.log('inside hitServiceForOngoingRideNotStarted');
        setLoading(true);
        const storedValue = localStorage.getItem('user_details');
       
        const user_details = JSON.parse(storedValue);
      if (user_details) {
        console.log('user_details inside current ride', user_details);
        setUserData(user_details);
        const date = new Date();
        let url = BASE_URL + RIDE_FETCH;
        
        const data = {
          // eslint-disable-next-line radix
          userId: user_details.user_id,
          pickupDate: date.toISOString().slice(0, 10),
          statusId: 6,
        };

        console.log('req body for status04...>>>>', data);
        axios
          .post(url, data, {
            headers: {
              'Content-Type': 'application/json',
              common_token: user_details?.user_common_token,
            },
          })
          .then((response) => {
            console.log('ride fetch api response for status06...>>>>', response);
            if (response && response?.status === 200) {
              if (response?.data?.length > 0) {
                setOnRideData(response?.data);
                setDriverDetails(response.data[0].driver);
                setRideData(response.data[0]);
                setFromLatitude(response.data[0].pickupLat);
                setFromLongitude(response.data[0].pickupLng);
                setToLatitude(response.data[0].dropLat);
                setToLongitude(response.data[0].dropLng);
                setCommontoken(response.data[0].user.token);
                setDriverId(response.data[0].driver.id);
                

                console.log("Ongoing ride data", response.data[0].driver, response.data[0], response.data[0].pickupLat, response.data[0].pickupLng, response.data[0].dropLat, response.data[0].dropLng, response.data[0].user.token, response.data[0].driver.id )
              } else {
                // setRideData([]);
                hitServiceWhenRideIsWithDriver();
              }
            } else {
            //   _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
            }
          })
          .catch((error) => {
            console.log('ride fetch api error...>>>>', error);
            if (error?.response) {
              if (
                error?.response?.data &&
                (error?.response?.data !== '' || !!error?.response?.data)
              ) {
                // error?.response?.data &&
                //   _showToast(
                //     error?.response?.data?.message
                //       ? error?.response?.data?.message
                //       : error?.response?.data?.error
                //       ? error?.response?.data?.error
                //       : error?.response?.data
                //       ? error?.response?.data
                //       : STRING.SOMETHING_WENT_WRONG,
                //     'error',
                //   );
              } else {
                // _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
              }
            } else {
            //   _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
            }
          })
          .finally(() => setLoading(false));

      }
   });
    

    const hitServiceForOngoingRide = useCallback(() => {
        console.log('inside hitServiceForOngoingRide');
        setLoading(true);
        const storedValue = localStorage.getItem('user_details');
       
        const user_details = JSON.parse(storedValue);
      if (user_details) {
        console.log('user_details inside current ride', user_details);
        setUserData(user_details);
        const date = new Date();
        let url = BASE_URL + RIDE_FETCH;
        
        const data = {
          // eslint-disable-next-line radix
          userId: user_details.user_id,
          pickupDate: date.toISOString().slice(0, 10),
          statusId: 4,
        };

        console.log('req body for status04...>>>>', data);
        axios
          .post(url, data, {
            headers: {
              'Content-Type': 'application/json',
              common_token: user_details?.user_common_token,
            },
          })
          .then((response) => {
            console.log('ride fetch api response for status04...>>>>', response);
            if (response && response?.status === 200) {
              if (response?.data?.length > 0) {
                setOnRideData(response?.data);
                console.log("Ongoing ride data", rideData.driver , rideData)

                setDriverDetails(response.data[0].driver);
                setRideData(response.data[0]);
                setFromLatitude(response.data[0].pickupLat);
                setFromLongitude(response.data[0].pickupLng);
                setToLatitude(response.data[0].dropLat);
                setToLongitude(response.data[0].dropLng);
                setCommontoken(response.data[0].user.token);
                setDriverId(response.data[0].driver.id);

                console.log("Ongoing ride data", response.data[0].driver, response.data[0], response.data[0].pickupLat, response.data[0].pickupLng, response.data[0].dropLat, response.data[0].dropLng, response.data[0].user.token, response.data[0].driver.id)
              } else {
                // setRideData([]);
                hitServiceForOngoingRideNotStarted();
              }
            } else {
            //   _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
            }
          })
          .catch((error) => {
            console.log('ride fetch api error...>>>>', error);
            if (error?.response) {
              if (
                error?.response?.data &&
                (error?.response?.data !== '' || !!error?.response?.data)
              ) {
                // error?.response?.data &&
                //   _showToast(
                //     error?.response?.data?.message
                //       ? error?.response?.data?.message
                //       : error?.response?.data?.error
                //       ? error?.response?.data?.error
                //       : error?.response?.data
                //       ? error?.response?.data
                //       : STRING.SOMETHING_WENT_WRONG,
                //     'error',
                //   );
              } else {
                // _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
              }
            } else {
            //   _showToast(STRING.SOMETHING_WENT_WRONG, 'error');
            }
          })
          .finally(() => setLoading(false));

      }
   });

  
   

 

      const navigateToDriverDetail =()=>{
        console.log(rideData.fromAddress);
        
      
        navigate('/driver', {
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

    



      const renderItem = ({ item, index }) => {
        return (
          <div className="containerongo">
            <div className="cardContainerongo">
              <div
                onClick={() => navigateToDriverDetail(item)}
                className="pressableongo"
              >
                <div className="distanceContainerongo">
                <div className="titleAddressContainerongo">
                  <span className="leftSpaceongo">FROM:</span>
                  <span
                    className="rightSpaceongo"
                    title={item?.fromAddress || ''}
                  >{`${item?.fromAddress || ''}`}</span>
                </div>
                </div>
    
                <div className="distanceContainerongo">
                <div className="titleAddressContainerongo">
                  <span className="leftSpaceongo">TO:</span>
                  <span
                    className="rightSpaceongo"
                    title={item?.toAddress || ''}
                  >{`${item?.toAddress || ''}`}</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        );
      };

      const renderYourTripsContent = () => {
        return (
          <div className="yourTripsContent">
            {/* Your additional content goes here */}
            <p>This is additional content.</p>
          </div>
        );
      };
      const goBack =()=> {
        navigate('/userHome');
      }

    //   useEffect(
    //     useCallback(() => {
    //       hitServiceForOngoingRide();
    //     }, [hitServiceForOngoingRide]),
    //   );
     
      useEffect(() => {
        hitServiceForOngoingRide();
      }, []);
    return (
        <div className="containerongo">
           
            
        
             <div className="headerongo">
          <div 
          onClick={() => goBack()} 
          className="goBackContainerongo">
            {/* <FontAwesome name="angle-left" size={36} color={COLORS.WHITE} /> */}
            <FontAwesomeIcon icon={faAngleLeft} size="lg" style={{ color: '#FFFFFF' }} />
          </div>
          <span className="headerTextongo">Ongoing Ride</span>
        </div>
  
        <div className="flatListContainerongo">
        
          <ul className="flatListongo" style={{ height: `${onrideData.length * 150}px` }}>
            {onrideData.map((item, index) => (
              <li key={index}>{renderItem({ item, index })}</li>
            ))}
           
          </ul>
          
          {onrideData.length === 0 && (
            <div className="emptyContainerongo" style={{ height: '100px' }}>
              <span className="emptylistTextongo">NO RECORDS</span>
            </div>
          )}
        </div>

       
        
        <div onClick={handleToggleDetails} className="dividertripongo">
            <span className="headerTextyourtripsongo">Your Trips ... 🚕🚕  </span>
            <FontAwesomeIcon icon={faAngleRight} size="lg" style={{ color: 'black' }} />
          </div>
        <div>
        <Trips/>
        </div>
        

       

      
      </div>
    );
}
export default YourTrips;