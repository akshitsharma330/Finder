import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  let [name, setName] = useState("");
  const saveName = (e) => {
    setName(e.target.value);
  };
  let [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  let [password, setPassword] = useState("");
  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  let [Cpassword, setCpassword] = useState("");
  const saveCpassword = (e) => {
    setCpassword(e.target.value);
  };
  let [number, setNumber] = useState("");
  const saveNumber = (e) => {
    setNumber(e.target.value);
  };
  let [state, setState] = useState("");
  const saveState = (e) => {
    setState(e.target.value);
  };

  let [city, setCity] = useState("");
  const saveCity = (e) => {
    setCity(e.target.value);
  };

  let [tc, setTc] = useState("false");

  let [gender, setGender] = useState("");
  const saveGender = (e) => {
    setGender(e.target.value);
  };

  let [img, setImg] = useState("");
  const saveImg = (e) => {
    setImg(e.target.value);
  };

  function validation(data) {
    if (data.name === undefined || data.name === "") {
    }
  }

  const dangerNotify = (data) => {
    toast.error(data, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const successNotify = () => {
    toast.success("Reggistered", {
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

  function register(e) {
    e.preventDefault();
    let postData = {
      name: name,
      email: email,
      password: password,
      number: number,
      state: state,
      city: city,
      img: img,
      gender: gender.target.value,
    };
    if (tc === "false") {
      dangerNotify("Must check to Terms & Conditions");
    } else {
      if (password === Cpassword) {
        console.log(postData);
        axios
          .post("http://localhost:8080/register", qs.stringify(postData), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then((data) => {
            console.log(data);
            data.data.success ? successNotify() : dangerNotify(data.data.message);
          })
          .catch((erro) => console.log(erro));
      }
      else{
        dangerNotify("Password and Confirm Password not match");
      }
    }
  }

  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 align-item-center">
              <div className="border border rounded shadow ">
                <h3 className="bg-gray p-4">Register Now</h3>
                <form onSubmit={register}>
                  <fieldset className="p-4">
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={saveEmail}
                      className="form-control border p-3 w-100 my-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={saveName}
                      className="form-control border p-3 w-100 my-2 rounded"
                    />
                    <input
                      type="number"
                      value={number}
                      onChange={saveNumber}
                      placeholder="Phone"
                      className="form-control border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={savePassword}
                      placeholder="Password"
                      className="form-control border p-3 w-100 my-2 "
                    />
                    <input
                      type="password"
                      value={Cpassword}
                      onChange={saveCpassword}
                      placeholder="Confirm Password"
                      className="form-control border p-3 w-100 my-2"
                    />
                    <input
                      type="text"
                      value={state}
                      placeholder="State"
                      onChange={saveState}
                      className="form-control border p-3 w-100 my-2"
                    />
                    <input
                      type="text"
                      value={city}
                      placeholder="City"
                      onChange={saveCity}
                      className="form-control border p-3 w-100 my-2"
                    />
                    <input
                      type="file"
                      value={img}
                      placeholder="City"
                      onChange={saveImg}
                      className="bform-control-file order p-3 w-100 my-2"
                    />
                    <div className="form-group pl-3">
                      <div className="form-check form-check-inline ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gendermale"
                          value="Male"
                          onClick={setGender}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gendermale"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="genderfemale"
                          value="Female"
                          onClick={setGender}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="genderfemale"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="genderother"
                          value="Others"
                          onClick={setGender}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="genderother"
                        >
                          Others
                        </label>
                      </div>
                    </div>

                    <div className="loggedin-forgot d-inline-flex my-3">
                      <input
                        type="checkbox"
                        value="True"
                        id="registering"
                        className="mt-1"
                        onClick={() => {
                          if (tc === "true") {
                            setTc("false");
                          } else {
                            setTc("true");
                          }
                        }}
                      />
                      <label htmlFor="registering" className="px-2">
                        By registering, you accept our{" "}
                        <a
                          className="text-primary font-weight-bold"
                          href="terms-condition.html"
                        >
                          Terms & Conditions
                        </a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="d-block py-3 px-4 bg-primary text-white form-control border-0 rounded font-weight-bold"
                    >
                      Register Now
                    </button>
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
