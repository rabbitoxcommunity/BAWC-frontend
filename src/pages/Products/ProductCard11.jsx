"use client";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ProductCard11({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);


  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);

  return (
    <div
      className="card-product style-list"
      data-availability="In stock"
      data-brand="Rabbitox"
    >
  <div className={`card-product-wrapper ${ratioClass} `}>
        <Link to={`/product-detail/${product?._id}`} className="product-img">
          <img
            className="img-product lazyload"
            alt="image-product"
            src={currentImage}
            width={513}
            height={500}
          />
          <img
            className="img-hover lazyload"
            src={product?.images?.[1] ?  product?.images?.[1] : product?.images?.[0]}
            alt="image-product"
            width={513}
            height={500}
          />
        </Link>
      </div>
      <div className={`card-product-info ${textCenter ? "text-center" : ""} `}>
        <Link
          to={`/product-detail/${product?._id}`}
          className="name-product link fw-medium text-md"
        >
          {product?.title}
        </Link>
        <p className="price-wrap fw-medium">
          <span
            className={`price-new ${product?.actualPrice ? "text-primary" : ""} `}
          >
            AED {product?.discountPrice?.toFixed(2)}
          </span>{" "}
          {product?.actualPrice && (
            <span className="price-old text-dark">
              AED {product?.actualPrice?.toFixed(2)}
            </span>
          )}{" "}
        </p>
      </div>
    </div>
  );
}
