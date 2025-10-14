"use client";
import { slides2 } from "@/data/heroSlides";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { getBanners } from "@/redux/actionCreator";
import { useDispatch } from "react-redux";

export default function Hero() {
  const [banners, setBanners] = useState([])
  const [Loader, setLoader] = useState(false)

  const dispatch = useDispatch()

  const fetchBanners = () => {
    setLoader(true)
    dispatch(getBanners((res) => {
      setLoader(false)
      setBanners(res);
    }));
  }

  useEffect(() => {
    fetchBanners()
  }, []);

  return (
    <div className="tf-slideshow slider-electronic slider-default">
      {
        Loader && <div className="main_loader fixed">
          <div className="page_loader"></div>
        </div>
      }
      <Swiper
        className="swiper tf-sw-slideshow slider-effect-fade"
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".spd11",
        }}
        dir="ltr"
      >
        {banners?.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide${slide.reverse ? " reverse-slide" : ""}`}
          >
            <div className={`slider-wrap ${slide.bgType}`}>
              <div className="image">
                <picture>
                  {/* Mobile */}
                  <source
                    media="(max-width: 768px)"
                    srcSet={slide?.image}
                  />
                  <img
                    src={slide?.image}
                    alt="slider"
                    className="lazyload"
                  />
                </picture>
              </div>
              <div className="box-content">
                <div className="container">
                  <div className="row">
                    <div
                      className={
                        slide?.reverse
                          ? "offset-lg-8 col-lg-4 col-sm-6 offset-6 col-12"
                          : "col-lg-12 col-12 col-sm-6"
                      }
                    >
                      <div className="content-slider">
                        <div className="box-title-slider">
                          <p className={`sub text-md fw-medium fade-item fade-item-1 text-dark`}>
                            {slide.subTitle}
                          </p>
                          <h2
                            className={`heading fw-medium fade-item fade-item-2 text-dark`}

                          >
                            {slide?.mainTitle}
                          </h2>
                        </div>
                        {
                          slide?.link &&
                          <div className="box-btn-slider fade-item fade-item-3">
                            <Link
                              to={`${slide?.link}`}
                              target="_blank"
                              className="tf-btn bg-primary animate-btn"
                            >
                              Shop Now
                              <i className="icon icon-arr-right" />
                            </Link>
                          </div>
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider justify-content-center spd11" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
