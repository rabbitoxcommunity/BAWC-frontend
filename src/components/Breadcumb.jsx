import { Link } from "react-router-dom";
import React from "react";

export default function Breadcumb({
  fullWidth = false,
  showCollection = true,
  breadcrumbs
}) {


  return (
    <>
      <section className="tf-page-title">
        <div className={fullWidth ? "container-full" : "container"}>
          <div className="box-title text-center">
            <h4 className="title">{breadcrumbs?.title}</h4>
            <div className="breadcrumb-list">
              {
                breadcrumbs?.links?.map((ele, i) => {
                  return (
                    <>
                      <Link className="breadcrumb-item" to={`${ele?.link}`}>
                        {ele?.title}
                      </Link>
                      <div className="breadcrumb-item dot">
                        <span />
                      </div>
                    </>
                  )
                })
              }
            </div>
            {/* <p className="desc text-md text-main">
              Discover our carefully curated women's collection, where timeless
              elegance meets modern style.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
