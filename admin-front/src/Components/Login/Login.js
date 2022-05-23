import { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { ToastContainer, toast } from "react-toastify";
import { BaseURLAdmin } from "../../Config/Constants";
import "react-toastify/dist/ReactToastify.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPass: false,
      move: false,
    };
  }

  togglePass=()=>{
    this.setState({
      showPass:!this.state.showPass
    })
  }

  emailSave = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  passwordSave = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  dangerNotify = (data) => {
    toast.error(data, {
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

  successNotify = () => {
    toast.success("Login Succesfully!", {
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

  submit = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(data);
    let url = `${BaseURLAdmin}/login`;
    axios
      .post(url, qs.stringify(data), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((data) => {
        console.log(data);
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
  };

  render() {
    if (this.state.move) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <div class="container ">
          {/* <!-- Outer Row --> */}
          <div class="row justify-content-center mt-5">
            <div class="col-xl-10 col-lg-12 col-md-9 mt-5">
              <div class="card o-hidden border-0 rounded shadow-lg my-5 ">
                <div class="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div class="row ">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image "></div>
                    <div class="col-lg-6 p-5">
                      <div class="p-5">
                        <div class="text-center">
                          <h1 class="h4 text-gray-900 mb-4">Admin Login</h1>
                        </div>
                        <form class="user" onSubmit={this.submit}>
                          <div class="form-group">
                            <input
                              type="email"
                              value={this.state.email}
                              onChange={this.emailSave}
                              class="form-control form-control-user "
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <input
                              style={{"display":"inline"}}
                              type={this.state.showPass ? "text" : "password"}
                              value={this.state.password}
                              onChange={this.passwordSave}
                              class="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                              required
                            />
                            <i class={this.state.showPass ? "fas fa-eye-slash" : "fas fa-eye"} onClick={this.togglePass} style={{"display":"inline", "position":"relative","float":"left","left":"233px", "bottom":"34px" }}></i>
                          </div>
                          <div class="form-group">
                            <div class="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                          <hr />
                        </form>
                        <hr />
                        <div class="text-center">
                          <a class="small" href="forgot-password.html">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  }
}
