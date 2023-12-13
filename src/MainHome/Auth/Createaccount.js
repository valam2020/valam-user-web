import React, { useState, useEffect } from 'react'; 
import PhoneInput from 'react-phone-input-2';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './sign.css';
import { Link } from 'react-router-dom';
import "react-phone-input-2/lib/style.css";
import carImg from "../../assets/images/Login_bg.jpg";
import {BASE_URL} from '../../config/env/config';
import {LOGIN, OTP, USER_UPDATE} from '../../config/apis/endpoint';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../HomeHeader';


import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
function Createaccount() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mobileValidationError, setMobileValidationError] = useState('');
  const [callingCode, setCallingCode] = useState('1');
const [countryCode, setCountryCode] = useState('US');
const [phone, setPhone] = useState('');
const [loading, setLoading] = useState('');
const [showOtpModal, setShowOtpModal] = useState(false);
const navigate = useNavigate();


  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    console.log(phoneNumber);
  };

  const handleContinueWithMobile = () => {
    
  };

  const _changeMobileNumber = (val) => {
    setPhone(val);
    setMobileValidationError('');
    console.log(phone);
  };

  const handleContinueWithGoogle = () => {
    
    alert('Continuing with Google');
  };

  const handleContinueWithFacebook = () => {
    
    alert('Continuing with Facebook');
  };

 

  const handleValidation = () => {
    const error = {
      mobileValidationError: '',
    };
    if (phone === '') {
      setMobileValidationError(
        (error.mobileValidationError = 'Mobile Number is Required'),
      );
      return false;
    } else if (!/^[0-9]{10,13}$/.test(phone)) {
      setMobileValidationError(
        (error.mobileValidationError = 'Enter 10 digit Number'),
      );
      return false;
    } else {
      return true;
    }
  };

  const handleSendOtp = () => {
    if (handleValidation()) {
      let url = BASE_URL + OTP;

      let data = {
        mobileNumber: `${'+'}${phone}`,
      };
      console.log(data)
      setLoading(true);
      axios
        .post(url, data)
        .then((response) => {
          console.log('send otp api response', response);
          if (response && response?.status === 200) {
            setLoading(false);
            // refRBSheet.current.open();
            setShowOtpModal(true);
			toast.success('OTP is sent successfully');
            
          } else {
            setLoading(false);
			toast.error('Something went wrong')
            
          }
        })
        .catch((error) => {
          console.log('send otp api error', error.response);
          if (error?.response?.status === 500) {
            setLoading(false);
			toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong')
            
          } else {
            setLoading(false);
            toast.error(error.response?.data?.error
              ? error.response?.data?.error
              : 'Something went wrong')
          }
        });
    }
  };

  const handleGoogleLogin = async () => {
   
  };

  useEffect(() => {
    if (showOtpModal) {
      navigate('/OTP');
    }
  }, [showOtpModal, navigate]);

  useEffect(() => {
    if (showOtpModal) {
      navigate('/OTP', {
        state: {
          phone
        },
      });
    }
  }, [showOtpModal, navigate, phone]);

  return (
    <div>
      <Header/>
    <div className='loginScreen'>

<div className='leftContainerLoginImg'>
      <img src={carImg} alt="Car-Img" className='leftLoginimg' />
    </div>

    <div className="login-container">
      <h2 className="head">Login</h2>
      {/* <p className="lighttext">Doesn't have an account yet? <Link to="/signup">SignUp</Link></p> */}
      <form className="loginForm">
       
        <label className='InputMobHead'>Enter Your Mobile Number</label>

                 <PhoneInput
                
                    country={'us'}
                    value={phoneNumber}
                    // onChange={handlePhoneChange}
                    onChange={(value) => _changeMobileNumber(value)}
                   
                    inputStyle={{
                      width: '90%',
                      padding: '10px',
                      margin: '10px 0',
                      marginLeft:'35px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                    }}
                    error={mobileValidationError}
                    
                />
                {mobileValidationError !== '' && (
              <div className='errorContainer' >
                <p className='textStyle'>{mobileValidationError}</p>
              </div>
            )}
        <button
          type="button"
          onClick={() => handleSendOtp()}
         className='MobileBtn'
        >
          Continue with Mobile
        </button>
      </form>
      <div className="divider">
  <div className="line"></div>
  <div className="text">or</div>
  <div className="line"></div>
</div>
      <div className="social-login">
        <button type="button" onClick={() => handleGoogleLogin()}>
          <FaGoogle /> Continue with Google
        </button>
        <button type="button" onClick={handleContinueWithFacebook}>
          <FaFacebook /> Continue with Facebook
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Createaccount;
