export default function Card(props) {
  return (
    <>
      <div class="col-sm-6 col-lg-3 col-xl-2 col-md-4">
        {/* <!-- product card --> */}
        <div class="product-item bg-light">
          <div class="card">
            <div class="thumb-content">
              <div class="price">$200</div>
              <a href="single.html">
                <img
                  class="card-img-top img-fluid"
                  src="assets/images/products/products-2.jpg"
                  alt="Card image cap"
                />
              </a>
            </div>
            <div class="card-body">
              <h4 class="card-title">
                <a href="single.html">Study Table Combo</a>
              </h4>
              <ul class="list-inline product-meta">
                <li class="list-inline-item">
                  <a href="single.html">
                    <i class="fa fa-folder-open-o"></i>Furnitures
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-calendar"></i>26th December
                  </a>
                </li>
              </ul>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dods,fjksj
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
