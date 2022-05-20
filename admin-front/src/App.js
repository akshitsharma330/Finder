import logo from './logo.svg';
import AdminMaster from './Components/AdminMaster/AdminMaster';
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import ListUsers from "./Components/ListUser/ListUser";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import './App.css';

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route  path="/" element={<AdminMaster />}>
        <Route index element={<Dashboard/>}/>
        <Route path="listusers" element={<ListUsers/>}/>
        

      </Route>  
    </Routes>

    </Router>
    
  );
}

export default App;