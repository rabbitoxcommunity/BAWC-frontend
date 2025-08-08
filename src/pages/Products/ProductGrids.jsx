"use client";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "@/reducer/filterReducer";
import { products } from "@/data/products";
import ListProducts from "./ListProducts";
import LayoutHandler from "./LayoutHandler";
import GridProducts from "./GridProducts";
import FilterModal from "./FilterModal";

export default function ProductGrids({
  fullWidth = false,
  cardStyleClass,
  tooltipDirection,
  parentClass = "flat-spacing-24",
}) {
  const [activeLayout, setActiveLayout] = useState(4);

  return (
    <>
      <section className={parentClass}>
        <div className={fullWidth ? "container-full" : "container"}>
          <div className="tf-shop-control">
            <div className="tf-group-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filter</span>
              </a>
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <div className="btn-select">
                  <span className="text-sort-value">Sorted Option</span>
                  <span className="icon icon-arr-down" />
                </div>
                <div className="dropdown-menu">
                  {[
                    "Sort by (Default)",
                    "Price Low to High",
                    "Price High to low",
                  ].map((elm, i) => (
                    <div
                      key={i}
                      className={`select-item`}
                      data-sort-value="best-selling"
                    >
                      <span className="text-value-item">{elm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler
                setActiveLayout={setActiveLayout}
                activeLayout={activeLayout}
              />
            </ul>
          </div>
          <div className="wrapper-control-shop">
              <div
                className={`wrapper-shop tf-grid-layout tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridProducts
                  cardStyleClass={cardStyleClass}
                  tooltipDirection={tooltipDirection}
                />
                {/* Pagination */}
                <ul className="wg-pagination">
                  <li className="active">
                    <div className="pagination-item">1</div>
                  </li>
                  <li>
                    <a href="#" className="pagination-item">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pagination-item">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pagination-item">
                      <i className="icon-arr-right2" />
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </section>
      <FilterModal />
    </>
  );
}
