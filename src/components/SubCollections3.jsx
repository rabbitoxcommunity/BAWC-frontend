import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actionCreator";
import { API_IMAGE_BASE_URL } from "@/config/configuration";
import { updateRedux } from "@/redux/commonReducer";

export default function SubCollections3({ parentClass = "flat-spacing-24" }) {
  const [categories, setCategories] = useState([])

  const dispatch = useDispatch()
  const filters = useSelector((state) => state.commonReducer.filters || {});
  const selectedCategory = filters.category || ""

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
  }
  const clearFilters = () => {
    dispatch(updateRedux({ key: "filters", value: {} }));
  };

  return (
    <div className={parentClass}>
      <div className="container-6 fl-control-sw pos1">
        <Swiper
          dir="ltr"
          className="swiper tf-swiper"
          {...{
            slidesPerView: 3,
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
              575: { slidesPerView: 5, spaceBetween: 12, slidesPerGroup: 2 },
              768: { slidesPerView: 6, spaceBetween: 24, slidesPerGroup: 3 },
              1200: { slidesPerView: 8, spaceBetween: 64, slidesPerGroup: 3 },
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {categories?.map((slide, i) => (
            <SwiperSlide
              className={`swiper-slide`}
              key={i} onClick={() => handleCategory(slide?._id)} >
              <div className="wg-cls style-circle-md hover-img">
                <div className={`image img-style d-block ${selectedCategory === slide._id ? "active" : ""}`}>
                  <img
                    src={API_IMAGE_BASE_URL + slide.image}
                    className="lazyload"
                    width={198}
                    height={198}
                  />
                </div>
                <div className="cls-content text-center">
                  <div className={`link text-sm fw-medium text-capitalize ${selectedCategory === slide._id ? "name_active" : ""}`}>
                    {slide.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* item 8 */}
          <SwiperSlide className="swiper-slide" onClick={clearFilters}>
            <div className="wg-cls style-circle-md">
              <div className="image shop-all">
                <img src="/img/logo.avif" alt="" />
              </div>
              <div className="cls-content text-center">
                <div className="link text-sm fw-medium">
                  Shop All
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center" />
        </Swiper>
        <div className="swiper-button-next d-none d-xl-flex nav-swiper nav-next-categories" />
        <div className="swiper-button-prev d-none d-xl-flex nav-swiper nav-prev-categories" />
      </div>
    </div>
  );
}
