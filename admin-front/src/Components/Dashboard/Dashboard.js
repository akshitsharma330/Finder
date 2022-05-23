import { Component } from "react";
import {Navigate} from "react-router-dom";
import {Router} from "react-router-dom";
import axios from "axios";
import qs from "qs";
import {BaseURLAdmin} from "../../Config/Constants"
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount:"",
      postCount:"",
      isLoggedIn:false
    }

  }
  successNotify = () => {
    toast.success("Welcome Admin!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  componentDidMount() {
    //login setup
    this.state.isLoggedIn=sessionStorage.getItem("isLoggedIn");
    this.setState({isLoggedIn:sessionStorage.getItem("isLoggedIn")})
    if(this.state.isLoggedIn){
      this.successNotify();
    }
    //collecting dashboard data
    let url = `${BaseURLAdmin}/`;

    axios
      .post(url, qs.stringify(data), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((data) => {
        if(data.data.success){
          // this.successNotify();
          let token = data.data.token;
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("isLoggedIn", true);
          this.setState({
            move: true,
          });
        }
        else{
          this.dangerNotify(data.data.message);
        }
       
      })
      .catch((err) => console.log(err));


    
  }
  
  render() {
    if(!sessionStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn")==undefined || sessionStorage.getItem("isLoggedIn")==null){
      return <Navigate to="/login" />
    }
    return (
      <>
      <ToastContainer />
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
         
        </div>
          <div className="row">
          <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                                All Users</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">none</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
          </div>


      </div>
      
      </>
    );
  }
}
