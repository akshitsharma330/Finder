export default function Card(props) {
  return (
    <>
      <div className="col-sm-6 col-lg-3 col-xl-3 col-md-4 col-2 ">
        {/* <!-- product card --> */}
        <div className="product-item bg-light shadow">
          <div className="card">
            <div className="thumb-content">
              <div className="price">$200</div>
              <a href="single.html">
                <img
                  className="card-img-top img-fluid"
                  src="assets/images/products/products-2.jpg"
                  alt="Card image cap"
                />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="single.html">Study Table Combo</a>
              </h4>
              <ul className="list-inline product-meta">
                <li className="list-inline-item">
                  <a href="single.html">
                    <i className="fa fa-folder-open-o"></i>Furnitures
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-calendar"></i>26th December
                  </a>
                </li>
              </ul>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dods,fjksj
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
