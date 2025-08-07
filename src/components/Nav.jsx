"use client";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
  blogMenuItems,
  demoItems,
  otherPages,
  productMenuItems,
  shopPages,
} from "@/data/menu";
import { shopItems } from "@/data/blogs";
import { useLocation } from "react-router-dom";
import { categories } from "@/data/collections";

export default function Nav() {
  const { pathname } = useLocation();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isMenuParentActive2 = (menu) => {
    return menu.some((elm) => isMenuParentActive(elm.links));
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
          className={`item-link  ${
            isMenuParentActive(otherPages) ? "menuActive" : ""
          }  `}
        >
          Shop
          <i className="icon icon-arr-down" />
        </a>
        <div className="sub-menu sub-menu-style-2">
          <ul className="menu-list">
            {categories.slice(0, 8).map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`menu-link-text link  ${
                    isMenuActive(item) ? "menuActive" : ""
                  } `}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="menu-list">
            {categories.slice(8, 16).map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`menu-link-text link  ${
                    isMenuActive(item) ? "menuActive" : ""
                  } `}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
                    <ul className="menu-list">
            {categories.slice(16).map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`menu-link-text link  ${
                    isMenuActive(item) ? "menuActive" : ""
                  } `}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
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
