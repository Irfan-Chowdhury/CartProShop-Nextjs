import React from "react";
import Link from "next/link";
import { getCommonHeaderData } from "@/server/setting";

export default async function Header({ cartCount }) {

  const headerData = await getCommonHeaderData();


  return (
    <header>
      {/* Header Top */}
      <div id="header-top" className="header-top">
        <div className="container">
          <div className="d-lg-flex d-xl-flex justify-content-between">
            <div className="header-top-left d-none d-lg-flex d-xl-flex">
              <ul className="header-top-social menu">
                <li><a href={headerData.headerFacebookLink}><i className="ti-facebook"></i></a></li>
                <li><a href={headerData.headerTwitterLink}><i className="ti-instagram"></i></a></li>
                <li><a href={headerData.headerInstagramLink}><i className="ti-twitter"></i></a></li>
                <li><a href={headerData.headerYoutubeLink}><i className="ti-youtube"></i></a></li>
              </ul>
            </div>
            <div className="header-top-middle d-none d-lg-flex d-xl-flex">
              <span className="announcement">{headerData.welcomeTitle}</span>
            </div>
            <div className="header-top-right"></div>
          </div>
        </div>
      </div>

      {/* Header Middle */}
      <div id="header-middle" className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-7">
              <div className="mobile-menu-icon d-lg-none"><i className="ti-menu"></i></div>
              <div className="logo">
                <Link href="/">
                  <img src={headerData.headerLogoPath} alt="Brand logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex d-xl-flex middle-column justify-content-center">
              <form id="KeyWordHit" className="header-search" method="POST">
                <input type="text" id="searchText" placeholder="Search Products" name="search" />
                <button type="submit" className="btn btn-search"><i className="ti-search"></i></button>
                <div className="row" id="search_field">
                  <ul id="result"></ul>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="offset-menu-wrapper p-0">
                <li className="d-lg-none">
                  <a><i className="las la-search" data-bs-toggle="collapse" href="#mobile-search"></i></a>
                </li>
                <li>
                  <Link href="/"><i className="las la-user-lock" data-bs-toggle="tooltip" title="Login"></i></Link>
                </li>
                <li className="cart__menu d-none d-lg-inline-block d-xl-inline-block">
                  <Link href="#"><i className="lar la-heart" data-bs-toggle="tooltip" title="Wishlist"></i></Link>
                  <span className="badge badge-light">0</span>
                </li>
                <li className="cart__menu">
                  <i className="las la-shopping-cart" data-bs-toggle="tooltip" title="Cart"></i>
                  <span className="badge badge-light cart_count">{cartCount}</span>
                  <span className="total">$ 00.0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-4 d-none d-lg-flex d-xl-flex">
              <div className="category-list">
                <ul className="pl-0">
                  <li className="has-dropdown">
                    <a className="category-button" href="#">
                      <i className="ti-menu"></i> Shop By Category
                    </a>
                    <ul id="cat_menu" className="dropdown p-0">
                        {headerData.categoryMenuList.map(category => (
                            <li key={category.id} className={category.subCategoryMenus.length > 0 ? "has-dropdown" : ""}>
                              <a href="/"><i className={category.icon}></i>{category.categoryName} ({category.totalProducts})</a>
                              {category.subCategoryMenus?.length > 0 && (
                                <ul className="dropdown">
                                    {category.subCategoryMenus.map((subCategory) => (
                                        <li key={subCategory.id}>
                                            <a href="/">
                                                <i className={subCategory.icon}></i> {subCategory.categoryName} ({subCategory.totalProducts})
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                              )}
                            </li>
                        ))}
                        
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="main-header-inner">
                <div id="main-menu" className="main-menu">
                  <nav id="mobile-nav">
                    <ul className="nav nav-tabs" id="menu_tab">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#mobile_menu">Menu</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#mobile_cat">Categories</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="menu_tab_content">
                      <div className="tab-pane fade show active" id="mobile_menu">
                        <ul className="pl-0">
                          <li><Link href="/">Home</Link></li>
                          <li><Link href="/">All Categories</Link></li>
                          <li><Link href="/faq">FAQ</Link></li>

                          {headerData?.storefrontShopPageEnabled === "1"	&& (
                            <li><Link href="/">Shops</Link></li>
                          )}

                          {headerData?.storefrontBrandPageEnabled === "1"	&& (
                            <li><Link href="/">Brands</Link></li>
                          )}


                          <li className="deal-menu-item">
                            <Link href="/"><i className="las la-tag d-none d-md-inline-block"></i>Daily Deals</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="mobile_cat"></div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="header-mobile collapse" id="mobile-search">
        <div className="container">
          <div id="header-search" className="d-lg-none"></div>
        </div>
      </div>
    </header>
  );
};
