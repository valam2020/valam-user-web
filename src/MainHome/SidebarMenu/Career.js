import React from 'react';
import './Career.css'; // Optional: add CSS for styling
import HomeHeader from '../HomeHeader';
import { useNavigate } from 'react-router-dom';

const Career = () => {
    const navigate = useNavigate();
    const goBack =()=> {
        navigate('/');
      }
    return (
        <div className="career-container">
            <HomeHeader />
            <div className="career-content1">
            <div className="career-content">
                <h1>Career Opportunities</h1>
                <p>We’re building something amazing!</p>
                <p>Our career page is under construction and will be launching soon. Stay tuned for exciting job opportunities to join our team. We can’t wait to work with talented individuals like you!</p>
                <p>If you're interested in working with us, please check back later or contact us at <a href="valamnewjersey@gmail.com">info@yourdomain.com</a>.</p>
            </div>
            </div>
        </div>
    );
};

export default Career;
