// Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css';
import profileImage from '../../assets/images/avatar.png'; // replace with your image path
import Header from '../../Header';
import {BASE_URL} from '../../config/env/config';
import { OTP, USER_UPDATE , GET_PROFILE} from '../../config/apis/endpoint';
import axios from 'axios';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import OTPModal from './OTPModal'; 

const Profile = () => {
   const [isEditing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
   const [middleName, setMiddleName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [verifyOTP, setVerifyOTP] =  useState(false);
   const [mobileValidationError, setMobileValidationError] = useState('');
   const [showOtpModal, setShowOtpModal] = useState(false);
   const [validationErrors, setValidationErrors] = useState({
    mobileValidationError: '',
    firstNameValidationError: '',
    lastNameValidationError: '',
    emailValidationError: '',
  });

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

  const [usereditdetails, setUserEditDetails] = useState({
    
    user_firstName: '',
    user_lastName: '',
    user_middleName: '',
    user_phoneNum: '',
    user_email: '',
    user_fullName: '',
    });

  const handleEditClick = () => {
    setEditing(true);
  };
 

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = () => {
    
    console.log(usereditdetails)
    // Implement save logic here
    // setEditing(false);
    onSave();
  };

  const onSave = () => {
    // console.log("changing mobile number block",userDetails.user_phoneNum,usereditdetails.user_phoneNum  );
    if (
      userDetails.user_phoneNum !== usereditdetails.user_phoneNum && verifyOTP === false
      ) {
        console.log("changing mobile number");
      handleServiceProcessChangeNumber();
    } else {
      hitServiceForUpdateProfile();
    }
  };
  const handleServiceProcessChangeNumber = () => {
    console.log("handleservice");
    handleSendOtp();
  }
 
  const handleValidation = () => {
    const error = {
      mobileValidationError: '',
    };
    console.log(usereditdetails.user_phoneNum);
    if (usereditdetails.user_phoneNum === '') {
      console.log("handlevalidatn2");
      setMobileValidationError(
        (error.mobileValidationError = 'Mobile Number is Required'),
      );
      return false;
    }
    //  else if (!/^[0-9]{10,13}$/.test(usereditdetails.user_phoneNum)) {
    //   console.log("handlevalidatn3");
    //   setMobileValidationError(
    //     (error.mobileValidationError = 'Enter 10 digit Number'),
    //   );
    //   return false;
    // } 
    else {
      return true;
    }
  };

  const handleValidate = () => {
   
    const error = {
      mobileValidationError: '',
      firstNameValidationError: '',
      lastNameValidationError: '',
      emailValidationError: '',
    };
    if (
      usereditdetails.user_firstName === '' ||
      usereditdetails.user_lastName === '' ||
      usereditdetails.user_email === '' ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usereditdetails.user_email)
    ) {
      if (usereditdetails.user_firstName === '') {
        error.firstNameValidationError = 'First Name is Required';
      }
      if (usereditdetails.user_lastName === '') {
        error.lastNameValidationError = 'Last Name is Required';
      }
      if (usereditdetails.user_email === '') {
        error.emailValidationError = 'Email is Required';
      }
      if (
        usereditdetails.user_email !== '' &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usereditdetails.user_email)
      ) {
        error.emailValidationError = 'Please Enter valid Email ID';
      }
      setValidationErrors(error);
      return false;
    } else {
      return true;
    }
  };

  const hitServiceForUpdateProfile = () => {
    if (handleValidate()) {
      let date = new Date();
          let url = BASE_URL + USER_UPDATE;
          let data = {
            // eslint-disable-next-line radix
            id: parseInt(userDetails.user_id),
            modifiedDate: date.toISOString().slice(0, 10),
            _major: true,
            email: usereditdetails.user_email,
            name: `${usereditdetails.user_firstName} ${usereditdetails.user_middleName} ${usereditdetails.user_lastName}`,
            phNum: usereditdetails.user_phoneNum,
            firstName: usereditdetails.user_firstName,
            lastName: usereditdetails.user_lastName,
            middleName: usereditdetails.user_middleName,
            // profilePic: profilePic,
          };
          console.log(url, data, userDetails.user_token);

          axios
            .put(url, data, {
              headers: {
                token: userDetails.user_token,
              },
            })
            .then((response) => {
              if (response && response.status === 200) {
                console.log('user update api response:', response);
                toast.success('Profile Updated successfully');
                getUserProfile();
              }
            })
            .catch((error) => {
              if (error.response.status === 500) {
               console.log('something went wrong');
              }
            });

    }
  }
  
  const getUserProfile = () => {
    if (userDetails.user_id) {
      // eslint-disable-next-line radix
      let url = BASE_URL + GET_PROFILE + parseInt(userDetails.user_id);
      axios
        .get(url, {
          headers: {
            authorization: userDetails.user_token,
          },
        })
        .then((response) => {
          const data = response && response.data;
          
          
          setUserDetails({
            user_firstName: data?.firstName,
            user_lastName:data?.lastName,
            user_middleName: data?.middleName,
            user_phoneNum:data?.phNum,
            user_email: data?.email
            });
            console.log(userDetails);
            setEditing(false);
        })

      }

  }
  

  const handleSendOtp = () => {
    
    if (handleValidation()) {
     
      let url = BASE_URL + OTP;

      let data = {
        mobileNumber: `${'+'}${usereditdetails.user_phoneNum}`,
      };
      console.log(data)
      
      axios
        .post(url, data)
        .then((response) => {
          console.log('send otp api response', response);
          if (response && response?.status === 200) {
            setShowOtpModal(true);
            console.log(showOtpModal);
            console.log("otp modal is displaying")
			      toast.success('OTP is sent successfully');
            
          } else {
           
			toast.error('Something went wrong')
            
          }
        })
        .catch((error) => {
          console.log('send otp api error', error.response);
          if (error?.response?.status === 500) {
           
			toast.error(error.response?.data?.error
        ? error.response?.data?.error
        : 'Something went wrong')
            
          } else {
           
            toast.error(error.response?.data?.error
              ? error.response?.data?.error
              : 'Something went wrong')
          }
        });
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

        setUserEditDetails({
          user_firstName: userData.user_firstName || '',
          user_lastName: userData.user_lastName || '',
          user_middleName: userData.user_middleName || '',
          user_phoneNum: userData.user_phoneNum || '',
          user_email: userData.user_email || '',
          user_fullName: userData.user_fullName || '',
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
    <div>
      <Header/>
     

    {/* <div className={`profile-container ${isEditing ? 'editing' : ''}`} > */}
    <div className={`profile-container ${isEditing ? 'editing' : ''}`} >
      <div className="profile-box">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-imagedp" />
        </div>
        {!isEditing && (
          <div className="profile-details">
            <h2>{`${userDetails.user_firstName} ${userDetails.user_middleName  ? userDetails.user_middleName + ' ' : ''}${userDetails.user_lastName}`}</h2>
            <p className="email">Email: {userDetails.user_email}</p>
            <p className="phone">Phone: {userDetails.user_phoneNum}</p>
          </div>
        )}
        <div className={`editable-fields ${isEditing ? 'editing' : ''}`}>
          <div className="profile-field">
            <label>First Name:</label>
            <input type="text" value={usereditdetails.user_firstName} onChange={(e) => setUserEditDetails({...usereditdetails,user_firstName: e.target.value}) }/>
             
          </div>
          <div className="profile-field">
            <label>Last Name:</label>
            <input type="text" value={usereditdetails.user_lastName} onChange={(e) => setUserEditDetails({...usereditdetails,user_lastName: e.target.value}) } />
          </div>
          <div className="profile-field">
            <label>Middle Name:</label>
            <input type="text" value={usereditdetails.user_middleName} onChange={(e) => setUserEditDetails({...usereditdetails,user_middleName: e.target.value}) } />
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <input type="text" value={usereditdetails.user_email} onChange={(e) => setUserEditDetails({...usereditdetails,user_email: e.target.value}) } />
          </div>
          <div className="profile-field">
            <label>Phone:</label>
            <input type="text" value={usereditdetails.user_phoneNum} onChange={(e) => setUserEditDetails({...usereditdetails,user_phoneNum: e.target.value}) } />
          </div>
        </div>
        <div className="buttons">
          {isEditing ? (
            <>
              <button className="save-button" onClick={handleSaveClick}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
    <OTPModal
        show={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        onVerifyOTP={(otp) => {
          // Implement OTP verification logic here
          console.log('Verifying OTP:', otp);
          // You may need to call the API to verify the OTP
        }}
        mobileNumber={usereditdetails.user_phoneNum}
      />
    </div>
  );
};

export default Profile;
