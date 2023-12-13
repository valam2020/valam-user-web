import React from 'react';
import { GoogleMap, Marker as GoogleMapMarker, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

// const Map = () => {
//   const pickupLocation = { lat: 17.4482, lng: 78.3774 }; // Gachibowli, Hyderabad, Telangana, India
//   const dropLocation = { lat: 17.4399, lng: 78.4983 }; // Secunderabad, Telangana, India
const Map = ({ fromLatitude, fromLongitude, toLatitude, toLongitude }) => {
  const pickupLocation = { lat: fromLatitude, lng: fromLongitude };
  const dropLocation = { lat: toLatitude, lng: toLongitude };
  const googleMapsApiKey = 'AIzaSyDu2lyYSFTQiFcNobGBzBno0NXkHGH4bss'; // Replace with your actual API key

  // Options for useJsApiLoader should be defined outside the component to remain constant
  const options = {
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
  };

  // Determine the width dynamically based on the screen width
  const width = window.innerWidth <= 768 ? '100%' : '75%';
  const height = window.innerWidth <= 768 ? '300px' : '550px';

  const mapStyles = {
    height: height,
    width: width,
  };

  // Load the Google Maps API using useJsApiLoader
  const { isLoaded } = useJsApiLoader(options);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={pickupLocation} className="mapcontain">
      {/* Pickup Marker */}
      {pickupLocation && <GoogleMapMarker position={pickupLocation} label="P" title="Pickup Location" />}

      {/* Drop Marker */}
      {dropLocation && <GoogleMapMarker position={dropLocation} label="D" title="Drop Location" />}
    </GoogleMap>
  ) : null;
};

export default Map;
