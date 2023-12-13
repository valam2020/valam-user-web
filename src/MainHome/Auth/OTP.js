import React, { useState, useRef } from 'react';
import './OTP.css';
import {BASE_URL} from './../../config/env/config';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {LOGIN } from '../../config/apis/endpoint';
import { useNavigate } from 'react-router-dom';
function OTP() {
  const { state } = useLocation();
  const { phone } = state;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const otpString = otp.join('');
  // Create refs for OTP input boxes
  const otpInputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return; // Ensure it's a number
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Auto-focus next input box, if available
    if (index < otpInputRefs.length - 1 && value !== '') {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    // You can add your verification logic here
    alert(`Verifying OTP: ${enteredOtp}`);
  };

  const handleOTPValidation = () => {
    if (otp === '') {
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
        mobileNumber: `${'+'}${phone}`,
        otp: otpString,
      };
       console.log("otp",otpString);
      console.log("data",data);
      console.log("URL", url)
      setLoading(true);
      axios
        .put(url, data)
        .then((response) => {
          if (response.status === 200) {
            if (response.data === 'OTP is verified successfully') {
              setLoading(false);
              toast.success('Mobile Verified Successfully');
              handleLoginWithMobile();
            }
          } else {
            setLoading(false);
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
            setLoading(false);
            toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Invalid OTP')
          }
        });
    }
  };
const handleLoginWithMobile = () => {
    
      let url = BASE_URL + LOGIN;
      let data = {
        "phNum": `${'+'}${phone}`,
      };
      console.log("data for login, signup",data)
      setLoading(true);
      axios
        .post(url, data)
        .then((response) => {
         
          // setShowOtpModal(false);
          console.log('mobile login response:', response);
          if (response.data.message === 'USER not registered') {
            setLoading(false);
            toast.error('Please Register your profile With US');
            navigate('/signup', {
              state: {
                phone
              },
            });
            // navigation.navigate('Signup', {
            //   userphone: phone,
            //   useremail: '',
            //   dialCode: callingCode,
            //   country_Code: countryCode,
            //   type: 'mobile',
            //   userId: '',
            // });
          } else {
            const user_details = {
              user_id: response?.data?.id,
              user_firstName: response?.data?.firstName,
              user_lastName: response?.data?.lastName,
              user_middleName: response?.data?.middleName,
              user_phoneNum: response?.data?.phNum,
              user_email: response?.data?.email,
              user_fullName: response?.data?.name,
              user_token: response?.data?.token,
              user_common_token: response?.data?.common_token_id,
            };
            localStorage.setItem('isUserLogedIn', '1');
            localStorage.setItem('isAuthType', 'mobile');
            !!response?.data?.id &&
            localStorage.setItem('userInfo', `${response?.data?.id}`);
            !!user_details &&
            localStorage.setItem(
                'user_details',
                JSON.stringify(user_details),
              );
              console.log("Data saved in localStorage after loggedIn successfully", localStorage.getItem('userInfo'), JSON.parse(localStorage.getItem('user_details')));
        setLoading(false);
			toast.success('Profile Register with us');
      navigate('/userHome');
            // navigation.navigate('User');
          }
        })
        .catch((error) => {
          console.log('mobile login error:', error.response);
          if (error.response.status === 500) {
            setLoading(false);
            toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong');
          } else {
            setLoading(false);
           toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong');
          }
        });
    
  };

  

  const handleSendOtp = () => {
    
      let url = BASE_URL + 'otp/verify';
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
           
			toast.success('OTP sent successfully');
            
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
    
  };

  const handleEnteredWrongNumber = () => {
    navigate('/login'); // Adjust the route as per your application
  };

  return (
    <div className="otp-container">
      <h2 className="otpHead"> Please enter the one-time password to verify your account</h2>
      <p className="otpPara">A One-time password has been sent to your mobile number</p>
      <div className="otp-input">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={otpInputRefs[index]}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            className='InputOTPBox'
          />
        ))}
      </div>
       <button type="button" onClick={() => onOTPVerify()} className="otpButton"> 
      {/* <button type="button" onClick={() => handleLoginWithMobile()} className="otpButton"> */}
        Verify
      </button>
      <div className="resend-wrong-number">
        <p className="resend" onClick={handleSendOtp}>
          Resend OTP
        </p>
        <p className="wrong-number" onClick={handleEnteredWrongNumber}>
          Entered Wrong Number?
        </p>
      </div>
    </div>
  );
}

export default OTP;
