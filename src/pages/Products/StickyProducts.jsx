"use client";
import React, { useEffect, useState } from "react";
import { stickyProduct } from "@/data/products";

export default function StickyProducts() {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const myElement = document.querySelector(".tf-sticky-btn-atc");

      if (myElement) {
        if (scrollPosition >= 500) {
          myElement.classList.add("show");
        } else {
          myElement.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="tf-sticky-btn-atc">
      <div className="container">
        <div className="tf-height-observer w-100 d-flex align-items-center">
          <div className="tf-sticky-atc-product d-flex align-items-center">
            <div className="tf-sticky-atc-img">
              <img
                className="lazyload"
                alt=""
                src={stickyProduct[0].imgSrc}
                width={828}
                height={1241}
              />
            </div>
            <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
              {stickyProduct[0].title}
            </div>
          </div>
          <div className="tf-sticky-atc-infos">
            <form className="">
              <div className="tf-sticky-atc-variant-price text-center tf-select">
                <select>
                  <option>Black / Small - $130.00</option>
                  <option>Black / M - $130.00</option>
                  <option>Black / L - $130.00</option>
                  <option>Blue / S - $130.00</option>
                  <option>Blue / M - $130.00</option>
                  <option>Blue / L - $130.00</option>
                  <option>Blue / XL - $130.00</option>
                  <option>White / S - $130.00</option>
                  <option>White / M - $130.00</option>
                  <option>White / L - $130.00</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
