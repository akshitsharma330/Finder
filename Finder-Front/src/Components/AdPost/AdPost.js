import { Navigate } from "react-router-dom";
import {isLoggedin} from "../../Common/constants";
export default function AdPost() {

  if(isLoggedin===false){
    <Navigate to="login"/>
  }
  return (
    <>
      <section className="ad-post bg-gray py-5">
        <div className="container">
          <form action="#" >
          
            <fieldset className="border rounded shadow p-4 mb-5 bg-white">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Post Your ad</h3>
                </div>
                
                <div className="col-lg-6">
                  <h6 className="font-weight-bold pt-4 pb-1">Title Of Ad:</h6>
                  <input
                    type="text"
                    className=" border w-100 rounded form-control   text-capitalize"
                    placeholder="Ad title go There"
                  />
                  <h6 className="font-weight-bold pt-4 pb-1">Ad Type:</h6>
                  <div className="row px-3">
                    <div className="col-lg-4 mr-lg-4 my-2 rounded bg-white">
                      <input
                        type="radio"
                        name="itemName"
                        value="new"
                        id="new"
                      />
                      <label for="new" className="py-2 px-2">
                        New
                      </label>
                    </div>
                    <div className="col-lg-4 mr-lg-4 my-2 rounded bg-white ">
                      <input
                        type="radio"
                        name="itemName"
                        value="used"
                        id="used"
                      />
                      <label for="used" className="py-2 px-2">
                        Used
                      </label>
                    </div>
                  </div>
                  <h6 className="font-weight-bold pt-4 pb-1">Description:</h6>
                  <textarea
                    name=""
                    id=""
                    className="border p-3 w-100"
                    rows="7"
                    placeholder="Write details about your product"
                  ></textarea>
                </div>
                <div className="col-lg-6">
                  <h6 className="font-weight-bold pt-4 pb-1">
                    Select Ad Category:
                  </h6>
                  <select name="" id="inputGroupSelect" className=" p-2 w-100">
                    <option value="1">Select category</option>
                    <option value="2">Laptops</option>
                    <option value="3">iphone</option>
                    <option value="4">microsoft</option>
                    <option value="5">monitors</option>
                    <option value="6">11inch Macbook Air</option>
                    <option value="7">Study Table Combo</option>
                    <option value="8">11inch Macbook Air</option>
                    <option value="9">Study Table Combo</option>
                    <option value="10">11inch Macbook Air</option>
                  </select>
                  <div className="price">
                    <h6 className="font-weight-bold pt-4 pb-1">
                      Item Price :
                    </h6>
                    <div className="row px-3">
                      <div className="col-lg-4 mr-lg-4 rounded bg-white my-2 ">
                        <input
                          type="text"
                          name="price"
                          className="border-0 py-2 w-100 price"
                          placeholder="Price"
                          id="price"
                        />
                      </div>
                      <div className="col-lg-4 mrx-4 rounded bg-white my-2 ">
                        <input
                          type="checkbox"
                          value="Negotiable"
                          id="Negotiable"
                        />
                        <label for="Negotiable" className="py-2">
                          Negotiable
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="choose-file text-center my-4 py-4 rounded">
                    <label for="file-upload">
                      <span className="d-block font-weight-bold text-dark">
                        Drop files anywhere to upload
                      </span>
                      <span className="d-block">or</span>
                      <span className="d-block btn bg-primary text-white my-3 select-files">
                        Select files
                      </span>
                      <span className="d-block">
                        Maximum upload file size: 500 KB
                      </span>
                      <input
                        type="file"
                        className="form-control-file d-none"
                        id="file-upload"
                        name="file"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            {/* <!-- Post Your ad end --> */}

            {/* <!-- seller-information start --> */}
            <fieldset className="border p-4 my-5 seller-information bg-gray">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Seller Information</h3>
                </div>
                <div className="col-lg-6">
                  <h6 className="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                  <input
                    type="text"
                    placeholder="Contact name"
                    className="border w-100 p-2"
                  />
                  <h6 className="font-weight-bold pt-4 pb-1">Contact Number:</h6>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="border w-100 p-2"
                  />
                </div>
                <div className="col-lg-6">
                  <h6 className="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                  <input
                    type="email"
                    placeholder="name@yourmail.com"
                    className="border w-100 p-2"
                  />
                  <h6 className="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="border w-100 p-2"
                  />
                </div>
              </div>
            </fieldset>
            {/* <!-- seller-information end--> */}

            {/* <!-- ad-feature start --> */}
            <fieldset className="border bg-white p-4 my-5 ad-feature bg-gray">
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="pb-3">
                    Make Your Ad Featured
                    <span className="float-right">
                      <a
                        className="text-right font-weight-normal text-success"
                        
                      >
                        What is featured ad ?
                      </a>
                    </span>
                  </h3>
                </div>
                <div className="col-lg-6 my-3">
                  <span className="mb-3 d-block">Premium Ad Options:</span>
                  <ul>
                    <li>
                      <input type="radio" id="regular-ad" name="adfeature" />
                      <label
                        for="regular-ad"
                        className="font-weight-bold text-dark py-1"
                      >
                        Regular Ad
                      </label>
                      <span>$00.00</span>
                    </li>
                    <li>
                      <input type="radio" id="Featured-Ads" name="adfeature" />
                      <label
                        for="Featured-Ads"
                        className="font-weight-bold text-dark py-1"
                      >
                        Top Featured Ads
                      </label>
                      <span>$59.00</span>
                    </li>
                    <li>
                      <input type="radio" id="urgent-Ads" name="adfeature" />
                      <label
                        for="urgent-Ads"
                        className="font-weight-bold text-dark py-1"
                      >
                        Urgent Ads
                      </label>
                      <span>$79.00</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 my-3">
                  <span className="mb-3 d-block">
                    Please select the preferred payment method:
                  </span>
                  <ul>
                    <li>
                      <input type="radio" id="bank-transfer" name="adfeature" />
                      <label
                        for="bank-transfer"
                        className="font-weight-bold text-dark py-1"
                      >
                        Direct Bank Transfer
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="Cheque-Payment"
                        name="adfeature"
                      />
                      <label
                        for="Cheque-Payment"
                        className="font-weight-bold text-dark py-1"
                      >
                        Cheque Payment
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="Credit-Card" name="adfeature" />
                      <label
                        for="Credit-Card"
                        className="font-weight-bold text-dark py-1"
                      >
                        Credit Card
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </fieldset>
            {/* <!-- ad-feature start --> */}

            {/* <!-- submit button --> */}
            <div className="checkbox d-inline-flex">
              <input type="checkbox" id="terms-&-condition" className="mt-1" />
              <label for="terms-&-condition" className="ml-2">
                By click you must agree with our
                <span>
                  {" "}
                  <a className="text-successterms-condition.html">
                    Terms & Condition and Posting Rules.
                  </a>
                </span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary d-block mt-2">
              Post Your Ad
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
