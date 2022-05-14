import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import qs from "qs";
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
  let [phone, setPhone] = useState("");
  const savePhone = (e) => {
    setPhone(e.target.value);
  };
  let [state, setState] = useState("");
  const saveState = (e) => {
    setState(e.target.value);
  };

  let [city, setCity] = useState("");
  const saveCity = (e) => {
    setCity(e.target.value);
  };

  let [tc, setTc] = useState("");
  const saveTc = (e) => {
    setTc(e.target.value);
  };
  let [gender, setGender] = useState("");
  const saveGender = (e) => {
    setGender(e.target.value);
  };

  let [img, setImg] = useState("");
  const saveImg = (e) => {
    setImg(e.target.value);
  };

  function register(e) {
    e.preventDefault();
    let postData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      state: state,
      city: city,
      img: img,
    };
  }

  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 align-item-center">
              <div className="border border rounded">
                <h3 className="bg-gray p-4">Register Now</h3>
                <form action="#" onSubmit={register}>
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
                      className="form-control border p-3 w-100 my-2 roundede"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={savePhone}
                      placeholder="Phone"
                      className="form-control border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={savePassword}
                      placeholder="Password"
                      className="form-control border p-3 w-100 my-2"
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
                      />
                      <label className="form-check-label" htmlFor="gendermale">
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
                      />
                      <label className="form-check-label" htmlFor="genderfemale">
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
                      />
                      <label className="form-check-label" htmlFor="genderother">
                        Others
                      </label>
                    </div>
                    </div>

                    <div className="loggedin-forgot d-inline-flex my-3">
                      <input
                        type="checkbox"
                        value={tc}
                        id="registering"
                        className="mt-1"
                        onChange={saveTc}
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
                      onClick={register}
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
    </>
  );
}
