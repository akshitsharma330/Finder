import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar  from "./Components/Navbar/Navbar";
import Home  from "./Components/Home/Home";
import Footer  from "./Components/Footer/Footer";
import ContactUs  from "./Components/ContactUs/ContactUs";
import About  from "./Components/About/About";
import AdPost from "./Components/AdPost/AdPost";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserMaster from "./Components/UserMaster/UserMaster";

import AdView from "./Components/AdView/AdView";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserMaster />} >
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/AdPost" element={<AdPost/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/AdView" element={<AdView/>}/>
          </Route>

      </Routes>
      
    </BrowserRouter>
   </>
  );
}

export default App;
