import React from "react";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="d-flex align-items-center">
                <div>
                  <i className="las la-paper-plane me-3"></i>
                </div>
                <div>
                  <h3 className="mb-0">Subscribe to our Newsletter</h3>
                  <p>Subscribe and get notification about discounts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <form className="newsletter" id="newsLatterSubmitForm" action="/" method="POST">
                <input type="email" placeholder="Enter your email" name="email" required />
                <button type="submit" className="button style1 btn-search">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <a href="#" id="scrolltotop">
        <i className="ti-arrow-up"></i>
      </a>

      {/* Footer Section */}
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="footer-logo">
                <a href="#">
                  <img className="lazy" data-src="/" alt="Logo" />
                </a>
              </div>
              <div className="footer-text">
                <h5 className="text-grey mb-0">Got a Question? Call us :</h5>
                <h4>12345</h4>
              </div>
              <div className="footer-text">
                <h6 className="text-grey mb-0">Contact Info</h6>
                <p className="mb-1">
                  <i className="las la-envelope"></i> &nbsp; <span>admin@gmail.com</span>
                </p>
                <p className="mb-1">
                  <i className="las la-map-marker"></i> &nbsp; <span>Chittagong, Bangladesh</span>
                </p>
              </div>
              <ul className="footer-social mt-3 p-0">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <i className="ti-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-widget style1">
                    <h3>Quick Shop</h3>
                    <ul className="footer-menu p-0">
                      <li><a href="#">New Arrivals</a></li>
                      <li><a href="#">Best Seller</a></li>
                      <li><a href="#">Trending</a></li>
                      <li><a href="#">Featured</a></li>
                      <li><a href="#">Special Offer</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="footer-widget style1">
                    <h3>Help Center</h3>
                    <ul className="footer-menu p-0">
                      <li><a href="#">24/7 Customer Service</a></li>
                      <li><a href="#">Money Back Guarantee</a></li>
                      <li><a href="#">Return & Exchange</a></li>
                      <li><a href="#">Shipping & Delivery</a></li>
                      <li><a href="#">Secure Shopping</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="footer-widget style1">
                    <h3>Others</h3>
                    <ul className="footer-menu p-0">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Services</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="mt-3 mb-3">
            <ul className="footer-tags p-0">
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Shoes</a></li>
            </ul>
          </div>

          <div className="row footer-bottom mt-0">
            <div className="col-md-6">
              <p>&copy; 2025 <a href="#">Ecommerce</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="footer-payment-options">
                <img className="lazy" data-src="" width="342px" height="30px" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
