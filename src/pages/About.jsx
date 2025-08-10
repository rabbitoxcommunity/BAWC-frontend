import MetaComponent from "@/components/MetaComponent";
import { features2 } from "@/data/features";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const metadata = {
  title: "About || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
  description: "Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
};
export default function About() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className="flat-spacing-3 pb-0">
        <div className="container">
          <div className="row mb-5 pb-5 align-items-center">
            <div className="col-md-6 box-title">
              <p className="display-lg-2 fw-medium">Driven by Tech. Defined<br /> by Trust – <span style={{ color: "#d70200" }}>Bait Al Wahda</span></p>
            </div>
            <div className="col-md-6 box-text">
              <p className="text-md mb-4">Bait Al Wahda Computer Trading L.L.C is a distinguished organization fulfilling diverse IT product and service requirements across the GCC and African continents. Our unwavering commitment to excellence in quality and service has propelled our growth.</p>
              <p className="text-md">Specializing in export markets, we offer competitive prices and unparalleled service excellence. Our satisfied customers continually advocate for our superior products and services, reinforcing our commitment to quality consistency.</p>
            </div>
          </div>
          <div className="image radius-16 overflow-hidden">
            <img
              src="/img/about.jpg"
              alt=""
              className="lazyload"
              width={1440}
              height={502}
            />
          </div>
        </div>
      </section>
      <section className="flat-spacing-3">
        <div className="container">
          <div className="flat-title-2 text-center">
            <p className="display-md-2 fw-medium">Why Choose Us</p>
            <p className="text-md text-main">
              Bait Al Wahda is your trusted partner for quality electronics — offering a wide range of reliable products, fast delivery, <br />and easy WhatsApp ordering, backed by expert support and customer satisfaction.</p>
          </div>
          <div className="row">
            <div className="col-xl-7 col-md-6">
              <ul className="list-esd d-md-flex flex-md-column justify-content-md-center h-100">
                <li className="item">
                  <h6>Wide Range of Quality Products</h6>
                  <p className="text-md">
                    From high-performance laptops to powerful servers and accessories, we offer only genuine and reliable tech solutions.
                  </p>
                </li>
                <li className="item">
                  <h6>Easy & Direct WhatsApp Ordering</h6>
                  <p className="text-md">
                    No complicated checkouts. Simply click "Buy Now" and place your order directly via WhatsApp — fast, simple, and secure.
                  </p>
                </li>
                <li className="item">
                  <h6>Trusted by Businesses & Professionals</h6>
                  <p className="text-md">
                    Our clients rely on us for quality, consistency, and exceptional customer support in every purchase.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="image radius-16 overflow-hidden w-100 h-100">
                <img
                  src="/img/choose-use.jpg"
                  alt=""
                  className="lazyload w-100 h-100 object-fit-cover"
                  width={586}
                  height={586}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-spacing-3 pt-0">
        <div className="container">
          <div className="flat-title-2 d-xl-flex justify-content-xl-between">
            <div className="box-title">
              <p className="display-md-2 fw-medium" style={{ color: "var(--primary)" }}>Curated Just for You</p>
              <p className="text-xl">Handpicked electronics that match your needs — quality, performance, and value, all in one place.</p>
            </div>
            <div className="box-text">
              <p className="text-md">
                At Bait Al Wahda, we go beyond just selling electronics — we handpick every product to ensure it meets the<br className="d-none d-xl-block" />
                standards our customers expect. Whether you're a professional, a student, a business owner, or a gamer.
              </p>
            </div>
          </div>
          <Swiper
            dir="ltr"
            className="swiper tf-swiper"
            {...{
              slidesPerView: 1,
              spaceBetween: 12,
              speed: 800,
              observer: true,
              observeParents: true,
              pagination: { el: ".sw-pagination-iconbox", clickable: true },
              breakpoints: {
                575: { slidesPerView: 2, spaceBetween: 12 },
                992: { slidesPerView: 3, spaceBetween: 24 },
              },
            }}
            modules={[Pagination]}
          >
            {features2.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="tf-icon-box style-border">
                  <div className="box-icon">
                    <i className={`icon ${item.icon}`} />
                  </div>
                  <div className="content">
                    <h6>{item.title}</h6>
                    <p className="text-sm text-line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center" />
          </Swiper>
        </div>
      </section>
    </>
  );
}
