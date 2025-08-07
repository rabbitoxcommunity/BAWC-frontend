import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
// import LanguageSelect from "../common/LanguageSelect";
// import CurrencySelect from "../common/CurrencySelect";
// import WishlistLength from "../common/WishlistLength";

export default function Header() {
  return (
    <header id="header" className="header-default">
      <div className="header-top">
        <div className="container">
          <div className="row wrapper-header align-items-center">
            <div className="col-md-4 col-3 d-xl-none">
              <a
                href="#mobileMenu"
                className="mobile-menu"
                data-bs-toggle="offcanvas"
                aria-controls="mobileMenu"
              >
                <i className="icon icon-categories1" />
              </a>
            </div>
            <div className="col-xl-5 d-none d-xl-block">
      <ul className="tf-social-icon style-large">
            <li>
              <a
                href="https://www.facebook.com/"
                className="social-item social-facebook"
              >
                <i className="icon icon-fb" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="social-item social-instagram"
              >
                <i className="icon icon-instagram" />
              </a>
            </li>
            <li>
              <a href="https://x.com/" className="social-item social-x">
                <i className="icon icon-x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.snapchat.com/"
                className="social-item social-snapchat"
              >
                <i className="icon icon-snapchat" />
              </a>
            </li>
          </ul>
            </div>
            <div className="col-xl-2 col-md-4 col-6 text-center">
              <Link to={`/home-electronic`} className="logo-header">
                <img
                  alt="logo"
                  className="logo"
                  src="/img/logo.avif"
                  width={148}
                  height={44}
                />
              </Link>
            </div>
            <div className="col-xl-5 col-md-4 col-3 wrapper-header-bottom">
              <div className="inner-right d-flex justify-content-end align-items-center">
                <Link to={`/contact-us`} className="link fw-medium text-md">
                  Need Help?
                </Link>
                <a href="tel:123456789" className="call-us text-md fw-medium">
                  Call Us Now <i className="icon icon-arrow1-top-left" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-xl-block">
        <div className="container">
          <nav className="box-navigation text-center">
            <ul className="box-nav-menu">
              <Nav />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
