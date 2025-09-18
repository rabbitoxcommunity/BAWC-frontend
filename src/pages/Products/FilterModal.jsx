// "use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import { products1 } from "@/data/products";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBrands, getCategories } from "@/redux/actionCreator";
import { updateRedux } from "@/redux/commonReducer";

export default function FilterModal() {

  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])

  const filters = useSelector((state) => state.commonReducer.filters || {});
  const selectedBrands = filters.brands || [];
  const selectedCategory = filters.category || ""

  const dispatch = useDispatch()



  const toggleBrand = (brandId) => {
    let updatedBrands = [];

    if (selectedBrands.includes(brandId)) {
      // remove if already selected
      updatedBrands = selectedBrands.filter((id) => id !== brandId);
    } else {
      // add if not selected
      updatedBrands = [...selectedBrands, brandId];
    }

    dispatch(
      updateRedux({
        key: "filters",
        value: { ...filters, brands: updatedBrands },
      })
    );
  };


  const fetchBrands = () => {
    dispatch(getBrands((res) => {
      setBrands(res);
    }));
  }

  const fetchCategories = () => {
    dispatch(getCategories((res) => {
      setCategories(res);
    }));
  }

  useEffect(() => {
    fetchCategories()
    fetchBrands()
  }, []);



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
              {
                categories?.map((ele, i) => {
                  return (
                    <li
                      key={i}
                      className={`cate-item ${selectedCategory === ele._id ? "active" : ""}`}
                    >
                      <div className="text-sm link"
                        onClick={() => {
                          dispatch(
                            updateRedux({
                              key: "filters",
                              value: { category: ele._id },
                            })
                          );
                        }}
                      >
                        <span>{ele?.name}</span>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>


          <div className="widget-facet">
            <div
              className="facet-title text-xl fw-medium"
              data-bs-target="#brand"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="brand"
            >
              <span>Brands</span>
              <span className="icon icon-arrow-up" />
            </div>
            <div id="brand" className="collapse show">
              <ul className="collapse-body filter-group-check current-scrollbar">
                {brands?.map((brand) => (
                  <li key={brand._id} className="list-item">
                   <input
                      type="checkbox"
                      className="tf-check"
                      checked={selectedBrands.includes(brand._id)}
                      onChange={() => toggleBrand(brand._id)}
                      id={`brand${brand?._id}`}
                    />
                    <label className="label cursor-pointer" for={`brand${brand?._id}`}>
                      <span>{brand.name}</span>
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
