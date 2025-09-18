"use client";
import ProductCard6 from "@/components/ProductCard6";
import { products13 } from "@/data/products";
import { getProducts } from "@/redux/actionCreator";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  const [products, setProducts] = useState([])
  const featuredProducts = products?.filter(p => p?.isFeatured);


  const dispatch = useDispatch()

  const fetchProducts = (reset = false) => {
    dispatch(getProducts({}, (res) => {
      setProducts(res?.data);
    }));
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <section className="flat-spacing-2 bg-white mx_40 radius-16">
      <div className="container-3">
        <div className="flat-title style-2 wow fadeInUp">
          <p className="text-md fw-medium text-uppercase text-primary">
            Discover our top picks
          </p>
          <h4 className="title">Featured Collections</h4>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-swiper"
          {...{
            slidesPerView: 2,
            spaceBetween: 12,
            speed: 800,
            observer: true,
            observeParents: true,
            navigation: {
              clickable: true,
              nextEl: ".nav-next-top-pick",
              prevEl: ".nav-prev-top-pick",
            },
            pagination: {
              el: ".sw-pagination-top-pick",
              clickable: true,
              type: "progressbar",
            },
            breakpoints: {
              768: { slidesPerView: 3, spaceBetween: 12 },
              1200: { slidesPerView: 4, spaceBetween: 24 },
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {featuredProducts?.map((product) => (
            <SwiperSlide className="swiper-slide" key={product._id}>
              <ProductCard6 product={product} />
            </SwiperSlide>
          ))}
          <div className="sw-pagination-top-pick position-relative" />
        </Swiper>
      </div>
    </section>
  );
}
