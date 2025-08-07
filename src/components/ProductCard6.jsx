"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";

export default function ProductCard6({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);

  const {
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);

  return (
    <div className="card-product style-4">
      <div className="card-product-wrapper radius-16 line-2 asp-ratio-0">
        <Link to={`/product-detail/${product.id}`} className="product-img">
          <img
            className="img-product lazyload"
            alt="image-product"
            src={currentImage}
            width={540}
            height={576}
          />
          <img
            className="img-hover lazyload"
            data-src={product.imgHover}
            alt="image-product"
            src={product.imgHover}
            width={540}
            height={576}
          />
        </Link>
        {product.discount && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">{product.discount}</span>
          </div>
        )}
      </div>
      <div className="card-product-info text-center">
        <Link
          to={`/product-detail/${product.id}`}
          className="name-product link fw-medium text-md"
        >
          {product.title}
        </Link>
        <p className="price-wrap fw-medium">
          <span
            className={`price-new ${product.oldPrice ? "text-primary" : ""} `}
          >
            ${product.price.toFixed(2)}
          </span>{" "}
          {product.oldPrice && (
            <span className="price-old">${product.oldPrice.toFixed(2)}</span>
          )}
        </p>
      </div>
    </div>
  );
}
