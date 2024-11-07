
import React from 'react';
import './Blog.css'; // Import your CSS file for styling
import HomeHeader from '../HomeHeader';

import { useNavigate } from 'react-router-dom';



const BlogPostCard = ({ title, content, date, image }) => {
    return (
        <div className="blog-post-card">
            <img src={image} alt={title} className="blog-image" />
            <div className="blog-content">
                <h2 className="blog-title">{title}</h2>
                <p className="blog-summary">{content}</p>
                <small className="blog-date">{date}</small>
            </div>
        </div>
    );
};

const Blog = () => {
    const navigate = useNavigate();
    const goBack =()=> {
        navigate('/');
      }
    const posts = [
        {
            id: 1,
            title: "Revolutionizing Rides: How Valam is Shaping Affordable Transportation",
            content: "Valam is committed to making transportation affordable and accessible. Discover how we are reshaping the landscape.",
            date: "October 10, 2024",
            image: "/image1.jpeg"// Example image
        },
        {
            id: 2,
            title: "Ensuring Accessibility: Valam's Commitment to All Riders",
            content: "Learn how we ensure our services are accessible to everyone, including those with disabilities.",
            date: "October 15, 2024",
            image: "./image2.jpeg" // Example image
        },
        {
            id: 3,
            title: "Meet the Team: The Faces Behind Valam",
            content: "The success of Valam lies in the dedication of our team. In this post, we introduce you to some of our key members who work tirelessly to ensure that you have a smooth and reliable ride experience. From drivers to customer support, meet the people who make Valam special!",
            date: "October 20, 2024",
            image: "./imageteam.jpeg" // Example image
        },
        {
            id: 4,
            title: "The Future of Ride-Hailing: What to Expect from Valam",
            content: "As the ride-hailing industry evolves, Valam is at the forefront of innovation. In this post, we explore upcoming features and technologies that will transform your riding experience. From advanced app functionalities to improved safety measures, find out how Valam is leading the way into the future of transportation.",
            date: "October 25, 2024",
            image: "./image4.jpg" // Example image
        },
        {
            id: 5,
            title: "Safety First: How Valam Ensures Your Security",
            content: "Your safety is our top priority. In this blog post, we outline the measures Valam has implemented to ensure a secure ride for all passengers. From background checks for drivers to in-app safety features, discover how we are committed to providing a worry-free travel experience.",
            date: "October 30, 2024",
            image: "./image5.png" // Example image
        },
        {
            id: 6,
            title: "Community Impact: Valam’s Role in Local Economies",
            content: "Valam is more than just a ride service; we are committed to supporting local economies. In this post, we discuss how our operations create job opportunities, support local businesses, and contribute to community development. Join us in exploring the positive impact Valam is making in the neighborhoods we serve.",
            date: "September 5, 2024",
            image: "./image6.jpg" // Example image
        }
    ];

    return (
        <div className="blog-container">
             <HomeHeader/>
              {/* SVG for Curved Background */}
            {/* <div className="curved-background">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="yellow" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,176C672,213,768,235,864,240C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div> */}
            <div className="background">
             <div className="blog-container1">
            <h1 className="blog-title">Valam Blog</h1>
            <div className="blog-posts">
                {posts.map(post => (
                    <BlogPostCard 
                        key={post.id} 
                        title={post.title} 
                        content={post.content} 
                        date={post.date} 
                        image={post.image} 
                    />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;

