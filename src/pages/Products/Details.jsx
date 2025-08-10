"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductHeading from "./ProductHeading";
import StickyProducts from "./StickyProducts";
import ProductSlider from "./ProductSlider";
import ProductDescription from "./ProductDescription";
export default function Details({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [activeColor, setActiveColor] = useState("Black");
    return (
        <section className="flat-single-product">
            <div className="tf-main-product section-image-zoom">
                <div className="container">
                    <div className="row">
                        {/* Product Images */}
                        <div className="col-md-6">
                            <div className="tf-product-media-wrap sticky-top">
                                <div className="product-thumbs-slider">
                                    <ProductSlider
                                        activeColor={activeColor}
                                        firstItem={product.imgSrc}
                                        setActiveColor={setActiveColor}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /Product Images */}
                        {/* Product Info */}
                        <div className="col-md-6">
                            <div className="tf-zoom-main" />
                            <div className="tf-product-info-wrap position-relative">
                                <div className="tf-product-info-list other-image-zoom">
                                    <ProductHeading product={product} />
                                    <div className="tf-product-total-quantity">
                                        <a
                                            href="#"
                                            className="tf-btn btn-primary w-100 animate-btn"
                                        >
                                           <i class="icon icon-whatsapp"></i> Buy it now
                                        </a>
                                    </div>

                                    <ProductDescription />
                                </div>
                            </div>
                        </div>
                        {/* /Product Info */}
                    </div>
                </div>
            </div>
            <StickyProducts />
        </section>
    );
}
