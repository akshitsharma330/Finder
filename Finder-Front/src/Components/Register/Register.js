import axios from 'axios';
import qs from 'qs';
export default function Register() {
  
  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 align-item-center">
              <div className="border border rounded">
                <h3 className="bg-gray p-4">Register Now</h3>
                <form action="#">
                  <fieldset className="p-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="border p-3 w-100 my-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="border p-3 w-100 my-2 roundede"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="border p-3 w-100 my-2"
                    />
                    
                    <div className="loggedin-forgot d-inline-flex my-3">
                      <input
                        type="checkbox"
                        id="registering"
                        className="mt-1"
                      />
                      <label for="registering" className="px-2">
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
                      className="d-block py-3 px-4 bg-primary text-white border-0 rounded font-weight-bold"
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
