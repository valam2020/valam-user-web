import React, { useState, useRef, useEffect } from 'react';
import './NewDashboard.css'; // Import the CSS file
import logo from '../../assets/images/valamnew.png';
import profile from '../../assets/images/avatar.png';
import { Link } from 'react-router-dom';
import { GoogleMap,  useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import GoogleMapReact from 'google-map-react';
import carImg from "../../assets/images/taxi-image.png";
import PlacesAutocomplete from 'react-places-autocomplete';
import loadjs from 'loadjs';
import { MdOutlineClear } from 'react-icons/md';
import { BsFillCarFrontFill } from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs';
import {toast} from 'react-toastify'; 
import Header from '../../Header'
import 'react-toastify/dist/ReactToastify.css';
import {BASE_URL} from './../../config/env/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  CAR_DETAILS,
  PAYMENT,
  RIDE_ADD,
  USER_UPDATE,
} from '../../config/apis/endpoint';
const NewDashboard = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');
  const [curaddress, setCuraddress] = useState('');
  const [requestRidePage, setRequestRidePage] = useState(true);

  const [userLocation, setUserLocation] = useState(null);
  const [pickUploc, setPickUploc]=useState(null);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [apiLoaded, setApiLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [paymentmode, setPaymentmode] = useState(null);
  const [carSelected, setCarSelected] =useState(null);
  const [selectedCar, setSelectedCar] = useState('');
  const [carsData, setCarsData] = useState([]);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [commonToken, setCommonToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [ridePrice, setRidePrice] = useState(null);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isCarSelectionModelVisible, setIsCarSelectionModelVisible] = useState(false);
  const [toLatitude, setToLatitude] = useState(null);
  const [toLongitude, setToLongitude] = useState(null);
  const [fromLatitude, setFromLatitude] = useState(null);
  const [fromLongitude, setFromLongitude] = useState(null);
  const [rideId, setRideId] = useState ('');
  const [scrolled, setScrolled] = useState(false);

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
  const handleProfileIconClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  // Close the dropdown when clicking outside of it
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:'AIzaSyDu2lyYSFTQiFcNobGBzBno0NXkHGH4bss',
  });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const handleClear = () => {
    setInputValue('');
  }
  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            setFromLatitude(position.coords.latitude);
            setFromLongitude(position.coords.longitude);
            console.log("Latitude and logitude values",position.coords.latitude, position.coords.longitude);
  
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDu2lyYSFTQiFcNobGBzBno0NXkHGH4bss`);
  
            if (!response.ok) {
              throw new Error('Failed to fetch address');
            }
  
            const data = await response.json();
            const formattedAddress = data.results[0].formatted_address;
            setPickupAddress(formattedAddress);
            setCuraddress(formattedAddress);
          },
          (error) => {
            console.log('Error getting location:', error);
          },  {enableHighAccuracy: false, timeout: 290000, maximumAge: 6800},
        );
      }
    } catch (error) {
      console.log('Error:', error.message);
    }

    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);  

  useEffect(() => {
    loadjs(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDu2lyYSFTQiFcNobGBzBno0NXkHGH4bss&libraries=places',
      {
        success: () => {
          console.log('Google Maps API loaded');
          setApiLoaded(true);
          fetchUserData();
        },
        error: () => {
          console.log('Failed to load Google Maps API');
        },
      }
    );
  }, []);
  const handlePickupChange = async (address) => {
    setPickupAddress(address);
    const result = await geocodeAddress(address);

    if (result) {
      setFromLatitude(result.latitude);
      setFromLongitude(result.longitude);
      console.log(fromLatitude,fromLongitude);
    }

    calculateDistanceAndDuration(pickupAddress, dropAddress);
  };

  const handleOnselectPickupChange = async (address) => {
    setPickupAddress(address);
    const result = await geocodeAddress(address);

    if (result) {
      setFromLatitude(result.latitude);
      setFromLongitude(result.longitude);
      console.log(fromLatitude,fromLongitude);
    }
    calculateDistanceAndDuration(address, dropAddress);
  }
  const handleDropChange = async (address) => {
    setDropAddress(address);
    const result = await geocodeAddress(address);

    if (result) {
      setToLatitude(result.latitude);
      setToLongitude(result.longitude);
      console.log(toLatitude,toLongitude);
    }
    
    calculateDistanceAndDuration(pickupAddress, address);
  };
  const handleOnselectDropChange = async (address) => {
    setDropAddress(address);
    const result = await geocodeAddress(address);

    if (result) {
      setToLatitude(result.latitude);
      setToLongitude(result.longitude);
      console.log(toLatitude,toLongitude);
    }
    calculateDistanceAndDuration(pickupAddress, address);
  }

  const calculateDistanceAndDuration = (origin, destination) => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      console.log('Origin:', origin);
console.log('Destination:', destination);

      const request = {
        origin,
        destination,
       optimizeWaypoints: true,
        travelMode: 'DRIVING',
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          const route = result.routes[0];
          const distanceValue = parseFloat(route.legs[0].distance.text.replace(/[^\d.]/g, ''));
          const durationValue = parseInt(route.legs[0].duration.text.replace(/\D/g, ''));
          // setDistance(route.legs[0].distance.text);
          // setDuration(route.legs[0].duration.text);
          setDistance(distanceValue);
          setDuration(durationValue);
        } else {
          // Handle error
          console.log(`Error fetching directions: ${status}`, result);
        }
      });
    }
  };


  // const handleContinue = () => {
    
  //   if (handleValidation()) {
  //     setRequestRidePage(false);
  //   }
  // };

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (handleValidation()) {
      setRequestRidePage(false);
    }
  };

 
  const handlePaymentSelection = (paymentOption) => {
    setPaymentmode(paymentOption);
  };
  const handleValidation = () => {
    console.log("validating pickup and drop address should not be null")
    console.log("pickup address",pickupAddress);
    console.log("drop address",dropAddress);
   
    if (pickupAddress === null || dropAddress === null || pickupAddress === '' || dropAddress === '') {
      toast.error('Please Select Your Address');
      return false;
    } else {
      return true;
    }
  };

  const handleCarSelection = (carType) => {
    setCarSelected(carType);
    console.log("selected car is",carType)
    if (carSelected !== '' && handleValidation()) {
      let tempArr = [...carsData];
      const targetIndex = tempArr?.findIndex(
        (f) => f.isSelected === selectedCar?.isSelected,
      );
      tempArr?.map((e, i) => {
        if (targetIndex === i) {
          e.isSelected = !e?.isSelected;
        } else {
          e.isSelected = false;
        }
      });
    
      setCarsData(tempArr);
      handleGetPaymentTotal(); 
    } else {
      
      // setCarSelectionModelVisible(false);
    }
  };

  const handleGetPaymentTotal = () => {
    if (handleValidation()) {
      const url = BASE_URL + PAYMENT + distance;
      setLoading(true);
      console.log("request of ride cal api", userDetails.user_common_token, url)

      axios
        .get(url, {
          headers: {
            common_token: userDetails.user_common_token,
          },
        })
        .then((response) => {
          if (response && response?.status === 200) {
            console.log("response of ride cal api", response)
            setRidePrice(response?.data);
            console.log("Price of ride", response.data)
            setLoading(false);
            
          } else {
            setLoading(false);
            toast.error('Something went wrong');
          }
        })
        .catch((error) => {
          setLoading(false);

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
              toast.error('Something went wrong');
            }
          } else {
            toast.error('Something went wrong');
          }
        });
    }
  };
  const geocodeAddress = async (address) => {
    const apiKey = 'AIzaSyDu2lyYSFTQiFcNobGBzBno0NXkHGH4bss'; // Replace with your actual API key
  
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.status === 'OK' && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
  
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        return { latitude, longitude };
      } else {
        console.log(`Geocoding failed with status: ${data.status}`);
        return null;
      }
    } catch (error) {
      console.log('Error during geocoding:', error);
      return null;
    }
  };


  const handleAddRideRequest = () => {
    const storedValue = localStorage.getItem('userInfo');
    // const userdetails = localStorage.getItem('user_details');
    console.log("local data here", storedValue);
    setRideId('');
   
    // Check if 'userInfo' is available in local storage
    if (storedValue) {
      setLoading(true);
      const date = new Date();
      const url = BASE_URL + RIDE_ADD;
  
      const data = {
        comfort_level: carSelected,
        distance: distance,
        paymentTotal: ridePrice,
        paymentType: paymentmode,
        pickupLat: fromLatitude,
        pickupLng: fromLongitude,
        dropLat: toLatitude,
        dropLng: toLongitude,
        stsId: 1,
        fromAddress: pickupAddress,
        toAddress: dropAddress,
        pickupTime: date.toISOString().slice(0, 23),
        userId: parseInt(storedValue),
        modifiedDate: date.toISOString().slice(0, 10),
      };
  
      console.log("Sending a ride request data", data, url);
      console.log("common token", userDetails.user_common_token);
  
      axios
        .post(url, data, {
          headers: {
            common_token: userDetails.user_common_token,
          },
        })
        .then((response) => {
          console.log("response of ride request api",response)
          if (response && response?.status === 200) {
            setLoading(false);
            setDropAddress('');
            setDistance(0);
            const RideIdValue = response.data.rideId ?? '';
            setRideId(response.data.rideId);
            console.log("Saving rideId from add request api",response.data.rideId, "update Id",RideIdValue)
            // Additional state resets if needed
            !!response.data?.rideId &&
            // navigate('/search');
            navigate('/search', {
              state: {
                fromLatitude,
                fromLongitude,
                toLatitude,
                toLongitude,
                RideIdValue
              },
            });
          } else {
            setLoading(false);
            // Handle error cases here
          }
        })
        .catch((error) => {
          setLoading(false);
          // Handle error cases here
        })
        .finally(() => setLoading(false));
    } else {
      console.error("User information not found in localStorage");
    }
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
    <div className="dashboard">
      {/* Top Section */}
     <Header/>
       {/* Top Section Ends*/}

      {/* Home Menu */}
      <div className="home-menu">
    
        <div className="map-container">
      


{userLocation ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDu2lyYSFTQiFcNobGBzBno0NXkHGH4bss' }}
          defaultCenter={{
            lat: userLocation.lat,
            lng: userLocation.lng
            
          }}
          defaultZoom={15}
        >
          <Marker
            lat={userLocation.lat}
            lng={userLocation.lng}
            text="Your Location"
          />
        </GoogleMapReact>
      ) : (
        <p>Getting your location...</p>
      )}
      
      
        </div>
        {requestRidePage ?(<div className="form-container">
        {apiLoaded &&  (  
         <div className="form-container">
          
       
          <h3>Request a ride</h3>
         <form>
        <div>
       
        <div className="input-box">
            <PlacesAutocomplete 
             value={pickupAddress} onChange={handlePickupChange} onSelect={handleOnselectPickupChange}>
            
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input {...getInputProps({ placeholder: 'Pickup location' })} className="fromLabelBX"
                  // value={address}
                  // // value={inputValue}
                  //   onChange={(e) => setAddress(e.target.value)}
                  
                  />
                   {pickupAddress && (
                   <MdOutlineClear className="clear" onClick={(e) =>setPickupAddress('') } /> 
                   )}

       
      
                  <div className="suggestions">
                    {/* {loading ? <div>Loading...</div> : null} */}
                    {suggestions.map((suggestion, idx) => (
                      <div {...getSuggestionItemProps(suggestion)} key={idx} className="suggestion-item">
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>


            <div className="input-box">
            <PlacesAutocomplete value={dropAddress} onChange={handleDropChange} 
       onSelect={handleOnselectDropChange}
        >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input {...getInputProps({ placeholder: ' Drop location' })} className="fromLabelBx" />
                  <div className="suggestions">
                    {loading ? <div></div> : null}
                    {suggestions.map((suggestion, idx) => (
                      <div {...getSuggestionItemProps(suggestion)} key={idx} className="suggestion-item">
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            </div>

         
          {/* {distance && duration && (
        <div className="distancebox">
          <p>
            <b>Distance:</b> <span className="distance-data">{distance}</span>
          </p>
          <p>
            <b>Duration:</b> <span className="duration-data">{duration}</span>
          </p>
        </div>
      )} */}

{distance && duration && (
        <div className="distancebox">
          <p className="distance">Distance: <span className="distance-data">{distance} miles</span></p>
          <p className="duration">Duration: <span className="duration-data">{duration} mns</span></p>
        </div>
      )}

            <button className="continuebtn" onClick={handleContinue}>Continue</button>
            
          </div>

        
          </form>

          
          </div>
        )} </div>):
        (
          <div className="form-container">
          <h4 className="carhead">Select your preferred car option</h4>
          <div>
            <div onClick={() => handleCarSelection('Economy')} className={carSelected==='Economy'? 'economyactive': 'carSelect1'}>
            <BsFillCarFrontFill color="orange" style={{ fontSize: '2.0em' , paddingRight:"10px"}}/>
              
                <div >
                  <text style={{color:'#575759'}}>Economy</text>
                  
                <div style={{color:'#575759', display:"flex"}}><BsFillPersonFill color="#575759" style={{ fontSize: '1.5em' , paddingRight:"3px"}}/>  <text>5</text></div>
                
                </div>
                </div>
            <hr />
            <div onClick={() => handleCarSelection('Compact')} className={carSelected==='Compact'? 'compactactive': 'carSelect2'}>
            <BsFillCarFrontFill color="orange" style={{ fontSize: '2.0em' , paddingRight:"10px"}}/>
              
                <div >
                  <text style={{color:'#575759'}}>Compact</text>
                  
                <div style={{color:'#575759', display:"flex"}}><BsFillPersonFill color="#575759" style={{ fontSize: '1.5em' , paddingRight:"3px"}}/>  <text>6</text></div>
                </div>

              
              
            </div>
            <hr />
            <div onClick={() => handleCarSelection('SUV')} className={carSelected==='SUV'? 'suvactive': 'carSelect3'}>
            <BsFillCarFrontFill color="orange" style={{ fontSize: '2.0em' , paddingRight:"10px"}}/>
              
                <div >
                  <text style={{color:'#575759'}}>SUV</text>
                  
                <div style={{color:'#575759', display:"flex"}}><BsFillPersonFill color="#575759" style={{ fontSize: '1.5em' , paddingRight:"3px"}}/>  <text>7</text></div>
                </div>

              
              
            </div>
          </div>
          <h4>Select payment option</h4>
          <div className='payment'>
            <button onClick={() => handlePaymentSelection('Cash')} className={paymentmode==='Cash'? 'cashactive': 'paymentbtn1'}><b>Cash</b></button>
            <button onClick={() => handlePaymentSelection('Card')} className={paymentmode==='Card'? 'cardactive': 'paymentbtn2'}>
             <b>Credit/Debit Card</b> 
            </button>
            <div style={{padding:"15px 0 25px"}}><text style={{color:"#616362"}}><b>Total Fare: </b>  <text><b style={{color:"orange"}}>$ {ridePrice}</b></text> </text></div>
            <button className="CntBtn" onClick={() =>handleAddRideRequest()}><b>Continue</b>
            
            </button>
          </div>
        </div>
        )}
       
      </div>

      


      
    </div>
  );
};

const Marker = () => (
  

  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z"
    fill="#FF0000" // Change the fill color here
  />
</svg>
);

export default NewDashboard;
