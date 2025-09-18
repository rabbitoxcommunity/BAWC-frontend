"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from "@/redux/actionCreator";
import { API_IMAGE_BASE_URL } from "@/config/configuration";
import { updateRedux } from "@/redux/commonReducer";

export default function Categories() {
  const [categories, setCategories] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchCategories = () => {
    dispatch(getCategories((res) => {
      setCategories(res);
    }));
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  const handleCategory = (id) => {
    dispatch(
      updateRedux({
        key: "filters",
        value: { category: id },
      })
    );
    navigate("/products");
  };
  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="flat-title text-start wow fadeInUp">
          <h4 className="title">Top Categories</h4>
        </div>
        <div className="wow fadeInUp">
          <div className="fl-control-sw pos1">
            <Swiper
              dir="ltr"
              className="swiper tf-swiper"
              {...{
                slidesPerView: 2,
                spaceBetween: 12,
                speed: 800,
                observer: true,
                observeParents: true,
                slidesPerGroup: 2,
                navigation: {
                  clickable: true,
                  nextEl: ".nav-next-categories",
                  prevEl: ".nav-prev-categories",
                },
                pagination: {
                  el: ".sw-pagination-categories",
                  clickable: true,
                },
                breakpoints: {
                  575: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                    slidesPerGroup: 3,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                    slidesPerGroup: 4,
                  },
                  992: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                    slidesPerGroup: 4,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                    slidesPerGroup: 4,
                  },
                },
              }}
              modules={[Pagination, Navigation]}
            >
              {categories?.map((category, index) => (
                <SwiperSlide className="swiper-slide cursor-pointer" key={index}>
                  <div className="wg-cls style-square hover-img" onClick={()=>handleCategory(category?._id)}>
                    <div
                      className="image img-style d-block"
                    >
                      <img
                        src={API_IMAGE_BASE_URL + category?.image}
                        className="lazyload"
                        width={440}
                        height={440}
                      />
                    </div>
                    <div className="cls-content text-center">
                      <div
                        className="link text-md fw-medium uppercase"
                        style={{textTransform:'capitalize'}}
                      >
                        {category?.name}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center" />
            </Swiper>
            <div className="swiper-button-next d-none d-xl-flex nav-swiper nav-next-categories" />
            <div className="swiper-button-prev d-none d-xl-flex nav-swiper nav-prev-categories" />
          </div>
        </div>
      </div>
    </section>
  );
}
