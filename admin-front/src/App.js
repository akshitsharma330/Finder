import logo from './logo.svg';
import AdminMaster from './Components/AdminMaster/AdminMaster';
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import ListUsers from "./Components/ListUser/ListUser";
import BlockedUsers from "./Components/BlockedUsers/BlockedUsers";
import AddCategories from "./Components/AddCategories/AddCategories";
import ListCategories from "./Components/ListCategories/ListCategories";
import Page404 from "./Components/Page404/Page404";
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
        <Route path="blockedusers" element={<BlockedUsers/>}/>  
        <Route path="addcategories" element={<AddCategories/>} />    
        <Route path="listcategories" element={<ListCategories/>}/> 
   

      </Route>  
      <Route path="*" element={<Page404/>} />
    </Routes>

    </Router>
    
  );
}

export default App;
