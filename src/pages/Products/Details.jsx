"use client";
import React, { useState } from "react";
import ProductHeading from "./ProductHeading";
import ProductSlider from "./ProductSlider";
import ProductDescription from "./ProductDescription";
export default function Details({ detail }) {
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
                                        slideItems={detail}
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
                                    <ProductHeading product={detail} />
                                 

                                    <ProductDescription product={detail} />
                                </div>
                            </div>
                        </div>
                        {/* /Product Info */}
                    </div>
                </div>
            </div>
        </section>
    );
}
