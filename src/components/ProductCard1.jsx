"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ProductCard1({
  product,
  styleClass = "style-1",
  tooltipDirection = "left",
  textCenter = false,
  ratioClass = "",
}) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);


  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);

  return (
    <div
      className={`card-product ${
        product.sizes?.length > 0 ? "card-product-size" : ""
      } ${product.isOutofSale ? "out-of-stock" : ""} ${styleClass}`}
    >
      <div className={`card-product-wrapper ${ratioClass} `}>
        <Link to={`/product-detail/${product.id}`} className="product-img">
          <img
            className="img-product lazyload"
            alt="image-product"
            src={currentImage}
            width={513}
            height={729}
          />
          <img
            className="img-hover lazyload"
            data-src={product.imgHover}
            alt="image-product"
            src={product.imgHover}
            width={513}
            height={729}
          />
        </Link>
        {product.saleLabel && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">{product.saleLabel}</span>
          </div>
        )}
        {product.isTrending && (
          <div className="on-sale-wrap">
            <span className="on-sale-item trending">Trending</span>
          </div>
        )}
        {!product.isOutofSale && (
          <>
            {product.sizes?.length > 0 && (
              <ul className="size-box">
                {product.sizes.map((size, index) => (
                  <li className="size-item text-xs text-white" key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <div className={`card-product-info ${textCenter ? "text-center" : ""} `}>
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
            <span className="price-old text-dark">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}{" "}
        </p>
        {product.colors?.length > 0 && (
          <ul
            className={`list-color-product ${
              textCenter ? "justify-content-center" : ""
            } `}
          >
            {product.colors.map((color, index) => (
              <li
                className={`list-color-item color-swatch hover-tooltip tooltip-bot ${
                  currentImage == color.img ? "active" : ""
                } ${color.value == "bg-white" ? "line" : ""}`}
                key={index}
                onMouseOver={() => setCurrentImage(color.img)}
              >
                <span className="tooltip color-filter">{color.label}</span>
                <span className={`swatch-value ${color.value}`} />
                <img
                  className="lazyload"
                  data-src={color.img}
                  alt="image-product"
                  src={color.img}
                  width="684"
                  height="972"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
