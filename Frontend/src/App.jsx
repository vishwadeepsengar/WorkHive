import React from 'react';

import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import SignIn from './components/Profile/SignIn.jsx';
import SignUp from './components/Profile/SignUp.jsx';
import Routing from './components/Routing.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from './components/Dashboard/UserDashboard.jsx';
function App() {
  return (
    <>
    {/* <Navbar />
    <Hero />
    <FeaturesSection/> */}
    {/* <SignIn /> */}
    {/* <BrowserRouter>
    <Routing/>
    </BrowserRouter> */}
    <UserDashboard/>
     
    </>
  );
}

export default App;

