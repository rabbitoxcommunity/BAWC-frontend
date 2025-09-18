"use client";
import { Link, useNavigate } from "react-router-dom";

import {
  blogMenuItems,
  demoItems,
  otherPages,
  productMenuItems,
  shopPages,
} from "@/data/menu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories } from "@/redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { updateRedux } from "@/redux/commonReducer";
export default function MobileMenu() {
  const [categories, setCategories] = useState([])

  const { pathname } = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const filters = useSelector((state) => state.commonReducer.filters || {});
  const selectedCategory = filters?.category || ""


  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  const fetchCategories = () => {
    dispatch(getCategories((res) => {
      setCategories(res);
    }));
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  const handleCategory = (id) => {
    dispatch(
      updateRedux({
        key: "filters",
        value: { category: id },
      })
    );
    navigate("/products");
  };

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <button
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item"> <Link to="/" className={`mb-menu-link`} >Home </Link> </li>
              <li className="nav-mb-item"> <Link to="/about" className={`mb-menu-link`} >About Us</Link> </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-home"
                  className={`collapsed mb-menu-link  ${isMenuParentActive(categories) ? "menuActive" : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-home"
                >
                  <span>Shop</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-home" className="collapse">
                  <ul className="sub-nav-menu">
                    {categories.map((link, i) => (
                      <li key={i} className={`sub-nav-link text-uppercase ${selectedCategory === link?._id ? "menuActive" : ""}`} onClick={() => handleCategory(link?._id)}>
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item"> <Link to="/products" className={`mb-menu-link`} >Products </Link> </li>
              <li className="nav-mb-item"> <Link to="/contact" className={`mb-menu-link`} >Contact Us </Link> </li>
            </ul>
          </div>
          <div className="mb-other-content">
            <div className="mb-notice">
              <Link to={`/contact`} className="text-need">
                Need Help?
              </Link>
            </div>
            <div className="mb-contact">
              <p>Address: Al Raffa St - Al Fahidi - Dubai - United Arab Emirates</p>
            </div>
            <ul className="mb-info">
              <li>
                Email: <b className="fw-medium">info@baitalwahda.com</b>
              </li>
              <li>
                Phone: <b className="fw-medium">+971 56 415 4420</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
