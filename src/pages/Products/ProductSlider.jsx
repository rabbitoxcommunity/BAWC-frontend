"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { API_IMAGE_BASE_URL } from "@/config/configuration";

export default function ProductSlider({ activeColor = "Black", setActiveColor = () => {}, slideItems, }) {
  const items = slideItems?.images;

  const [thumbSwiper, setThumbSwiper] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const lightboxRef = useRef(null);
  useEffect(() => {
    // Initialize PhotoSwipeLightbox
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    // Store the lightbox instance in the ref for later use
    lightboxRef.current = lightbox;

    // Cleanup: destroy the lightbox when the component unmounts
    return () => {
      lightbox.destroy();
    };
  }, []);



  return (
    <>
      <Swiper
        dir="ltr"
        className="swiper tf-product-media-thumbs other-image-zoom"
        slidesPerView={4}
        direction="vertical"
        onSwiper={setThumbSwiper}
        modules={[Thumbs]}
        spaceBetween={8}
      >
        {items?.map((ele, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide stagger-item"
          >
            <div className="item">
              <img
                className="lazyload"
                data-src={API_IMAGE_BASE_URL + ele}
                alt="img-product"
                 src={API_IMAGE_BASE_URL + ele}
                width={828}
                height={1241}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flat-wrap-media-product">
        <Swiper
          modules={[Thumbs, Navigation]}
          dir="ltr"
          className="swiper tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbSwiper }}
          navigation={{
            prevEl: ".snbp1",
            nextEl: ".snbn1",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {items?.map((ele, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide"
              data-color="black"
              data-size="small"
            >
              <a
                href={API_IMAGE_BASE_URL + ele}
                target="_blank"
                className="item"
                data-pswp-width="552px"
                data-pswp-height="827px"
              >
                <img
                  className="tf-image-zoom lazyload"
                  data-zoom={API_IMAGE_BASE_URL + ele}
                  data-src={API_IMAGE_BASE_URL + ele}
                  alt="img-product"
                  src={API_IMAGE_BASE_URL + ele}
                  width={828}
                  height={1241}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next nav-swiper thumbs-next snbn1" />
        <div className="swiper-button-prev nav-swiper thumbs-prev snbp1" />
      </div>
    </>
  );
}
