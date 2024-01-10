// OTPModal.js
import React,{ useState } from 'react';
import './OTPModal.css';
import {BASE_URL} from './../../config/env/config';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const OTPModal = ({ show, onClose, onVerifyOTP, mobileNumber  }) => {
    const [enteredOTP, setEnteredOTP] = useState('');
  if (!show) {
    return null;
  }
  
  const handleVerifyClick = () => {
    // Implement OTP verification logic here
    // Call onVerifyOTP with the entered OTP
    const enteredOTP = document.getElementById('otpInput').value;
    onOTPVerify(enteredOTP);
    onClose();
  };
  const handleInputChange = (event) => {
    // Allow only numeric characters
    const numericInput = event.target.value.replace(/[^0-9]/g, '');
    setEnteredOTP(numericInput);
    
  };

  const handleOTPValidation = () => {
    if (enteredOTP === '') {
      toast.error('OTP is Required');
      return false;
    } else {
      return true;
    }
  };
  const onOTPVerify = () => {
    if (handleOTPValidation()) {
      let url = BASE_URL + 'otp/verify';
      let data = {
        mobileNumber: `${'+'}${mobileNumber}`,
        otp: enteredOTP,
      };
       console.log("otp",enteredOTP);
      console.log("data",data);
      console.log("URL", url)
     
      axios
        .put(url, data)
        .then((response) => {
          if (response.status === 200) {
            if (response.data === 'OTP is verified successfully') {
              
              toast.success('Mobile Verified Successfully');
              handleupdateprofile();
            }
          } else {
            
            console.log("bad request")
            toast.error('Something went wrong');
          }
        })
        .catch((error) => {
          if (error.response.status === 500) {
            toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong')
          } else {
           
            toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Invalid OTP')
          }
        });
    }
  };
  const handleupdateprofile = () => {
    //update mobile number Integration, get data from api and store in localstorage and back to profile.js
    
  };

  return (
    <div className="otp-modal">
      <div className="otp-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enter OTP</h2>
        <p>Sent to New Mobile Number: {mobileNumber}</p>
        <input type="text"  // Enforce numeric input
          maxLength="4" id="otpInput" placeholder="Enter 4 digit OTP" className="inputboxotp" value={enteredOTP}
          onChange={handleInputChange}/>
        <button onClick={handleVerifyClick} className="otpverifybtn">Verify</button>
      </div>
    </div>
  );
};

export default OTPModal;
