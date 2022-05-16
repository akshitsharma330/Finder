import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  let [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  let [password, setPassword] = useState("");
  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  const dangerNotify =(data) =>{
    toast.error(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme : "colored"
      });
  }

  const successNotify = () => {
    toast.success("Login Succesfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme : "colored"
      });
  };

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
        (data.data.success?successNotify():(dangerNotify(data.data.message)))
      });
  };
  const test = () => {
    // console.log(data)
    successNotify();
    dangerNotify();
  };

  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border shadow">
                <h3 className="bg-gray p-4">Login Now</h3>
                <form action="">
                  <fieldset className="p-4">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="form-control border p-3 w-100 my-2"
                      value={email}
                      onChange={saveEmail}
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control border p-3 w-100 my-2"
                      value={password}
                      onChange={savePassword}
                    />

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
