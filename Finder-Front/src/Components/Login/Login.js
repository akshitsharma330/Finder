import { Link, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";
import { isLoggedin } from "../../Common/constants";
export default function Login() {
  let [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  let [password, setPassword] = useState("");
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  let [remember, setRemember] = useState(false);
  let [showPass, setShowPass] = useState(false);
  const togglePass = () => {
    setShowPass(!showPass);
    console.log(showPass);
  };
  let [move, setMove] = useState(false);


  const dangerNotify = (data) => {
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

  const successNotify = () => {
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
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")){
      setMove(true);
      sessionStorage.setItem("isLoggedIn",true);
      sessionStorage.setItem("token",localStorage.getItem("token"));
    }
    

  },[])

  useEffect(()=>{

  })

  const Login = (e) => {
    e.preventDefault();
    // console.log(email, password);

    let postData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/login", qs.stringify(postData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((data) => {
        console.log(data);
        if (data.data.success) {
          let token= data.data.token;
          successNotify();
          sessionStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("token", token);
          setMove(true)
          if(remember){
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("token", token);
          }
          
        }else{
          dangerNotify(data.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if(move || sessionStorage.getItem("isLoggedIn")){
        return(<Navigate to="/"/>)
  }

  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border shadow">
                <h3 className="bg-gray p-4">Login Now</h3>
                <form action="" onSubmit={Login}>
                  <fieldset className="p-4">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="form-control border p-3 w-100 my-2"
                      value={email}
                      onChange={saveEmail}
                      
                    />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Enter Password"
                      className="form-control border p-3 w-100 my-2"
                      value={password}
                      onChange={savePassword}
                      onDoubleClick={togglePass}
                    />
                    <i
                      className={
                        showPass ? "fas fa-eye-slash" : "fas fa-eye"
                      }
                      onClick={()=>{
                        setShowPass(!showPass);
                        console.log(showPass);
                      }}
                      style={{
                        "position": "relative",
                        float: "right",
                        top: "-40px",
                        right: "18px",
                        
                      }}
                    ></i>

                    <button
                      type="submit"
                      className="form-control d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3"
                      onClick={Login}
                    >
                      Log in
                    </button>
                    <a className="mt-3 d-block  text-primary" href="#">
                      Forget Password?
                    </a>
                    <Link
                      className="mt-3 d-inline-block text-primary"
                      to="/register"
                    >
                      Register Now
                    </Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
