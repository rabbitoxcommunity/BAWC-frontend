"use client";
import { API_IMAGE_BASE_URL } from "@/config/configuration";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard1({
  product,
  styleClass = "style-1",
  tooltipDirection = "left",
  textCenter = false,
  ratioClass = "",
}) {
  const [currentImage, setCurrentImage] = useState(product?.images?.[0]);


  useEffect(() => {
    setCurrentImage(product?.images?.[0]);
  }, [product]);

  return (
    <div
      className={`card-product ${product?.sizes?.length > 0 ? "card-product-size" : ""
        } ${product?.isOutOfStock ? "out-of-stock" : ""} ${styleClass}`}
    >
      <div className={`card-product-wrapper ${ratioClass} `}>
        <Link to={`/product-detail/${product?._id}`} className="product-img">
          <img
            className="img-product lazyload"
            alt="image-product"
            src={API_IMAGE_BASE_URL + currentImage}
            width={513}
            height={500}
          />
          <img
            className="img-hover lazyload"
            src={product?.images?.length === 1 ? API_IMAGE_BASE_URL + currentImage : API_IMAGE_BASE_URL + product?.images?.[1]}
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
