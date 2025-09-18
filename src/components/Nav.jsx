"use client";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  blogMenuItems,
  demoItems,
  otherPages,
  productMenuItems,
  shopPages,
} from "@/data/menu";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actionCreator";
import { updateRedux } from "@/redux/commonReducer";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const location  = useLocation()

  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  const [categories, setCategories] = useState([])

  const dispatch = useDispatch()
  const filters = useSelector((state) => state.commonReducer.filters || {});
  const selectedCategory = filters?.category || ""

  const fetchCategories = () => {
    dispatch(getCategories((res) => {
      setCategories(res);
    }));
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  useEffect(() => {
    if (location?.pathname !== "/products") {
      dispatch(updateRedux({ key: "filters", value: {} }));
    }
  }, [location.pathname]);


  const handleCategory = (id) => {
    dispatch(
      updateRedux({
        key: "filters",
        value: { category: id },
      })
    );
    navigate("/products");
  };

  const chunkArray = (arr, size) => {
    return arr?.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  return (
    <>
      <li className="menu-item">
        <NavLink to="/" className="item-link">
          Home
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/about" className="item-link">
          About Us
        </NavLink>
      </li>
      <li className="menu-item position-relative">
        <a
          href="#"
          className={`item-link  ${isMenuParentActive(otherPages) ? "menuActive" : ""
            }  `}
        >
          Shop
          <i className="icon icon-arr-down" />
        </a>
        <div className="sub-menu sub-menu-style-2">
          {chunkArray(categories, 8)?.map((chunk, chunkIndex) => (
            <ul className="menu-list" key={chunkIndex}>
              {chunk?.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() => handleCategory(item?._id)}
                    className={`menu-link-text link cursor-pointer ${selectedCategory === item?._id ? "menuActive" : ""}`}
                  >
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </li>
      <li className="menu-item">
        <NavLink to="/products" className="item-link">
          Products
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/contact" className="item-link">
          Contact Us
        </NavLink>
      </li>

    </>
  );
}
