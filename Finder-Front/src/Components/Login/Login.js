import {Link} from 'react-router-dom';
export default function Login() {
  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border">
                <h3 className="bg-gray p-4">Login Now</h3>
                <form action="#">
                  <fieldset className="p-4">
                    <input
                      type="text"
                      placeholder="Username"
                      className="border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border p-3 w-100 my-2"
                    />
                    <div className="loggedin-forgot">
                      <input type="checkbox" id="keep-me-logged-in" />
                      <label for="keep-me-logged-in" className="pt-3 pb-2">
                        Keep me logged in
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3"
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
    </>
  );
}
