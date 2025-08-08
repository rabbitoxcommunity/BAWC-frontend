"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";

export default function ProductCard1({
  product,
  styleClass = "style-1",
  tooltipDirection = "left",
  textCenter = false,
  ratioClass = "",
}) {
  const [currentImage, setCurrentImage] = useState(product?.imgSrc);


  useEffect(() => {
    setCurrentImage(product?.imgSrc);
  }, [product]);

  return (
    <div
      className={`card-product ${
        product?.sizes?.length > 0 ? "card-product-size" : ""
      } ${product?.isOutofSale ? "out-of-stock" : ""} ${styleClass}`}
    >
      <div className={`card-product-wrapper ${ratioClass} `}>
        <Link to={`/product-detail/${product?.id}`} className="product-img">
          <img
            className="img-product lazyload"
            alt="image-product"
            src={currentImage}
            width={513}
            height={729}
          />
          <img
            className="img-hover lazyload"
            data-src={product?.imgHover}
            alt="image-product"
            src={product?.imgHover}
            width={513}
            height={729}
          />
        </Link>
      </div>
      <div className={`card-product-info ${textCenter ? "text-center" : ""} `}>
        <Link
          to={`/product-detail/${product?.id}`}
          className="name-product link fw-medium text-md"
        >
          {product?.title}
        </Link>
        <p className="price-wrap fw-medium">
          <span
            className={`price-new ${product?.oldPrice ? "text-primary" : ""} `}
          >
            ${product?.price.toFixed(2)}
          </span>{" "}
          {product?.oldPrice && (
            <span className="price-old text-dark">
              ${product?.oldPrice.toFixed(2)}
            </span>
          )}{" "}
        </p>
      </div>
    </div>
  );
}
