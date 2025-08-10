import React from "react";
import { Link } from "react-router-dom";
export default function ProductBreadcrumb({ product }) {
  return (
    <>
      <div className="breadcrumb-sec">
        <div className="container">
          <div className="breadcrumb-wrap">
            <div className="breadcrumb-list">
              <Link to={`/`} className="breadcrumb-item">
                Home
              </Link>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item"> Laptops & PC's
              </div>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current"> Apple MacBook Air M4
              </div>
            </div>
            <div className="breadcrumb-prev-next">
              <a href="#" className="breadcrumb-prev">
                <i className="icon icon-arr-left" />
              </a>
              <Link to={`/products`} className="breadcrumb-back">
                <i className="icon icon-shop" />
              </Link>
              <a href="#" className="breadcrumb-next">
                <i className="icon icon-arr-right2" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
