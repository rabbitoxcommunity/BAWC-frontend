import React from "react";
import { Link } from "react-router-dom";

export default function Banner2() {
  return (
    <section className="s-banner-colection banner-cls-phonecase flat-spacing-2">
      <div className="container-full">
        <div className="banner-content hover-shine">
          <div className="box-content wow fadeInUp">
            <div className="box-title-banner">
              <p className="sub text-xl text-dark-3">
                Explore the Features That Make Our Laptops Stand Out
              </p>
              <h2 className="title display-xl-2 fw-medium text-dark-3">
                See Our Laptops <br />
                in Action
              </h2>
            </div>
            <div className="box-btn-banner">
              <Link
                to={`/shop-default`}
                className="tf-btn animate-btn fw-normal hover-icon"
              >
                Shop Collection
                <i className="icon icon-arrow1-top-left fs-12" />
              </Link>
            </div>
          </div>
          <div className="image shine-item">
            <img
              src="/img/05.jpg"
              alt="/images/banner/case.jpg"
              className="lazyload"
              width={1007}
              height={603}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
