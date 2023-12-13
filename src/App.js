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
import Logout from './MainHome/SidebarMenu/Logout'


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
          <Route path="/logout" element={<Logout />} />
          <Route path="/valam/home" element={<Home />} />
          <Route path="/login" element={<Createaccount />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/booked" element={<RideBook/>} />
          {/* <Route path="/userHome" element={<UserHomePage />} /> */}
          
          <Route path="/feedback" element={<FeedbackPage/>} />
      <Route path="/payment" element={<PaymentPage/>} />
      <Route path="/driver" element={<DriverDetails/>} />
      <Route path="/search" element={<Searching />} />
      <Route path="/nodriver" element={<NoDriver />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/userHome" element={<NewDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
};

export default App;
