"use client";
import { API_IMAGE_BASE_URL } from "@/config/configuration";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard6({ product }) {
  const [currentImage, setCurrentImage] = useState(product?.images?.[0]);


  useEffect(() => {
    setCurrentImage(product?.images?.[0]);
  }, [product]);

  return (
    <div className="card-product style-4">
      <div className="card-product-wrapper radius-16 line-2 asp-ratio-0">
        <Link to={`/product-detail/${product._id}`} className="product-img">
          <img
            className="img-product lazyload"
            alt="image-product"
            src={API_IMAGE_BASE_URL + currentImage}
            width={540}
            height={576}
          />
          <img
            className="img-hover lazyload"
            alt="image-product"
            src={product?.images?.length === 1 ? API_IMAGE_BASE_URL + currentImage : API_IMAGE_BASE_URL + product?.images?.[1]}
            width={540}
            height={576}
          />
        </Link>
        {product.discountPrice !== null && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">AED {product.discountPrice}</span>
          </div>
        )}
      </div>
      <div className="card-product-info text-center">
        <Link
          to={`/product-detail/${product._id}`}
          className="name-product link fw-medium text-md"
        >
          {product.title}
        </Link>
        <p className="price-wrap fw-medium">
          {product?.discountPrice
            ? (
              <>
                <span className={`price-new ${product?.actualPrice ? "text-primary" : ""}`}>
                  AED {product.discountPrice.toFixed(2)}
                </span>
                {product?.actualPrice && (
                  <span className="price-old text-dark">
                    AED {product.actualPrice.toFixed(2)}
                  </span>
                )}
              </>
            )
            : (
              product?.actualPrice && (
                <span className="price-new text-primary">
                  AED {product.actualPrice.toFixed(2)}
                </span>
              )
            )
          }
        </p>
      </div>
    </div>
  );
}
