import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import About from "./Components/About/About";
import AdPost from "./Components/AdPost/AdPost";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserMaster from "./Components/UserMaster/UserMaster";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";


import AdView from "./Components/AdView/AdView";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserMaster />}>
            <Route index element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/adPost" element={<AdPost />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adView" element={<AdView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
