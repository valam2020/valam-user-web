import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import carImg from "../../assets/images/taxi-image.png";
import './Signup1.css';
// import { ToastProvider, useToasts } from 'react-toast-notifications';
import axios from 'axios';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import { useLocation } from 'react-router-dom';
 
import Header from '../HomeHeader';
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state;
  
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobile: phone,
    agreeToTerms: false, 
  });
 
  const [isClicked, setIsClicked] = useState(false);
  const [firstNameValidationError, setFirstNameValidationError] = useState('');
  const [lastNameValidationError, setLastNameValidationError] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');
  const [mobileValidationError, setMobileValidationError] = useState('');
  const [otpValidationError, setOTPValidationError] = useState('');
  const [Loading, setLoading] = useState(false);

 


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target || e;
  
    if (name === 'mobile') {
      setFormData({
        ...formData,
        mobile: value,
      });
    }  else if (name === 'agreeToTerms') { // Update this condition
      setFormData({
        ...formData,
        agreeToTerms: checked,
      });
    }else {
      const inputValue = type === 'checkbox' ? checked : value;
      setFormData({
        ...formData,
        [name]: inputValue,
      });
    }
  };
  



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);
    if (formData.agreeToTerms) {
     handleSuccessfulSubmission();
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

 

  const handleSuccessfulSubmission = () => {
    
   console.log('Checked agrre box');
   handleRegistration();
  };

  const handleValidation = () => {
    const error = {
      mobileValidationError: '',
      firstNameValidationError: '',
      lastNameValidationError: '',
      emailValidationError: '',
    };
    if (formData.firstName === '') {
      setFirstNameValidationError(
        (error.firstNameValidationError = 'First Name is Required'),
        
      );
      console.log("please enter firstname")

      return false;
    } else if (formData.lastName === '') {
      setLastNameValidationError(
        (error.lastNameValidationError = 'Last Name is Required'),
      );
      console.log("please enter last name")
      
      return false;
    } else if (formData.email === '') {
      setEmailValidationError(
        (error.emailValidationError = 'Email is Required'),
      );
      console.log("please enter email")
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setEmailValidationError(
        (error.emailValidationError = 'Please Enter valid EmailID'),
      );
      console.log("please enter valid Email ID")
      

      return false;
    } else if (formData.mobile === '') {
      setMobileValidationError(
        (error.mobileValidationError = 'Mobile Number is Required'),
      );
      console.log("please enter mobile number")
      return false;
     } 
    // else if (!/^\d{10}$/.test(formData.mobile)) {
    //   setMobileValidationError(
    //     (error.mobileValidationError = 'Enter 10 digit Number'),
    //   );
    //   console.log("please enter 10 digit number")
    //   return false;
    // } 
    else {
      return true;
    }
  };


  const handleRegistration = (e) => {
    // e.preventDefault();
    console.log('1');
    
     if (handleValidation()) {
      console.log('2');
      
      let url = 'https://valamwebapp.herokuapp.com/user/signup';
      console.log('3');

     let data = {
       email: formData.email,
       firstName: formData.firstName,
       lastName: formData.lastName,
       middleName: formData.middleName,
       name: `${formData.firstName}`+ '' +` ${formData.middleName}`+''+` ${formData.lastName}`,
       password: '', 
       phNum: `${'+'}${formData.mobile}`, 
     };
     setLoading(true);
     console.log('4');
     console.log(url,data);
   
    axios
       .post(url, data)
       .then((response) => {
   if (response && response.status === 200) {
    console.log("response of signup api",response)
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
           setLoading(false);
          //  addToast('Registered Successfully', { appearance: 'success' });
           toast.success('Registered Successfully');
           navigate('/userHome');
         
          
     } else {
      setLoading(false);
      toast.error('Something went wrong')
      // addToast('Something went wrong', { appearance: 'error' });
      // refRBSheet.current.close();
    }
   }) .catch((error) => {
    if (error.response.status === 500) {
      setLoading(false);
      toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong')
     
          
    }
    else {
      setLoading(false);
      toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong')
      
    }
   });
    }
   };

  return (
    <div className='signUpScreen'>
      <Header/>
        <div className='leftContainerSignupImg'>
      <img src={carImg} alt="Car-Img"  className='leftimg'/>
    </div>
<div className='rightContainer'>
<form onSubmit={handleSubmit} className='form'>
    <h2 className='head'>SignUp</h2>
    <input type="text" className='input' name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required />
   
    <input type="text" className='input' name="middleName" value={formData.middleName} onChange={handleInputChange} placeholder="Middle Name" required/>
    <input type="text" className='input' name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required />
     <input type="email" className='input' name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
   
     <PhoneInput
     type="mobile"
             name="mobile"
             country={'us'}
             value={formData.mobile}
             className='mobile1'
             disabled={true}
      //  onChange={handleInputChange}
      onChange={(value) => handleInputChange({ target: { name: 'mobile', value } })}
          inputExtraProps={{
            name: 'mobile',
          }}
          inputStyle={{
            width: '84%',
            padding: '10px',
            margin: '10px 0',
           marginLeft:'30px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
      
      
      
       />
       <div className='check'>
       <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} required />
       By signing above, I agree with the <a href="https://www.valamride.com/terms-and-conditions/">terms and conditions</a> 
       </div>
       
    
    <div className='foot1'>
    <button type="submit" className={`SubmitButton ${isClicked ? 'clicked' : ''}`} >Sign Up</button>
    <button type="button" className='LoginButton'>Login </button>

    </div>

   

  </form>
</div>
    
    </div>
  );
}

export default Signup;
