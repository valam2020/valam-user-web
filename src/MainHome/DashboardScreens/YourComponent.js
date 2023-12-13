import React, { useState, useEffect } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import loadjs from 'loadjs';

import './styles.css';
const YourComponent = () => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [apiLoaded, setApiLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    loadjs(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAGucoMHNFROxZFeUurLhxpSHNq-tpCUpo&libraries=places',
      {
        success: () => {
          console.log('Google Maps API loaded');
          setApiLoaded(true);
        },
        error: () => {
          console.error('Failed to load Google Maps API');
        },
      }
    );
  }, []);

  const handlePickupChange = (address) => {
    setPickupAddress(address);
  };

  const handleDropChange = (address) => {
    setDropAddress(address);
  };

 
  
    const handleClear = () => {
      setInputValue('');
    }

  return (
    <div>
       

         <form>
            <div className="input-box">
            <PlacesAutocomplete value={pickupAddress} onChange={handlePickupChange} onSelect={setPickupAddress}>
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input {...getInputProps({ placeholder: 'Pickup location' })} className="fromLabelBX"/>
                  <div className="suggestions">
                    {loading ? <div>Loading...</div> : null}
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
            <PlacesAutocomplete value={dropAddress} onChange={handleDropChange} onSelect={setDropAddress}>
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input {...getInputProps({ placeholder: ' Drop location' })} className="fromLabelBx" />
                  <div className="suggestions-row">
                    {loading ? <div>Loading...</div> : null}
                    {suggestions.map((suggestion, idx) => (
                      <div {...getSuggestionItemProps(suggestion)} key={idx} className="suggestion-item-row">
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            </div>

            <button className="continuebtn">Continue</button>
            </form>
      
    </div>
  );
};

export default YourComponent;
