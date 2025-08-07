"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
export default function Footer2() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

 const currentYear = new Date().getFullYear();


  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer
      id="footer"
      className="footer-default footer-style-2 radius-16 line"
    >
      <div className="container-4">
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-col-block s1">
                <div className="footer-logo">
                  <Link to={`/home-phonecase`}>
                    <img
                      className="logo"
                      alt="logo"
                      src="/img/logo.avif"
                      width={148}
                      height={44}
                    />
                  </Link>
                </div>
                <div className="tf-collapse-content">
                  <div className="footer-newsletter">
                    <p>
                      Bait Al Wahda Computer Trading L.L.C is a distinguished organization fulfilling diverse IT product and service requirements across the GCC and African continents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-col-block s2">
                <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                  Quick Links
                </div>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li> <Link to={`/about`}>About Us</Link> </li>
                    <li> <Link to={`/contact`}>Contact Us</Link> </li>
                    <li> <Link to={`/products`}>Our Products</Link> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-col-block s3">
                <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                  Resource
                </div>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li>
                      <Link to={`/term-and-condition`}>
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to={`/privacy-policy`}>Privacy Policies</Link>
                    </li>
                    <li>
                      <Link to={`/return-and-refund`}>
                        Returns &amp; Refunds
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="footer-col-block s4">
                <p className="footer-heading footer-heading-mobile text-xl fw-medium">
                  Address
                </p>
                <ul className="footer-info">
                  <li>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@baitalwahda.com">
                        info@baitalwahda.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Phone: <a href="tel:+971 56 415 4420">+971 56 415 4420</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="infor_address"
                        target="_blank"
                        href="https://www.google.com/maps?q=123Yarranst,Punchbowl,NSW2196,Australia"
                      >
                        Address:{" "}
                        <span>
                          SULTAN BUILDING, SHOP NO. S12, AL RAFFA POLICE STATION ROAD, BUR DUBAI- U.A.E
                        </span>
                      </a>
                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-bottom-wrap">
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
         <p>BAWC © {currentYear}. All Rights Reserved. Powered by <a href="https://www.instagram.com/rabbitoxcommunity/" target="_blank" style={{color:"#5cbc63"}}>Rabbitox Community</a></p>
        </div>
      </div>
    </footer>
  );
}
