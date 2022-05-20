import { Component } from "react";
import {Navigate} from "react-router-dom";
import {BaseURLAdmin} from "../../Config/Constants"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount:"",
      postCount:"",
      isLoggedIn:false
    }

  }

  componentDidMount() {
    this.setState({isLoggedIn:sessionStorage.getItem("isLoggedIn")})
    console.log(this.state.isLoggedIn)
    
  }
  render() {
    if(this.state.isLoggedIn===undefined || this.state.isLoggedIn===null || this.state.isLoggedIn==='true'){
      return <Navigate to="/login" />
    }
    return (
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
         
        </div>


      </div>
    );
  }
}
