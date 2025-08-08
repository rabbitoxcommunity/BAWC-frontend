// "use client";
import { brands, sizes } from "@/data/filterOptions";
import React from "react";
import Slider from "rc-slider";
import { products1 } from "@/data/products";
import { Link } from "react-router-dom";

export default function FilterModal() {

  const allProps = {}
  return (
    <div
      className="offcanvas offcanvas-start canvas-sidebar canvas-filter"
      id="filterShop"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <span className="title">Filter</span>
          <button
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body">
          <div className="widget-facet">
            <ul className="list-categories current-scrollbar">
              <li className="cate-item">
                <Link className="text-sm link" to={`/shop-default`}>
                  <span>Men’s top</span> <span className="count">(20)</span>
                </Link>
              </li>
              <li className="cate-item">
                <Link className="text-sm link" to={`/shop-default`}>
                  <span>Men</span> <span className="count">(20)</span>
                </Link>
              </li>
              <li className="cate-item">
                <Link className="text-sm link" to={`/shop-default`}>
                  <span>Women</span> <span className="count">(20)</span>
                </Link>
              </li>
              <li className="cate-item">
                <Link className="text-sm link" to={`/shop-default`}>
                  <span>Kid</span> <span className="count">(20)</span>
                </Link>
              </li>
              <li className="cate-item">
                <Link className="text-sm link" to={`/shop-default`}>
                  <span>T-shirt</span> <span className="count">(20)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="widget-facet">
            <div
              className="facet-title text-xl fw-medium"
              data-bs-target="#price"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="price"
            >
              <span>Price</span>
              <span className="icon icon-arrow-up" />
            </div>
            <div id="price" className="collapse show">
              <div className="collapse-body widget-price filter-price">
                <div
                  className="price-val-range"
                  id="price-value-range"
                  data-min={0}
                  data-max={500}
                >
                  <Slider
                    value={allProps?.price}
                    onChange={(price) => allProps?.setPrice(price)}
                    range
                    min={0}
                    max={500}
                  />
                </div>
                <div className="box-value-price">
                  <span className="text-sm">Price:</span>
                  <div className="price-box">
                    <div
                      className="price-val"
                      id="price-min-value"
                      data-currency="$"
                    >
                      {allProps?.price?.[0]}
                    </div>
                    <span>-</span>
                    <div
                      className="price-val"
                      id="price-max-value"
                      data-currency="$"
                    >
                      {allProps?.price?.[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="widget-facet">
            <div
              className="facet-title text-xl fw-medium"
              data-bs-target="#brand"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="brand"
            >
              <span>Brand</span>
              <span className="icon icon-arrow-up" />
            </div>
            <div id="brand" className="collapse show">
              <ul className="collapse-body filter-group-check current-scrollbar">
                {brands?.map((brand) => (
                  <li
                    key={brand.name}
                    className="list-item"
                    onClick={() => allProps?.setBrands(brand?.name)}
                  >
                    <input
                      type="radio"
                      className="tf-check"
                      readOnly
                      checked={allProps?.brands?.includes(brand?.name)}
                    />
                    <label className="label">
                      <span>{brand?.name}</span>&nbsp;
                      <span className="count">({brand?.count})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
