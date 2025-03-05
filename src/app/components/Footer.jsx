import { getCommonFooterData } from "@/server/footer";
import React from "react";

export default async function Footer({ cartCount }) {

  const footerData = await getCommonFooterData();

  // console.log(footerData);

  return (
    <>
      {/* Newsletter Section */}
      {footerData?.newsletterSettings 	&& (
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
      )}

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
                  <img className="lazy" src={footerData.storefrontImages.footerLogoPath} alt="Logo" />
                </a>
              </div>
              <div className="footer-text">
                <h5 className="text-grey mb-0">Got a Question? Call us :</h5>
                <h4>{footerData.storeSettings.store_phone}</h4>
              </div>
              <div className="footer-text">
                <h6 className="text-grey mb-0">Contact Info</h6>
                <p className="mb-1">
                  <i className="las la-envelope"></i> &nbsp; <span>{footerData.storeSettings.store_email}</span>
                </p>
                <p className="mb-1">
                  <i className="las la-map-marker"></i> &nbsp; <span>{footerData.storeSettings.store_address_1}</span>
                </p>
              </div>
              <ul className="footer-social mt-3 p-0">
                <li>
                  <a href={footerData.settings.socialMediaLinks.facebook}>
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={footerData.settings.socialMediaLinks.instagram}>
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={footerData.settings.socialMediaLinks.twitter}>
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={footerData.settings.socialMediaLinks.youtube}>
                    <i className="ti-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-widget style1">
                    <h3>{footerData.settings.footerMenus.firstMenuTitle}</h3>
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
                    <h3>{footerData.settings.footerMenus.secondMenuTitle}</h3>
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
                    <h3>{footerData.settings.footerMenus.thirdMenuTitle}</h3>
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
          {footerData.tags.map((tag) => (
            <div key={tag.id} className="item-tags"><a href={tag.slug}>{tag.tag_name}</a></div>
          ))}
          </div>

          <div className="row footer-bottom mt-0">
            <div className="col-md-6">
              <p dangerouslySetInnerHTML={{ __html: footerData.settings.copyrightText }}></p>
            </div>
            <div className="col-md-6">
              <div className="footer-payment-options">
                <img className="lazy" src={footerData.storefrontImages.paymentMethodImage} width="342px" height="30px" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

