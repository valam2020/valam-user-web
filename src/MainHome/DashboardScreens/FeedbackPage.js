import React, { useState } from 'react';
import StarRating from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './FeedbackPage.css'; // Adjust the file path based on your project structure
import avatar from './../../assets/images/avatar.png';
import { FEEDBACK } from '../../config/apis/endpoint';
import { BASE_URL } from './../../config/env/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { commontoken,driverDetails,rideData,driverId} = location.state;
//59,63,67
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const validation = () => {
    if (rating === 0) {
      toast.error('Please give rating');
      return false;
    } else if (comment === '') {
      toast.error('Comment is Required');
      return false;
    } else {
      return true;
    }
  };

  // const handleSubmit = () => {
  //   // You can implement the logic to submit the feedback here
  //   console.log('Feedback Submitted:', { rating, comment });
  //   // Clear the form after submission
  //   setRating(0);
  //   setComment('');
  // };

  const handleSubmit = () => {
    if (validation()) {
      setLoading(true);
      const storedUserData = localStorage.getItem('userInfo');
    
        if (storedUserData) {
          const url = BASE_URL + FEEDBACK;
          const date = new Date();
          const data = {
            comment: comment,
            createdDate: date.toISOString().slice(0, 10),
             driverId: driverId,
            rating: rating,
            userId: 0,
          };
           console.log("Feedback api>>>>", data, url, commontoken)
          axios
            .post(url, data, {
              headers: {
                 common_token: commontoken,
              },
            })
            .then((response) => {
              if (response && response.status === 200) {
                setLoading(false);
                console.log('Feedback Submitted:', { rating, comment });
                toast.success('Feedback Submit Successfully');

                navigate('/userHome');
                
                setRating(0);
               setComment('');
              }
            })
            .catch((error) => {
              setLoading(false);
              
            });
        }
    ;
    }
  };

  return (
    <div className="feedbackpage">
    <div className="feedback-container">
      {/* Driver Profile Section */}
      <div className="driver-profile">
        <img src={avatar} alt="Driver Profile" className="displayimage" />
        <h5 className="driverNamee">Driver Name</h5>
      </div>

      {/* Feedback Form Section */}
      <div className="feedback-form">
        <h2 className="trip-headingg">How was your trip?</h2>
        <p>Your feedback will help improve our driving experience.</p>

        {/* Star Rating */}
        <StarRating
          rating={rating}
          starRatedColor="orange"
          changeRating={handleRatingChange}
          numberOfStars={5}
          name="rating"
          className="star-rating"
          starDimension="30px"
        starSpacing="5px"
          
        />

        {/* Additional Comments */}
        <textarea
          placeholder="Add additional comments..."
          value={comment}
          onChange={handleCommentChange}
          className="comment-box"
        />

        {/* Submit Button */}
        <button onClick={handleSubmit} className="submit-button">
          Submit Review
        </button>
      </div>
    </div>
    </div>
  );
};

export default FeedbackPage;
