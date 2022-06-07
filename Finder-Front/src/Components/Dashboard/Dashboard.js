import axios from "axios";
import {useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
export default function Dashboard() {
  var [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn"));
  var [posts, setPosts] = useState(sessionStorage.getItem("posts"));
  useEffect(()=>{
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    axios.post()

  },[])
  if(!isLoggedIn || isLoggedIn == undefined || isLoggedIn == null){
    return(<Navigate to="/dashboard"/>)
  }


  

  
  return (
    <>
      <section className="dashboard section">
        {/* <!-- Container Start --> */}
        <div className="container">
          {/* <!-- Row Start --> */}
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
              <div className="sidebar">
                {/* <!-- User Widget --> */}
                <div className="widget user-dashboard-profile">
                  {/* <!-- User Image --> */}
                  <div className="profile-thumb">
                    <img
                      src="images/user/user-thumb.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  {/* <!-- User Name --> */}
                  <h5 className="text-center">{sessionStorage.getItem("uname")}</h5>
                  <p>Joined February 06, 2022</p>
                  <Link to ="/profile" href="user-profile.html" className="btn btn-main-sm">
                    Edit Profile
                  </Link>
                </div>
                {/* <!-- Dashboard Links --> */}
                <div className="widget user-dashboard-menu">
                  <ul>
                    <li className="active">
                      <a href="dashboard-my-ads.html">
                        <i className="fa fa-user"></i> My Ads
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-favourite-ads.html">
                        <i className="fa fa-bookmark-o"></i> Favourite Ads{" "}
                        <span>5</span>
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-archived-ads.html">
                        <i className="fa fa-file-archive-o"></i>Archived Ads{" "}
                        <span>12</span>
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-pending-ads.html">
                        <i className="fa fa-bolt"></i> Pending Approval
                        <span>23</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fas fa-cog"></i> Logout
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        data-toggle="modal"
                        data-target="#deleteaccount"
                      >
                        <i className="fa fa-power-off"></i>Delete Account
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- delete-account modal --> */}
                {/* <!-- delete account popup modal start--> */}
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="deleteaccount"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body text-center">
                        <img
                          src="images/account/Account1.png"
                          className="img-fluid mb-2"
                          alt=""
                        />
                        <h6 className="py-2">
                          Are you sure you want to delete your account?
                        </h6>
                        <p>
                          Do you really want to delete these records? This
                          process cannot be undone.
                        </p>
                        <textarea
                          name="message"
                          id=""
                          cols="40"
                          rows="4"
                          className="w-100 rounded"
                        ></textarea>
                      </div>
                      <div className="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- delete account popup modal end--> */}
                {/* <!-- delete-account modal --> */}
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
              {/* <!-- Recently Favorited --> */}
              <div className="widget dashboard-container my-adslist">
                <h3 className="widget-header">My Ads</h3>
                <table className="table table-responsive product-dashboard-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th className="text-center">Category</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumb">
                        <img
                          width="80px"
                          height="auto"
                          src="images/products/products-1.jpg"
                          alt="image description"
                        />
                      </td>
                      <td className="product-details">
                        <h3 className="title">Macbook Pro 15inch</h3>
                        <span className="add-id">
                          <strong>Ad ID:</strong> ng3D5hAMHPajQrM
                        </span>
                        <span>
                          <strong>Posted on: </strong>
                          <time>Jun 27, 2017</time>{" "}
                        </span>
                        <span className="status active">
                          <strong>Status</strong>Active
                        </span>
                        <span className="location">
                          <strong>Location</strong>Dhaka,Bangladesh
                        </span>
                      </td>
                      <td className="product-category">
                        <span className="categories">Laptops</span>
                      </td>
                      <td className="action" data-title="Action">
                        <div className="">
                          <ul className="list-inline justify-content-center">
                            <li className="list-inline-item">
                              <a
                                data-toggle="tooltip"
                                data-placement="top"
                                title="view"
                                className="view"
                                href="category.html"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="edit"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                                href=""
                              >
                                <i className="fa fa-pencil"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="delete"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                                href=""
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>

              
            </div>
          </div>
          {/* <!-- Row End --> */}
        </div>
        {/* <!-- Container End --> */}
      </section>
    </>
  );
}
