// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeHeader from './MainHome/HomeHeader';
import Home from './MainHome/MenuItems/Home';
import Createaccount from './MainHome/Auth/Createaccount';
import OTP from './MainHome/Auth/OTP';
import Signup from './MainHome/Auth/Signup1';
import UserHomePage from './MainHome/DashboardScreens/Dashboard';
import DriverDetails from './MainHome/DashboardScreens/DriverDetails'
import PaymentPage from './MainHome/DashboardScreens/PaymentPage';
import FeedbackPage from './MainHome/DashboardScreens/FeedbackPage';
import Searching from './MainHome/DashboardScreens/Searching';
import NoDriver from './MainHome/DashboardScreens/NoDriver';
import NewDashboard from './MainHome/DashboardScreens/NewDashboard';
import Profile from './MainHome/SidebarMenu/Profile';
import Map from './MainHome/DashboardScreens/Map';
import RideBook from './MainHome/DashboardScreens/RideBooked';
import Logout from './MainHome/SidebarMenu/Logout';
import YourTrips from './MainHome/SidebarMenu/YourTrips';
import Trips from './MainHome/SidebarMenu/Trips';
import PrivacyPolicy from './MainHome/SidebarMenu/privacyPolicy';
import About from './MainHome/SidebarMenu/About';
import Blog from './MainHome/SidebarMenu/Blog';
import Career from './MainHome/SidebarMenu/Career';
import TermsandConditions from './MainHome/SidebarMenu/TermsandConditions';
import ContactUs from './MainHome/SidebarMenu/contact';
import ServiceSection from './MainHome/SidebarMenu/servicesection';
import AboutUs from './MainHome/DashboardScreens/UserAbout';
import Help from './MainHome/DashboardScreens/Help';



// const Home = () => <div>Home Page</div>;
// ... (other components remain the same)

const App = () => {
  return (
    <>
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
        <Route path="/Home" element={<HomeHeader />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Career />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/valam/home" element={<Home />} />
          <Route path="/login" element={<Createaccount />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/booked" element={<RideBook/>} />
          <Route path="/terms" element={<TermsandConditions/>} />
          {/* <Route path="/userHome" element={<UserHomePage />} /> */}
          
          <Route path="/feedback" element={<FeedbackPage/>} />
      <Route path="/payment" element={<PaymentPage/>} />
      <Route path="/driver" element={<DriverDetails/>} />
      <Route path="/search" element={<Searching />} />
      <Route path="/nodriver" element={<NoDriver />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/userHome" element={<NewDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/YourTrips" element={<YourTrips/>} />
      <Route path="/Trips" element={<Trips/>} />
      <Route path="/map" element={<Map />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
};

export default App;

